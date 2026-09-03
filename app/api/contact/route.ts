import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 1. التحقق من أن المستخدم أدخل جميع البيانات
    if (!name || !email || !message) {
      return NextResponse.json({ error: "الرجاء تعبئة جميع الحقول" }, { status: 400 });
    }

    // 2. إعداد الاتصال بسيرفر الإيميل (Zoho)
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@pzone.com.sa",
        // ⚠️ مهم جداً: يجب استخدام "كلمة مرور التطبيقات" وليس كلمة المرور العادية
        pass: "APP_PASSWORD_HERE", 
      },
    });

    // 3. تجهيز الرسالة
    const mailOptions = {
      from: "info@pzone.com.sa",
      replyTo: email,
      to: "info@pzone.com.sa",
      subject: `رسالة جديدة من الموقع - ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, Tahoma, sans-serif; padding: 20px; color: #111;">
          <h2 style="color: #4c1d95;">توجد رسالة تواصل جديدة من الموقع</h2>
          <p><strong>اسم العميل:</strong> ${name}</p>
          <p><strong>إيميل العميل:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 1px solid #ccc; margin: 20px 0;" />
          <p><strong>نص الرسالة:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // 4. إرسال الرسالة
    await transporter.sendMail(mailOptions);

    // 5. إرجاع رد ناجح
    return NextResponse.json({ message: "تم الإرسال بنجاح" }, { status: 200 });
    
  } catch (error: any) {
    console.error("خطأ أثناء إرسال الإيميل:", error);
    return NextResponse.json({ error: "حدث خطأ في الإرسال" }, { status: 500 });
  }
}
