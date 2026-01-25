"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "ما يميزنا عن غيرنا",
  subtitle: "اكتشف نهجنا الفريد في خدمات الأعمال",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Adaptability Card - Hidden on mobile */}
        <Card className="hidden md:block liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">خدماتنا</p>
            <CardTitle className="mt-1 text-xl text-white">نوفر لك تجربة سلسة ومتكاملة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/company%201.jpg"
                  alt="ما يميزنا — حضورنا في أبرز المدن والأعمال"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/company%202.jpg"
                  alt="ما يميزنا — فريقنا ونهجنا الاستراتيجي"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Love Card - Always visible */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">آراء العملاء</p>
            <CardTitle className="mt-1 text-xl text-white">
              خدماتهم لم تكن مجرد عمل احترافي، بل أحدثت فارقاً حقيقياً — عملاؤنا شعروا بالتميز فوراً.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-brand-light">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-light text-brand-light" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/download%20(2).jpg"
                  alt="وجهة الحج والعمرة — مكة المكرمة"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 280px, 45vw"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/doc%201.jpg"
                  alt="شراكاتنا ونهجنا القائم على الثقة والاحترافية"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 280px, 45vw"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
