// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";

const phone = "0555833295";
const email = "info@pzone.com.sa";

const heroSlides = [
  {
    image: "/1.png",
    title: "محطات وقود حديثة",
    text: "شبكة متطورة من محطات الوقود تقدم وقوداً نظيفاً وتجربة خدمة مريحة للسائقين في المملكة.",
  },
  {
    image: "/2.png",
    title: "شحن السيارات الكهربائية",
    text: "محطات شحن ذكية تدعم التحول إلى النقل الكهربائي للأفراد والشركات.",
  },
  {
    image: "/3.png",
    title: "حلول طاقة واستدامة",
    text: "منتجات وقود وطاقة مصممة لتقليل الانبعاثات وحماية الموارد الطبيعية.",
  },
  {
    image: "/4.png",
    title: "محطات وخدمات متكاملة",
    text: "محطات وقود وخدمات مرافقة للسائقين والأساطيل في مواقع استراتيجية.",
  },
  {
    image: "/5.png",
    title: "بنية تحتية متقدمة",
    text: "شبكة توزيع وشحن متكاملة لخدمة احتياجات النقل والطاقة بكفاءة عالية.",
  },
];

// صور ثابتة قديمة + بقية الصور 6–11 من public
const galleryImages = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function HomePage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const isArabic = lang === "ar";

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const current = heroSlides[index];

  const t = {
    heroSubtitle: isArabic
      ? "مستقبل صناعة الوقود والطاقة في المملكة"
      : "The future of fuel and energy in the Kingdom",
    heroCall: isArabic ? "اتصل بنا الآن" : "Call us now",
    aboutTitle: isArabic ? "من نحن" : "About Us",
    aboutText: isArabic
      ? "نحن شركة رائدة في مجال محطات وقود السيارات وخدمات السيارات الكهربائية. تأسست شركة منطقة النفط للوقود لتلبية احتياجات السوق وأصحاب السيارات في المملكة، من خلال تقديم وقود عالي الجودة وخدمات شحن كهربائية متطورة. نلتزم بالاستدامة والأداء البيئي، ونسعى إلى تقديم تجربة سلسة ومريحة لعملائنا عبر فريق متخصص يعمل بجد لتوفير حلول تناسب احتياجات النقل والطاقة."
      : "We are a leading company in fuel stations and EV services in Saudi Arabia, delivering high‑quality fuel and advanced charging solutions with a strong focus on sustainability and customer experience.",
    stats: isArabic
      ? ["محطات وقود", "محطات شحن كهربائي", "سنوات خبرة", "عميل نخدمه يومياً"]
      : ["Fuel stations", "EV charging points", "Years of experience", "Daily customers"],
    servicesTitle: isArabic
      ? "حلول الوقود والطاقة لدى PZONE"
      : "PZONE fuel & energy solutions",
    servicesIntro: isArabic
      ? "خدمات متكاملة للسائقين، الأساطيل، والشركاء في قطاع النقل والطاقة مع تركيز على الجودة والاستدامة."
      : "Integrated services for drivers, fleets and partners with a focus on quality and sustainability.",
    servicesCards: isArabic
      ? [
          {
            title: "محطات وقود نظيفة وآمنة",
            text: "وقود عالي الجودة بمعايير سلامة وبيئة صارمة، مع تصميم حديث للمحطات وخدمات مرافقة للسائقين.",
          },
          {
            title: "محطات شحن كهربائي",
            text: "بنية تحتية متطورة لمحطات شحن كهربائي سريعة وعادية في مواقع استراتيجية داخل المدن وعلى الطرق.",
          },
          {
            title: "حلول أساطيل وشراكات",
            text: "عقود تزويد وقود وطاقة للشركات والجهات الحكومية مع تقارير متابعة واستهلاك مخصصة.",
          },
        ]
      : [
          {
            title: "Clean & safe fuel stations",
            text: "High‑quality fuel that meets strict safety and environmental standards with modern designs.",
          },
          {
            title: "EV charging stations",
            text: "Developed infrastructure for fast and regular EV charging in strategic locations.",
          },
          {
            title: "Fleet & partnership solutions",
            text: "Fuel and energy contracts for companies and authorities with tailored reporting.",
          },
        ],
    whyTitle: isArabic ? "لماذا PZONE؟" : "Why PZONE?",
    whyList: isArabic
      ? [
          "التركيز على السلامة والجودة في كل نقطة خدمة.",
          "التزام واضح بالاستدامة وتقليل الانبعاثات.",
          "دعم كامل لأصحاب السيارات الكهربائية والأساطيل.",
          "فريق خدمة عملاء متخصص ومتواجد على مدار الساعة.",
        ]
      : [
          "Focus on safety and quality at every service point.",
          "Strong commitment to sustainability and reduced emissions.",
          "Full support for EV owners and fleets.",
          "Dedicated customer service team available 24/7.",
        ],
    galleryTitle: isArabic ? "معرض الصور" : "Gallery",
    gallerySub: isArabic
      ? "لقطات من محطاتنا، أسطول النقل، ومحطات الشحن الكهربائي."
      : "Images from our stations, fleet and EV charging facilities.",
    mapTitle: isArabic ? "مواقعنا على الخريطة" : "Our locations on the map",
    mapSub: isArabic
      ? "موقعنا في مدينة جدة – المملكة العربية السعودية."
      : "Our location in Jeddah, Saudi Arabia.",
    contactTitle: isArabic ? "اتصل بنا" : "Contact us",
    contactText: isArabic
      ? "للشراكات، تشغيل محطات جديدة، حلول أساطيل، أو استفسارات حول محطات الشحن الكهربائي، يسعد فريق شركة منطقة النفط للوقود بخدمتكم."
      : "For partnerships, new stations, fleet solutions or EV charging inquiries, our team is ready to support you.",
    contactName: isArabic ? "الاسم الكامل" : "Full name",
    contactEmail: isArabic ? "البريد الإلكتروني" : "Email",
    contactType: isArabic
      ? "نوع الطلب (شراكة، استفسار، أسطول...)"
      : "Request type (partnership, inquiry, fleet...)",
    contactMsg: isArabic ? "اكتب رسالتك هنا" : "Write your message here",
    contactBtn: isArabic ? "إرسال الرسالة" : "Send message",
    contactPhoneLabel: isArabic ? "الهاتف" : "Phone",
    contactEmailLabel: isArabic ? "البريد الإلكتروني" : "Email",
    contactLocation: isArabic
      ? "المملكة العربية السعودية – جدة"
      : "Jeddah, Saudi Arabia",
  };

  return (
    <div className="min-h-screen">
      <Header
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === "ar" ? "en" : "ar"))}
      />

      {/* HERO بدون كرت، مع نص داكن وواضح */}
<section className="relative h-[90vh] min-h-[520px] md:h-[100vh] overflow-hidden bg-slate-900">
        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={current.image}
              alt={current.title}
              className="h-full w-full object-cover"
            />
            {/* غطاء غامق خفيف عشان النص يبان */}
            <div className="absolute inset-0 bg-slate-900/55" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center items-center md:items-start px-4 py-4 md:py-6">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-right">
            <p className="text-[11px] md:text-xs font-semibold text-sky-200 tracking-wide">
              {t.heroSubtitle}
            </p>
            <h1 className="mt-2 text-2xl md:text-3xl font-extrabold leading-relaxed text-slate-50">
              {current.title}
              <span className="block bg-gradient-to-l from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                {isArabic
                  ? "مع شركة منطقة النفط للوقود PZONE"
                  : "with PZONE Fuel Company"}
              </span>
            </h1>
            <p className="mt-3 text-[11px] md:text-sm leading-6 text-slate-100/85">
              {current.text}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3">
              <a
                href={`tel:${phone}`}
                className="w-full sm:w-auto rounded-full bg-sky-500 px-6 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-sky-600 transition text-center"
              >
                {t.heroCall} – {phone}
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center md:justify-start">
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-sky-400" : "w-3 bg-slate-500"
                  }`}
                  aria-label={`slide-${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* باقي الصفحة */}
      <main className="mx-auto max-w-6xl px-4 pb-20">
        {/* من نحن */}
        <section id="about" className="pt-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm space-y-3 text-center md:text-right">
            <h2 className="text-lg font-bold text-sky-800">{t.aboutTitle}</h2>
            <p className="text-sm leading-8 text-slate-700">{t.aboutText}</p>
          </div>
        </section>

        {/* شريط أرقام سريعة */}
        <section className="pt-8">
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-gradient-to-l from-sky-50 via-white to-fuchsia-50 p-4 sm:grid-cols-4 text-center text-xs">
            {[
              { label: t.stats[0], value: "50+" },
              { label: t.stats[1], value: "120+" },
              { label: t.stats[2], value: "15+" },
              { label: t.stats[3], value: "25K+" },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-lg font-extrabold text-sky-700">
                  {item.value}
                </p>
                <p className="text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* الخدمات */}
        <section id="services" className="pt-12 space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between text-center md:text-right">
            <div className="mx-auto md:mx-0">
              <h2 className="text-lg font-bold text-sky-800">
                {t.servicesTitle}
              </h2>
              <p className="text-xs text-slate-600 max-w-md">{t.servicesIntro}</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3 text-center md:text-right">
            {t.servicesCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7 shadow-sm"
              >
                <h3 className="mb-2 text-[13px] font-semibold text-sky-800">
                  {card.title}
                </h3>
                <p className="text-slate-700">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* المميزات */}
        <section id="features" className="pt-12 space-y-6">
          <h2 className="text-lg font-bold text-sky-800 text-center md:text-right">
            {t.whyTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-4 text-xs text-center md:text-right">
            {t.whyList.map((text, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-3 leading-6 shadow-sm"
              >
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* المعرض (مع 6–11.png من public) */}
        <section id="gallery" className="pt-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center md:text-right">
            <h2 className="text-lg font-bold text-sky-800 mx-auto sm:mx-0">
              {t.galleryTitle}
            </h2>
            <p className="text-[11px] text-slate-600 mx-auto sm:mx-0">
              {t.gallerySub}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((src) => (
              <div
                key={src}
                className="group relative h-36 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
              >
                <img
                  src={src}
                  alt="معرض PZONE"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </section>

        {/* خريطة جدة */}
        <section id="map" className="pt-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center md:text-right">
            <h2 className="text-lg font-bold text-sky-800 mx-auto sm:mx-0">
              {t.mapTitle}
            </h2>
            <p className="text-[11px] text-slate-600 mx-auto sm:mx-0">
              {t.mapSub}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="pb-[56.25%] relative">
              <iframe
                title="PZONE Jeddah Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347742.9159929844!2d38.930556!3d21.543333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d7b3c0a7d9b5%3A0x8b3bbfb4ddbbf0e1!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sar!2ssa!4v1700000000000"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* اتصل بنا */}
        <section
          id="contact"
          className="pt-12 mt-4 rounded-3xl border border-sky-100 bg-white shadow-sm p-6 md:p-7"
        >
          <div className="grid gap-6 md:grid-cols-[1.1fr,1fr] md:items-center text-center md:text-right">
            <div className="space-y-3 text-xs text-slate-700">
              <h2 className="text-lg font-bold text-sky-800">
                {t.contactTitle}
              </h2>
              <p>{t.contactText}</p>
<p className="ltr:text-left rtl:text-right">
  {t.contactPhoneLabel}:{" "}
  <span dir="ltr">+966 {phone.slice(1)}</span>
</p>

              <p>
                {t.contactEmailLabel}: {email}
              </p>
              <p>{t.contactLocation}</p>
            </div>

            <form className="space-y-3 text-[11px]">
              <input
                type="text"
                placeholder={t.contactName}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 focus:border-sky-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder={t.contactEmail}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 focus:border-sky-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder={t.contactType}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 focus:border-sky-500 focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder={t.contactMsg}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 focus:border-sky-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-l from-sky-600 to-fuchsia-500 px-4 py-2.5 text-[11px] font-semibold text-white shadow-md hover:opacity-90 transition"
              >
                {t.contactBtn}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
