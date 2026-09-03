import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // 1. استلام البيانات اللي كتبها العميل في الفورم
    const body = await request.json();
    const { name, email, message } = body;

    // 2. إعداد الاتصال بسيرفر الإيميل (Zoho)
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@pzone.com.sa",
        pass: "Hh@12345", // كلمة المرور اللي أنشأتها
      },
    });

    // 3. تجهيز الرسالة اللي راح توصلك على إيميلك
    const mailOptions = {
      from: "info@pzone.com.sa", // الإيميل اللي يطلع منه الطلب
      replyTo: email, // عشان لو ضغطت "رد" في إيميلك يروح الرد للعميل مباشرة
      to: "info@pzone.com.sa", // الإيميل اللي راح يستقبل الرسالة (إيميلك)
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

    // 4. إرسال الرسالة فعلياً
    await transporter.sendMail(mailOptions);

    // 5. إرجاع رد ناجح لواجهة الموقع
    return NextResponse.json({ message: "تم الإرسال بنجاح" }, { status: 200 });
    
  } catch (error: any) {
    // طباعة الخطأ في السيرفر عشان لو صار مشكلة نقدر نعرفها
    console.error("خطأ أثناء إرسال الإيميل:", error.message);
    return NextResponse.json({ error: "حدث خطأ في الإرسال" }, { status: 500 });
  }
}
