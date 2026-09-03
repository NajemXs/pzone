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
        pass: "Hh@12345", // كلمة مرور التطبيقات
      },
    });

    // إعداد وتجهيز رسالة الإيميل
    const mailOptions = {
      // 1. المُرسل الفعلي (يجب أن يكون إيميلك لتجنب الحظر الأمني من Zoho)
      from: `"PZONE Website" <info@pzone.com.sa>`, 
      
      // 2. إيميل العميل للرد (هنا السحر: عند الضغط على رد في Zoho، سيرد على العميل مباشرة)
      replyTo: email, 
      
      // 3. الإيميل المستقبل (صندوق الوارد الخاص بك)
      to: "info@pzone.com.sa", 
      
      // وضعنا اسم العميل وإيميله في العنوان لتكون واضحة لك في صندوق الوارد
      subject: `رسالة جديدة من الموقع عبر: ${name} - ${email}`, 
      
      // تصميم الرسالة التي ستصلك
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 20px; text-align: center;">
            <h2 style="color: #fff; margin: 0;">رسالة تواصل جديدة</h2>
          </div>
          <div style="padding: 20px; background-color: #f8fafc;">
            <p style="margin-bottom: 10px;"><strong>اسم المُرسل:</strong> ${name}</p>
            <p style="margin-bottom: 20px;"><strong>البريد الإلكتروني للعميل:</strong> <a href="mailto:${email}" style="color: #4c1d95;">${email}</a></p>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            
            <p style="color: #64748b; font-size: 14px; margin-bottom: 10px;"><strong>محتوى الرسالة:</strong></p>
            <div style="background-color: #fff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap; font-size: 16px;">${message}</div>
          </div>
        </div>
      `,
    };

    // تنفيذ عملية الإرسال
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
