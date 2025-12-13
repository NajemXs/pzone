// app/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "./lang-provider";

const accent = "#d6a35a";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const CONTENT = {
  ar: {
    heroKicker: "Petrol Zone Fuel Company",
    heroTitleA: "شركة منطقة النفط للوقود",
    heroTitleB: "مستقبل صناعة الوقود والطاقة",
    heroDesc:
      "نحن شركة رائدة في مجال محطات وقود السيارات وخدمات شحن السيارات الكهربائية. تأسست الشركة لتلبية احتياجات السوق وأصحاب السيارات في المملكة عبر تقديم وقود عالي الجودة وخدمات شحن متطورة، مع الالتزام بالاستدامة والأداء البيئي وتوفير تجربة سلسة ومريحة للعملاء.",
    ctaPrimary: "تواصل معنا",
    ctaSecondary: "تعرف على الشركة",

    quick1Label: "مجال العمل",
    quick1Value: "وقود السيارات وشحن المركبات الكهربائية",
    quick2Label: "الالتزام",
    quick2Value: "استدامة • سلامة • أداء بيئي",
    quick3Label: "الهدف",
    quick3Value: "تجربة عملاء سلسة وحلول طاقة موثوقة",

    profileKicker: "Corporate Profile",
    profileTitle: "محطات وقود وخدمات طاقة متكاملة",
    profileChip: "جاهزية تشغيلية",
    profilePoints: [
      "• تقديم وقود عالي الجودة وفق معايير السلامة والبيئة.",
      "• توفير محطات شحن كهربائية متطورة مع خدمات دعم لأصحاب المركبات الكهربائية.",
      "• تطوير حلول مبتكرة ترفع كفاءة التشغيل وتلبي توقعات العملاء.",
    ],
    profileBadges: [
      { t: "الجودة", v: "وقود نظيف وآمن" },
      { t: "الابتكار", v: "تطوير مستمر" },
      { t: "الاستدامة", v: "حماية البيئة" },
    ],
    note:
      "مستقبل صناعة الوقود والطاقة",

    aboutTitle: "من نحن",
    aboutText:
      "شركة منطقة النفط للوقود تقدم حلولًا متكاملة لاحتياجات النقل والطاقة في المملكة، من خلال محطات وقود حديثة وخدمات شحن كهربائية متطورة. فريقنا المختص يعمل بجد لتلبية احتياجات العملاء وتقديم حلول تناسب تطور قطاع النقل والطاقة.",

    goalsTitle: "أهداف الشركة",
    goalsIntro:
      "تعكس أهداف شركة منطقة النفط للوقود التزامها بتقديم أفضل الخدمات والمنتجات في مجال محطات وقود السيارات والسيارات الكهربائية:",
    goals: [
      {
        title: "توفير وقود نظيف وآمن",
        desc: "تقديم وقود عالي الجودة يلبي معايير السلامة والبيئة، ويحافظ على أداء المركبات ويسهم في حماية البيئة.",
      },
      {
        title: "تعزيز استخدام السيارات الكهربائية",
        desc: "دعم انتقال السائقين إلى المركبات الكهربائية عبر توفير محطات شحن متطورة وخدمات دعم ممتازة.",
      },
      {
        title: "الاستدامة والحفاظ على البيئة",
        desc: "تقديم منتجات وخدمات تقلل من تأثيرات انبعاثات الكربون وتحافظ على الموارد الطبيعية.",
      },
      {
        title: "الابتكار والتطوير",
        desc: "استكشاف التكنولوجيا الجديدة وتطبيقها لتحسين كفاءة العمليات وتلبية توقعات العملاء.",
      },
      {
        title: "تقديم خدمة عملاء ممتازة",
        desc: "توفير تجربة مريحة ومرضية عبر فريق متخصص في خدمة العملاء.",
      },
      {
        title: "التوسع والنمو",
        desc: "توسيع النشاط وتحقيق نمو مستدام وزيادة الحصة السوقية.",
      },
      {
        title: "الشراكات الاستراتيجية",
        desc: "بناء شراكات مع موردين وشركاء في صناعة النقل والطاقة لتعزيز القيمة والخدمة.",
      },
    ],

    missionTitle: "رسالتنا",
    missionText:
      "رسالتنا في شركة منطقة النفط للوقود هي توفير حل شامل لاحتياجات النقل والطاقة لعملائنا عبر وقود نظيف وفعال وخدمات شحن كهربائية متقدمة. نحن ملتزمون بالاستدامة والحفاظ على البيئة عبر تطوير تقنيات تقلل الانبعاثات وتحافظ على الموارد الطبيعية. فريقنا مكرس لتقديم خدمة عملاء استثنائية وبناء علاقات قائمة على الثقة والاحترافية، مع التزام دائم بالجودة والتكنولوجيا والابتكار والنمو.",

    visionTitle: "رؤيتنا",
    visionText:
      "رؤيتنا أن نصبح روادًا عالميين في صناعة الوقود والنقل عبر تقديم حلول متكاملة للطاقة والنقل وتشجيع الاعتماد على وقود نظيف واستدامة النقل. نعمل لتحقيق التوازن بين احتياجات النقل وحماية البيئة والمساهمة في أهداف الاستدامة عالميًا، وأن نكون محركًا للابتكار والتقدم وتحسين جودة الهواء والبيئة لمستقبل أفضل للأجيال القادمة.",

    numbersTitle: "مؤشرات مستهدفة",
    numbers: [
      { value: "وقود", label: "جودة عالية ومعايير سلامة وبيئة" },
      { value: "شحن", label: "محطات شحن متطورة للمركبات الكهربائية" },
      { value: "استدامة", label: "التزام بالأداء البيئي وتقليل الأثر الكربوني" },
    ],

    contactTitle: "نموذج التواصل الرسمي",
    contactDesc:
      "للاستفسارات المتعلقة بالشراكات، فرص الاستثمار، أو المواقع التشغيلية، يرجى تعبئة البيانات التالية وسيتم التواصل عبر القنوات الرسمية.",
    officialEmailLabel: "بريد رسمي:",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم التواصل",
    type: "نوع الطلب",
    message: "الرسالة",
    submit: "إرسال الطلب",
    success:
      "تم استلام الطلب (إشعار تجريبي حالياً، سيتم ربطه بالبريد لاحقاً).",
    placeholders: {
      name: "الاسم كما يظهر في الهوية",
      email: "name@company.com",
      phone: "05XXXXXXXX",
      message:
        "يرجى توضيح تفاصيل الطلب، المدينة/الموقع (إن وجد)، ووسيلة التواصل المفضلة.",
    },
    options: ["استفسار عام", "فرص استثمارية", "تأجير موقع/مساحة تجارية", "شراكة تشغيلية"],
  },

  en: {
    heroKicker: "Petrol Zone Fuel Company",
    heroTitleA: "Petrol Zone Fuel Company",
    heroTitleB: "The Future of Fuel & Energy",
    heroDesc:
      "We are a leading company in fuel stations and electric vehicle charging services. Established to meet the needs of the Saudi market and vehicle owners, we provide high-quality fuel and advanced EV charging services. We are committed to sustainability and environmental performance, aiming to deliver a smooth and convenient customer experience.",
    ctaPrimary: "Contact Us",
    ctaSecondary: "About the Company",

    quick1Label: "Scope",
    quick1Value: "Fuel & Electric Vehicle Charging",
    quick2Label: "Commitment",
    quick2Value: "Sustainability • Safety • Environmental Performance",
    quick3Label: "Focus",
    quick3Value: "Seamless customer experience and reliable energy solutions",

    profileKicker: "Corporate Profile",
    profileTitle: "Integrated Fuel & Energy Services",
    profileChip: "Operational Readiness",
    profilePoints: [
      "• Providing high-quality fuel aligned with safety and environmental standards.",
      "• Delivering advanced EV charging stations with dedicated support services.",
      "• Developing innovative solutions to improve efficiency and meet customer expectations.",
    ],
    profileBadges: [
      { t: "Quality", v: "Clean & safe fuel" },
      { t: "Innovation", v: "Continuous improvement" },
      { t: "Sustainability", v: "Environmental care" },
    ],
    note:
      "* This is official corporate profile content and may be updated according to approved documents and policies.",

    aboutTitle: "Who We Are",
    aboutText:
      "Petrol Zone Fuel Company provides integrated solutions for transportation and energy needs in Saudi Arabia through modern fuel stations and advanced EV charging services. Our specialized team works diligently to meet customer needs and deliver solutions aligned with the evolving transportation and energy sector.",

    goalsTitle: "Our Objectives",
    goalsIntro:
      "Our objectives reflect our commitment to delivering the best products and services in fuel stations and electric vehicle services:",
    goals: [
      {
        title: "Clean and safe fuel",
        desc: "Provide high-quality fuel meeting safety and environmental standards, supporting vehicle performance and protecting the environment.",
      },
      {
        title: "Promote EV adoption",
        desc: "Support drivers’ transition to EVs by providing advanced charging stations and excellent support services.",
      },
      {
        title: "Sustainability & environmental protection",
        desc: "Offer products and services that reduce carbon emissions and preserve natural resources.",
      },
      {
        title: "Innovation & development",
        desc: "Explore and apply new technologies to improve operational efficiency and meet customer expectations.",
      },
      {
        title: "Excellent customer service",
        desc: "Deliver a convenient and satisfying experience through a dedicated customer service team.",
      },
      {
        title: "Expansion & growth",
        desc: "Expand operations and achieve sustainable growth while increasing market share.",
      },
      {
        title: "Strategic partnerships",
        desc: "Build strategic partnerships with suppliers and industry partners across transportation and energy.",
      },
    ],

    missionTitle: "Our Mission",
    missionText:
      "Our mission is to provide a comprehensive solution for transportation and energy needs by delivering clean, efficient fuel and advanced EV charging services. We are committed to sustainability and environmental protection by developing technologies that reduce harmful emissions and preserve natural resources. Our team is dedicated to exceptional customer service and building trusted, professional relationships—driven by quality, technology, innovation, and growth.",

    visionTitle: "Our Vision",
    visionText:
      "Our vision is to become global leaders in the fuel and transportation industry by providing integrated energy and mobility solutions and promoting clean fuel and sustainable transportation worldwide. We aim to balance mobility needs with environmental protection, contribute to global sustainability goals, drive innovation, improve air quality, and create a better future for coming generations.",

    numbersTitle: "Key Focus Areas",
    numbers: [
      { value: "Fuel", label: "High quality with safety & environmental standards" },
      { value: "EV", label: "Advanced charging infrastructure and services" },
      { value: "ESG", label: "Sustainability commitment and reduced carbon impact" },
    ],

    contactTitle: "Official Contact Form",
    contactDesc:
      "For partnerships, investment opportunities, or operational locations, please fill in the details below. We will reach you through official channels.",
    officialEmailLabel: "Official email:",
    name: "Full Name",
    email: "Email",
    phone: "Phone",
    type: "Request Type",
    message: "Message",
    submit: "Submit Request",
    success: "Request received (demo notice; email integration will be added later).",
    placeholders: {
      name: "Name as shown on ID",
      email: "name@company.com",
      phone: "+966 5XXXXXXXX",
      message: "Please describe your request, city/location (if any), and preferred contact method.",
    },
    options: ["General Inquiry", "Investment Opportunities", "Leasing a Commercial Space", "Operational Partnership"],
  },
};

export default function HomePage() {
  const { isArabic } = useLang();
  const t = isArabic ? CONTENT.ar : CONTENT.en;

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("success");
  };

  return (
    <div className="space-y-16 pb-8">
      {/* HERO */}
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold tracking-[0.32em] text-slate-300 uppercase">
            {t.heroKicker}
          </p>

          <h1 className="text-3xl font-semibold leading-[1.25] sm:text-4xl lg:text-5xl">
            {t.heroTitleA}{" "}
            <span className="text-[#f3d7ab]">{t.heroTitleB}</span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            {t.heroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#d6a35a] px-7 py-2.5 text-sm font-semibold text-[#0b0920] shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:brightness-105"
            >
              {t.ctaPrimary}
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-2.5 text-sm font-medium text-slate-100 transition hover:border-white/25 hover:bg-white/10"
            >
              {t.ctaSecondary}
            </a>
          </div>

          {/* نقاط سريعة */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <QuickItem label={t.quick1Label} value={t.quick1Value} />
            <QuickItem label={t.quick2Label} value={t.quick2Value} />
            <QuickItem label={t.quick3Label} value={t.quick3Value} />
          </div>
        </motion.div>

        {/* بطاقة تعريف رسمية */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
            <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-[rgba(184,49,175,0.22)] blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-[rgba(25,167,224,0.18)] blur-3xl" />

            <div className="relative space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.28em] text-slate-300 uppercase">
                    {t.profileKicker}
                  </p>
                  <p className="mt-1 text-sm text-slate-100">{t.profileTitle}</p>
                </div>

                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
                  {t.profileChip}
                </span>
              </div>

              <div className="grid gap-3 text-sm text-slate-200">
                {t.profilePoints.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                {t.profileBadges.map((b, i) => (
                  <Badge key={i} title={b.t} value={b.v} />
                ))}
              </div>

              <div className="pt-2">
                <div className="h-px w-full bg-gradient-to-l from-transparent via-white/10 to-transparent" />
                <p className="mt-3 text-xs text-slate-400">{t.note}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="space-y-4">
        <h2 className="text-xl font-semibold">{t.aboutTitle}</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
          {t.aboutText}
        </p>
      </section>

      {/* GOALS */}
      <section id="services" className="space-y-5">
        <h2 className="text-xl font-semibold">{t.goalsTitle}</h2>
        <p className="max-w-4xl text-sm text-slate-200">{t.goalsIntro}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {t.goals.map((g, i) => (
            <Card key={i} title={g.title} desc={g.desc} />
          ))}
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold">{t.missionTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            {t.missionText}
          </p>
        </div>

        <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold">{t.visionTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            {t.visionText}
          </p>
        </div>
      </section>

      {/* NUMBERS */}
      <section id="numbers" className="space-y-5">
        <h2 className="text-xl font-semibold">{t.numbersTitle}</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {t.numbers.map((n, i) => (
            <Stat key={i} value={n.value} label={n.label} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="space-y-4 rounded-3xl border border-white/12 bg-white/[0.04] p-5 sm:p-7"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{t.contactTitle}</h2>
            <p className="max-w-2xl text-sm text-slate-200">{t.contactDesc}</p>
          </div>

          <div className={`text-xs text-slate-400 ${isArabic ? "text-left sm:text-right" : "text-right sm:text-left"}`}>
            {t.officialEmailLabel}{" "}
            <span className="text-slate-200">info@pzone.com.sa</span>
          </div>
        </div>

        <form
          dir={isArabic ? "rtl" : "ltr"}
          className="grid gap-4 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <Field label={t.name}>
            <input
              name="name"
              type="text"
              className="w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm outline-none focus:border-[rgba(214,163,90,0.7)]"
              placeholder={t.placeholders.name}
            />
          </Field>

          <Field label={t.email}>
            <input
              name="email"
              type="email"
              className="w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm outline-none focus:border-[rgba(214,163,90,0.7)]"
              placeholder={t.placeholders.email}
            />
          </Field>

          <Field label={t.phone}>
            <input
              name="phone"
              type="tel"
              className={`w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm outline-none focus:border-[rgba(214,163,90,0.7)] ${
                isArabic ? "text-right" : "text-left"
              }`}
              style={{ direction: isArabic ? "rtl" : "ltr" }}
              placeholder={t.placeholders.phone}
            />
          </Field>

          <Field label={t.type}>
            <select
              name="type"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[rgba(214,163,90,0.7)] appearance-none"
            >
              {t.options.map((op, i) => (
                <option key={i} className="bg-[#141223] text-slate-100">
                  {op}
                </option>
              ))}
            </select>
          </Field>

          <Field label={t.message} className="sm:col-span-2">
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm outline-none focus:border-[rgba(214,163,90,0.7)]"
              placeholder={t.placeholders.message}
            />
          </Field>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-[#d6a35a] px-6 py-2.5 text-sm font-semibold text-[#0b0920] shadow-lg shadow-black/30 transition hover:brightness-105"
            >
              {t.submit}
            </button>

            {status === "success" && (
              <p className="mt-2 text-center text-[11px] text-emerald-400">
                {t.success}
              </p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

/* Components */

function QuickItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs text-slate-300">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold text-slate-100">{title}</p>
        <span className="mt-0.5 h-2 w-2 rounded-full" style={{ background: accent }} />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-200">{desc}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
      <p className="text-2xl sm:text-3xl font-bold" style={{ color: "#f3d7ab" }}>
        {value}
      </p>
      <p className="mt-1 text-xs text-slate-300">{label}</p>
    </div>
  );
}

function Badge({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <p className="text-[10px] text-slate-400">{title}</p>
      <p className="mt-1 font-semibold text-slate-100">{value}</p>
    </div>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="text-xs text-slate-200">{label}</label>
      {children}
    </div>
  );
}
