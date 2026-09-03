import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // 1. استلام بيانات العميل من الفورم (الاسم، إيميل العميل، الرسالة)
    const { name, email, message } = await request.json();

    // 2. تسجيل الدخول لإيميل الانفو الخاص بك للإرسال
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@pzone.com.sa",
        pass: "Hh@12345", // كلمة مرور التطبيقات التي أنشأتها
      },
    });

    // 3. تجهيز الرسالة لتصلك إلى صندوق الانفو
    const mailOptions = {
      from: "info@pzone.com.sa", // الإرسال يتم عبر سيرفر الانفو
      to: "info@pzone.com.sa", // وتصلك أنت على نفس الانفو
      subject: `رسالة تواصل جديدة من: ${name}`,
      text: `
يوجد رسالة جديدة من موقع PZONE:

اسم العميل: ${name}
إيميل العميل: ${email}

نص الرسالة:
${message}
      `,
    };

    // 4. إرسال الرسالة
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "تم الإرسال بنجاح" }, { status: 200 });
    
  } catch (error) {
    console.error("خطأ في السيرفر:", error);
    return NextResponse.json({ error: "فشل الإرسال" }, { status: 500 });
  }
}
