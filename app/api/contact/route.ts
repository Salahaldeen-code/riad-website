import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "الرجاء تعبئة جميع الحقول" },
        { status: 400 }
      )
    }

    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASSWORD
    const host = process.env.SMTP_HOST || "smtp.hostinger.com"
    const port = Number(process.env.SMTP_PORT) || 465

    if (!user || !pass) {
      console.error("Missing EMAIL_USER or EMAIL_PASSWORD in environment")
      return NextResponse.json(
        { success: false, error: "إعدادات البريد غير مكتملة" },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: true,
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: `"موقع مقدام" <${user}>`,
      to: user,
      replyTo: email,
      subject: `رسالة تواصل من الموقع - ${name}`,
      text: `الاسم: ${name}\nالبريد: ${email}\n\nالرسالة:\n${message}`,
      html: `
        <p><strong>الاسم:</strong> ${escapeHtml(name)}</p>
        <p><strong>البريد:</strong> ${escapeHtml(email)}</p>
        <hr />
        <p><strong>الرسالة:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { success: false, error: "حدث خطأ أثناء الإرسال. حاول لاحقاً." },
      { status: 500 }
    )
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
