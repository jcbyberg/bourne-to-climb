import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/app/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)
const destinationEmail = process.env.RESEND_TO_EMAIL ?? 'dustin@bournetoclimb.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactFormSchema.parse(body)

    await resend.emails.send({
      from: 'Bourne To Climb <quotes@bournetoclimb.com>',
      to: destinationEmail,
      subject: `New ${data.service} enquiry from ${data.name}`,
      replyTo: data.email,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || 'Not provided'}`,
        `Service: ${data.service}`,
        '',
        data.message,
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error', error)
    return NextResponse.json({ error: 'Unable to send message right now.' }, { status: 500 })
  }
}
