"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "نقدم خدمات متكاملة للمستثمرين ورجال الأعمال في تأسيس الشركات والتسويق والسياحة والتعليم.",
  copyright: "© 2025 — جميع الحقوق محفوظة",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">




































































      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/icons/skitbit-white.svg" alt="الشعار" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-semibold text-white">خدمات الأعمال</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">التنقل</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {[
                    { label: "الرئيسية", href: "#" },
                    { label: "خدماتنا", href: "#services" },
                    { label: "من نحن", href: "#about" },
                    { label: "التسويق", href: "#marketing" },
                    { label: "تواصل معنا", href: "#contact" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="hover:text-brand-light">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">تواصل معنا</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-light"
                      aria-label="تابعنا على تويتر"
                    >
                      تويتر
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-light"
                      aria-label="اشترك في قناتنا على يوتيوب"
                    >
                      يوتيوب
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-light"
                      aria-label="تابعنا على انستغرام"
                    >
                      انستغرام
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://wa.link/rc25na"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-light"
                      aria-label="تواصل معنا عبر الواتساب"
                    >
                      واتساب
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-brand-light">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="hover:text-brand-light">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
