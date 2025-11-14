import { NextResponse } from "next/server"

import { defaultFromEmail, defaultToEmail, resend } from "@/lib/resend"
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations"

type Attachment = {
  name: string
  type?: string
  content: string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const recaptchaToken =
      typeof body.recaptchaToken === "string" ? body.recaptchaToken : null
    const recaptchaAction =
      typeof body.recaptchaAction === "string" ? body.recaptchaAction : "contact_form"
    const parsed = contactFormSchema.parse(body)

    const attachments = Array.isArray(body.attachments)
      ? ((body.attachments as Attachment[]) || []).slice(0, 3)
      : []

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    const recaptchaMinScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5")
    if (!recaptchaSecret) {
      console.error("RECAPTCHA_SECRET_KEY is not set.")
      return NextResponse.json(
        { error: "reCAPTCHA is not configured." },
        { status: 500 },
      )
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 },
      )
    }

    const verificationParams = new URLSearchParams({
      secret: recaptchaSecret,
      response: recaptchaToken,
    })

    const remoteIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null
    if (remoteIp) {
      verificationParams.set("remoteip", remoteIp)
    }

    const recaptchaVerification = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: verificationParams,
      },
    )

    if (!recaptchaVerification.ok) {
      console.error("reCAPTCHA verification request failed.", recaptchaVerification.status)
      return NextResponse.json(
        { error: "Unable to verify reCAPTCHA. Please try again." },
        { status: 502 },
      )
    }

    const verificationResult = await recaptchaVerification.json()
    if (!verificationResult.success) {
      console.warn("reCAPTCHA verification unsuccessful.", verificationResult)
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 },
      )
    }

    if (
      typeof verificationResult.action === "string" &&
      verificationResult.action !== recaptchaAction
    ) {
      console.warn("reCAPTCHA action mismatch.", {
        expected: recaptchaAction,
        received: verificationResult.action,
      })
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 },
      )
    }

    const score =
      typeof verificationResult.score === "number" ? verificationResult.score : null
    const minScore = Number.isFinite(recaptchaMinScore) ? recaptchaMinScore : 0.5
    if (score === null || score < minScore) {
      console.warn("reCAPTCHA score below threshold.", {
        score,
        minScore,
        reasons: verificationResult["error-codes"] ?? [],
      })
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again later." },
        { status: 403 },
      )
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      )
    }

    await resend.emails.send({
      from: defaultFromEmail,
      to: defaultToEmail,
      replyTo: parsed.email,
      subject: `New ${formatService(parsed.service)} request from ${parsed.name}`,
      text: createPlainText(parsed),
      html: createHtmlMessage(parsed),
      attachments: attachments.map((file) => ({
        filename: file.name,
        content: file.content,
        mimeType: file.type,
      })),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send contact email", error)
    return NextResponse.json(
      { error: "Unable to send your request right now." },
      { status: 500 },
    )
  }
}

function createPlainText(values: ContactFormValues) {
  return [
    "New quote request",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "N/A"}`,
    `Service: ${formatService(values.service)}`,
    "",
    "Message:",
    values.message,
  ].join("\n")
}

function createHtmlMessage(values: ContactFormValues) {
  const messageHtml = values.message
    .split("\n")
    .map((line) => `<p>${line || "<br />"}</p>`)
    .join("")

  return `
    <h1>New Quote Request</h1>
    <ul>
      <li><strong>Name:</strong> ${values.name}</li>
      <li><strong>Email:</strong> ${values.email}</li>
      <li><strong>Phone:</strong> ${values.phone || "N/A"}</li>
      <li><strong>Service:</strong> ${formatService(values.service)}</li>
    </ul>
    <h2>Message</h2>
    ${messageHtml}
  `
}

function formatService(service: ContactFormValues["service"]) {
  switch (service) {
    case "removal":
      return "Tree Removal"
    case "pruning":
      return "Pruning & Trimming"
    case "grinding":
      return "Stump Grinding"
    case "storm":
      return "Storm Damage Cleanup"
    default:
      return "Other"
  }
}
