import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // إعداد خادم الإرسال الخاص بـ Zoho
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // استخدام التشفير SSL
      auth: {
        user: "info@pzone.com.sa",
        pass: "Hh@12345", // كلمة مرور التطبيقات التي قمت بإنشائها
      },
    });

    // إعداد وتجهيز رسالة الإيميل
    const mailOptions = {
      from: `"موقع PZONE" <info@pzone.com.sa>`, // يجب أن يكون الإرسال من إيميلك لتجنب الحظر من Zoho
      replyTo: email, // إيميل العميل لكي تتمكن من الرد عليه مباشرة
      to: "info@pzone.com.sa", // الإيميل الذي سيستقبل الرسالة
      subject: `رسالة جديدة من الموقع: ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4c1d95;">رسالة جديدة من نموذج التواصل</h2>
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>البريد الإلكتروني:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>محتوى الرسالة:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    };

    // إرسال الإيميل
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}