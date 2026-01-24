"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
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

  return (
    <div className="glass-border rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-right">تواصل معنا</h2>

      {submitted ? (
        <div className="text-center py-12">
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="home-name" className="text-gray-300 text-right block">
              الاسم
            </Label>
            <Input
              id="home-name"
              type="text"
              placeholder="أدخل اسمك الكامل"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 text-right focus:border-brand focus:ring-brand"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="home-email" className="text-gray-300 text-right block">
              البريد الإلكتروني
            </Label>
            <Input
              id="home-email"
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 text-right focus:border-brand focus:ring-brand"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="home-message" className="text-gray-300 text-right block">
              الرسالة
            </Label>
            <Textarea
              id="home-message"
              placeholder="اكتب رسالتك هنا..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 text-right resize-none focus:border-brand focus:ring-brand"
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
  )
}

