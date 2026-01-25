import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { DestinationsMarquee } from "@/components/destinations-marquee"
import { Pricing } from "@/components/pricing"
import { ContactForm } from "@/components/contact-form"
import { WorldMapDemo } from "@/components/world-map-demo"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"
import LazyVideo from "@/components/lazy-video"
import { Card } from "@/components/ui/card"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://example.com/#services",
    name: "خدماتنا",
    description: "خدمات شاملة للمستثمرين ورجال الأعمال في تأسيس الشركات والتسويق والسياحة",
    url: "https://example.com/#services",
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://example.com/",
    name: "خدمات الأعمال والاستثمار",
    description:
      "نقدم خدمات شاملة للمستثمرين ورجال الأعمال: تأسيس الشركات، الخدمات المحاسبية، القبولات الجامعية، السياحة والتنسيق الطبي، والتسويق الرقمي.",
    url: "https://example.com/",
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <DestinationsMarquee />
        <Pricing />
        
        {/* Contact Form Section */}
    

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
                    src="/videos/2.MP4"
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
      
        {/* World Map Section - Last Section */}
        <WorldMapDemo />
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-light/80 mb-4">تواصل معنا</p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
                <span className="block">نحن هنا</span>
                <span className="block text-brand-light">لمساعدتك</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                تواصل معنا للحصول على استشارة مجانية أو لمعرفة المزيد عن خدماتنا
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
        <AppverseFooter />

      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
