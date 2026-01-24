"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "الهاتف",
      value: "+968 9999 9999",
      href: "tel:+96899999999",
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "info@example.com",
      href: "mailto:info@example.com",
    },
    {
      icon: MessageCircle,
      label: "واتساب",
      value: "تواصل معنا عبر واتساب",
      href: "https://wa.link/65mf3i",
    },
    {
      icon: MapPin,
      label: "الموقع",
      value: "سلطنة عُمان - مسقط",
      href: "#",
    },
  ]

  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-light/80 mb-4">تواصل معنا</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="block">نحن هنا</span>
            <span className="block text-brand-light drop-shadow-[0_0_20px_rgba(5,79,152,0.35)]">لمساعدتك</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            تواصل معنا للحصول على استشارة مجانية أو لمعرفة المزيد عن خدماتنا
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Contact Form */}
            <div className="glass-border rounded-3xl p-8 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-white mb-6 text-right">أرسل لنا رسالة</h2>

              <div className="flex-1 flex flex-col">
              {submitted ? (
                <div className="text-center py-12 flex-1 flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-brand-light" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">تم إرسال رسالتك بنجاح!</h3>
                  <p className="text-gray-400">سنتواصل معك في أقرب وقت ممكن</p>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", message: "" })
                    }}
                    className="mt-6 bg-brand hover:bg-brand-light"
                  >
                    إرسال رسالة أخرى
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300 text-right block">
                      الاسم
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 text-right focus:border-brand focus:ring-brand"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300 text-right block">
                      البريد الإلكتروني
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 text-right focus:border-brand focus:ring-brand"
                    />
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <Label htmlFor="message" className="text-gray-300 text-right block">
                      الرسالة
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="flex-1 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 text-right resize-none focus:border-brand focus:ring-brand"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand text-white font-medium rounded-lg py-3
                               hover:bg-brand-light hover:shadow-md hover:scale-[1.02]
                               transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </Button>
                </form>
              )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 h-full">
              <div className="glass-border rounded-3xl p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-6 text-right">معلومات التواصل</h2>
                <div className="space-y-4 flex-1">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center shrink-0 group-hover:bg-brand/30 transition-colors">
                        <info.icon className="h-5 w-5 text-brand-light" />
                      </div>
                      <div className="text-right flex-1">
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="glass-border rounded-3xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">تواصل سريع عبر واتساب</h3>
                <p className="text-gray-400 mb-6">للرد الفوري على استفساراتك</p>
                <Button
                  asChild
                  className="bg-green-600 text-white font-medium rounded-lg px-8 py-3
                             hover:bg-green-500 hover:shadow-md hover:scale-[1.02]
                             transition-all"
                >
                  <a href="https://wa.link/65mf3i" target="_blank" rel="noopener noreferrer">
                    تواصل عبر واتساب
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </main>
  )
}
