import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY

if (!resendApiKey) {
  console.warn("RESEND_API_KEY is not set. Email sending will be disabled.")
}

export const resend = resendApiKey ? new Resend(resendApiKey) : null

export const defaultFromEmail =
  process.env.RESEND_FROM_EMAIL ?? "Bourne To Climb <no-reply@bournetoclimb.com>"

export const defaultToEmail =
  process.env.RESEND_TO_EMAIL ?? "contact@bournetoclimb.com"
