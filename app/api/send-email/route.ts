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
    const parsed = contactFormSchema.parse(body)

    const attachments = Array.isArray(body.attachments)
      ? ((body.attachments as Attachment[]) || []).slice(0, 3)
      : []

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
    case "emergency":
      return "Emergency Service"
    default:
      return "Other"
  }
}
