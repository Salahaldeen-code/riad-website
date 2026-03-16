import { SiteHeader } from "@/components/site-header";
import { AppverseFooter } from "@/components/appverse-footer";
import { Timeline } from "@/components/ui/timeline";
import {
  Building2,
  Calculator,
  GraduationCap,
  Plane,
  Megaphone,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "خدماتنا | خدمات الأعمال والاستثمار",
  description:
    "نوفر حلولاً متكاملة لدعم المستثمرين ورواد الأعمال: تأسيس الشركات والإجراءات القانونية، التسويق وتطوير الأعمال، السياحة والتعليم والاستشارات.",
};

export default function ServicesPage() {
  const timelineData = [
    {
      title: "خدمات المستثمرين",
      content: (
        <div className="text-right">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-8 w-8 text-brand-light" />
            <p className="text-lg font-semibold text-gray-900">
              خدمات المستثمرين ورجال الأعمال
            </p>
          </div>
          <p className="mb-6 text-sm text-gray-600 leading-relaxed">
            نقدم حلولاً متكاملة للمستثمرين ورجال الأعمال تشمل تأسيس الشركات في عُمان والسعودية والعديد من الدول، تسجيل العلامات التجارية، تصديق الوثائق، دراسة الجدوى، والدعوات التجارية والاستيراد والتصدير مع الصين.
          </p>
          <div className="space-y-2 mb-6">
            {[
              "تأسيس الشركات في سلطنة عُمان",
              "تأسيس الشركات في السعودية",
              "تأسيس الشركات في العديد من الدول وإنهاء كافة الإجراءات",
              "دعوات تجارية إلى الصين",
              "تسجيل العلامات التجارية",
              "تصديق الوثائق والمستندات",
              "دراسة الجدوى",
              "الاستيراد والتصدير مع الصين",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-light" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/modern-office-building-oman-business.jpg"
              alt="تأسيس الشركات"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
            <img
              src="/saudi-arabia-riyadh-business-district.jpg"
              alt="الأعمال في السعودية"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "الاستشارات",
      content: (
        <div className="text-right">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="h-8 w-8 text-brand-light" />
            <p className="text-lg font-semibold text-gray-900">
              الاستشارات التجارية والصناعية والتسويقية والإدارية
            </p>
          </div>
          <p className="mb-6 text-sm text-gray-600 leading-relaxed">
            نوفر استشارات متخصصة لدعم قراراتك الاستثمارية وتشغيل أعمالك بكفاءة، من تحليل الأسواق والفرص، إلى تطوير الخطط التسويقية والإدارية، وتحسين الأداء التشغيلي والمالي.
          </p>
          <div className="space-y-2 mb-6">
            {[
              "الاستشارات التجارية وتطوير نماذج الأعمال",
              "الاستشارات الصناعية وتحسين العمليات والتشغيل",
              "الاستشارات التسويقية وبناء الخطط والحملات",
              "الاستشارات الإدارية وتنظيم الهياكل والإجراءات",
              "تحليل الأسواق والفرص الاستثمارية",
              "خطط تطوير الأعمال وتحسين الأداء",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-light" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/modern-office-building-oman-business.jpg"
              alt="استشارات الأعمال"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
            <img
              src="/digital-marketing-social-media-analytics.jpg"
              alt="الاستشارات التسويقية"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "الخدمات المحاسبية",
      content: (
        <div className="text-right">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="h-8 w-8 text-brand-light" />
            <p className="text-lg font-semibold text-gray-900">
              البرامج المحاسبية وأنظمة نقاط البيع
            </p>
          </div>
          <p className="mb-6 text-sm text-gray-600 leading-relaxed">
            نوفر أحدث البرامج المحاسبية وأجهزة نقاط البيع المتوافقة مع متطلبات
            هيئة الضرائب. حلول متكاملة لإدارة أعمالك المالية بكفاءة عالية.
          </p>
          <div className="space-y-2 mb-6">
            {[
              "برامج محاسبية معتمدة",
              "أجهزة نقاط البيع (POS)",
              "الفوترة الإلكترونية",
              "إدارة المخزون",
              "التقارير المالية",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-light" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/accounting-software-dashboard-modern.jpg"
              alt="البرامج المحاسبية"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
            <img
              src="/pos-point-of-sale-system-retail.jpg"
              alt="أجهزة نقاط البيع"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "الخدمات التعليمية",
      content: (
        <div className="text-right">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-brand-light" />
            <p className="text-lg font-semibold text-gray-900">
              القبولات الجامعية الدولية
            </p>
          </div>
          <p className="mb-6 text-sm text-gray-600 leading-relaxed">
            نساعد الطلاب في الحصول على قبولات جامعية في أفضل الجامعات العالمية
            في ماليزيا وتركيا والهند وغيرها. نقدم استشارات أكاديمية ومتابعة
            كاملة لإجراءات القبول.
          </p>
          <div className="space-y-2 mb-6">
            {[
              "القبولات الجامعية في ماليزيا",
              "القبولات الجامعية في تركيا",
              "القبولات الجامعية في الهند",
              "الاستشارات الأكاديمية",
              "متابعة إجراءات التأشيرات",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-light" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/university-campus-malaysia-modern.jpg"
              alt="الجامعات في ماليزيا"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
            <img
              src="/istanbul-turkey-university-students.jpg"
              alt="الدراسة في تركيا"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "السياحة والسفر",
      content: (
        <div className="text-right">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="h-8 w-8 text-brand-light" />
            <p className="text-lg font-semibold text-gray-900">
              حجوزات وتأشيرات وتنسيق طبي
            </p>
          </div>
          <p className="mb-6 text-sm text-gray-600 leading-relaxed">
            خدمات سياحية متكاملة تشمل حجز الطيران والفنادق، إصدار التأشيرات،
            التنسيق الطبي مع أفضل المستشفيات، وتأجير السيارات بأسعار تنافسية.
          </p>
          <div className="space-y-2 mb-6">
            {[
              "حجوزات الطيران والفنادق",
              "إصدار التأشيرات السياحية",
              "التنسيق الطبي الدولي",
              "تأجير السيارات",
              "البرامج السياحية المتكاملة",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-light" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/luxury-travel-airplane-first-class.jpg"
              alt="حجوزات الطيران"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
            <img
              src="/modern-hospital-medical-tourism.jpg"
              alt="التنسيق الطبي"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "التسويق الرقمي",
      content: (
        <div className="text-right">
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="h-8 w-8 text-brand-light" />
            <p className="text-lg font-semibold text-gray-900">
              تصميم وإدارة الحملات الإعلانية
            </p>
          </div>
          <p className="mb-6 text-sm text-gray-600 leading-relaxed">
            نقدّم حلول التسويق الرقمي التي تركز على بناء هوية قوية لعلامتك
            التجارية، وتصميم حضور احترافي على الإنترنت، وإدارة قنوات التواصل
            الاجتماعي والتسويق عبر المشاهير والمؤثرين لزيادة انتشار علامتك.
          </p>
          <div className="space-y-2 mb-6">
            {[
              "تصميم الشعارات والهوية البصرية",
              "تصميم المواقع الإلكترونية",
              "إدارة حسابات التواصل الاجتماعي",
              "التسويق عبر المشاهير والمؤثرين",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-light" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/digital-marketing-social-media-analytics.jpg"
              alt="التسويق الرقمي"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
            <img
              src="/web-design-logo-branding-creative.jpg"
              alt="التصميم والهوية"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(5,79,152,0.15),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(5,79,152,0.1)] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-[100dvh] text-gray-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-light/80 mb-4">
            خدماتنا
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="block">خدمات متكاملة</span>
            <span className="block text-brand-light drop-shadow-[0_0_20px_rgba(5,79,152,0.35)]">
              لنجاح أعمالك
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجات
            المستثمرين ورجال الأعمال
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </section>

      <AppverseFooter />
    </main>
  );
}
