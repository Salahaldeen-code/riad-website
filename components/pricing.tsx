"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

type Feature = { text: string; muted?: boolean }

const ACCENT = "#054f98"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-300" : "text-neutral-100"}`}>{text}</span>
    </li>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="text-white" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid ${ACCENT}` }}
          >
            خدماتنا المتكاملة
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" itemProp="name">
            خدماتنا
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-300" itemProp="description">
            نقدم لكم باقة متكاملة من الخدمات المصممة لتلبية احتياجاتكم
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-5 text-neutral-900 hover:brightness-95"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <Link href="https://wa.link/rc25na" target="_blank">
                تواصل الآن
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* خدمات المستثمرين */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                خدمات المستثمرين ورجال الأعمال
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight text-brand-light" itemProp="price">
                  حلول متكاملة
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "تأسيس الشركات في سلطنة عُمان",
                  "تأسيس الشركات في السعودية",
                  "تأسيس الشركات في العديد من الدول",
                  "دعوات تجارية إلى الصين",
                  "تسجيل العلامات التجارية",
                  "تصديق الوثائق والمستندات",
                  "دراسة الجدوى",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* الخدمات المحاسبية والتعليمية */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                الخدمات المحاسبية والتعليمية
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight text-brand-light" itemProp="price">
                  دعم شامل
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                <li className="text-xs font-semibold text-brand-light mt-2">الخدمات المحاسبية:</li>
                {["البرامج المحاسبية والإدارية للشركات", "أجهزة البيع"].map((f, i) => (
                  <FeatureItem key={`acc-${i}`} text={f} />
                ))}
                <li className="text-xs font-semibold text-brand-light mt-4">الخدمات التعليمية:</li>
                {[
                  "استخراج القبول الجامعي",
                  "الجامعات الماليزية",
                  "الجامعات التركية",
                  "جامعات الهند - كافة التخصصات",
                ].map((f, i) => (
                  <FeatureItem key={`edu-${i}`} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* السياحة والتسويق */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="relative space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                السياحة والتسويق
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight text-brand-light" itemProp="price">
                  خدمات متميزة
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative pt-0">
              <ul className="grid gap-2" itemProp="description">
                <li className="text-xs font-semibold text-brand-light mt-2">السياحة:</li>
                {[
                  "حجوزات الطيران",
                  "استخراج التأشيرات السياحية والتجارية",
                  "التنسيق الطبي - مستشفيات الهند",
                  "التنسيق الطبي - مستشفيات تايلاند",
                  "تأجير السيارات",
                  "الاستقبال من وإلى المطار",
                ].map((f, i) => (
                  <FeatureItem key={`tour-${i}`} text={f} />
                ))}
                <li className="text-xs font-semibold text-brand-light mt-4">التسويق:</li>
                {[
                  "تصميم الشعارات والهوية البصرية",
                  "تصميم المواقع الإلكترونية",
                  "إدارة حسابات التواصل الاجتماعي",
                  "التسويق عبر المشاهير",
                  "الإعلانات الرقمية",
                ].map((f, i) => (
                  <FeatureItem key={`mark-${i}`} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>
    </section>
  )
}
