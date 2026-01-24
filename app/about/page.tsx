import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react"
import LazyVideo from "@/components/lazy-video"
import { Card } from "@/components/ui/card"

export const dynamic = "force-static"

export const metadata = {
  title: "من نحن | خدمات الأعمال والاستثمار",
  description: "تعرف على شركتنا ورؤيتنا ورسالتنا وقيمنا. نحن شريكك الموثوق في رحلة النجاح.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "الجودة والتميز",
      description: "نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا ونسعى دائماً للتميز.",
    },
    {
      icon: Users,
      title: "العميل أولاً",
      description: "نضع عملاءنا في قلب كل ما نقوم به ونسعى لتحقيق رضاهم التام.",
    },
    {
      icon: Heart,
      title: "النزاهة والشفافية",
      description: "نعمل بأمانة وشفافية تامة في جميع تعاملاتنا مع عملائنا وشركائنا.",
    },
    {
      icon: Lightbulb,
      title: "الابتكار والتطوير",
      description: "نواكب أحدث التطورات ونبتكر حلولاً جديدة لتلبية احتياجات السوق المتغيرة.",
    },
  ]

  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-light/80 mb-4">من نحن</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="block">شريكك الموثوق</span>
            <span className="block text-brand-light drop-shadow-[0_0_20px_rgba(5,79,152,0.35)]">في رحلة النجاح</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            نحن فريق من الخبراء المتخصصين نعمل على تقديم حلول متكاملة للمستثمرين ورجال الأعمال
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-right">نبذة عن الشركة</h2>
            <div className="space-y-4 text-gray-300 text-right leading-relaxed">
              <p>
                تأسست شركتنا برؤية واضحة لتقديم خدمات متكاملة ومتميزة للمستثمرين ورجال الأعمال في منطقة الخليج العربي
                والشرق الأوسط. نجمع بين الخبرة المحلية والمعايير العالمية لنقدم لعملائنا أفضل الحلول.
              </p>
              <p>
                على مدار سنوات عملنا، ساعدنا المئات من رواد الأعمال والمستثمرين في تحقيق أهدافهم من خلال خدماتنا
                المتنوعة التي تشمل تأسيس الشركات، الخدمات المحاسبية، القبولات الجامعية، السياحة والتنسيق الطبي، والتسويق
                الرقمي.
              </p>
              <p>
                نفخر بفريقنا المتخصص الذي يجمع بين الكفاءة العالية والخبرة الواسعة في مختلف المجالات، مما يمكننا من
                تقديم استشارات وخدمات تلبي احتياجات عملائنا بدقة وكفاءة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="glass-border rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center">
                  <Eye className="h-7 w-7 text-brand-light" />
                </div>
                <h2 className="text-2xl font-bold text-white">رؤيتنا</h2>
              </div>
              <p className="text-gray-300 text-right leading-relaxed">
                أن نكون الشريك الأول والخيار الأمثل للمستثمرين ورجال الأعمال في المنطقة، ونساهم في تحقيق نمو مستدام
                لأعمالهم من خلال تقديم خدمات متكاملة بمعايير عالمية.
              </p>
            </div>

            {/* Mission */}
            <div className="glass-border rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center">
                  <Target className="h-7 w-7 text-brand-light" />
                </div>
                <h2 className="text-2xl font-bold text-white">رسالتنا</h2>
              </div>
              <p className="text-gray-300 text-right leading-relaxed">
                تمكين المستثمرين ورجال الأعمال من تحقيق أهدافهم من خلال تقديم حلول مبتكرة وخدمات استثنائية، مع الالتزام
                بأعلى معايير الجودة والنزاهة في كل ما نقوم به.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">قيمنا</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-border rounded-2xl p-6 hover:border-brand/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center shrink-0">
                    <value.icon className="h-6 w-6 text-brand-light" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-brand-light">سهولة التواصل</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                تابع طلباتك وتواصل معنا من أي مكان
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                استعرض خدماتنا، تابع حالة طلبك، وتواصل معنا مباشرة عبر الواتساب لأي استفسار أو طلب جديد
              </p>
            </div>

            {/* Right mockup - iPad */}
            <div className="mx-auto w-full max-w-[1000px] lg:max-w-[1200px]">
              <div className="relative rounded-[24px] liquid-glass p-4 shadow-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black">
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="معاينة التطبيق - سهولة المتابعة"
                  />
                  <div className="relative p-8 md:p-12">
                    <div className="space-y-3">
                      <div className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-brand-light">متابعة سهلة</div>
                      <p className="text-base md:text-lg lg:text-xl text-white/80">من الطلب إلى التنفيذ بكل سلاسة</p>
                      <div className="mt-6 inline-flex items-center rounded-full bg-black/40 px-4 py-2 text-sm uppercase tracking-wider text-brand-light">
                        بدون تعقيد
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <AppverseFooter />
    </main>
  )
}
