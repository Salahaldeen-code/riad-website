"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Home, Briefcase, Users, Phone } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "/", label: "الرئيسية", icon: Home },
    { href: "/services", label: "خدماتنا", icon: Briefcase },
    { href: "/about", label: "من نحن", icon: Users },
    { href: "/contact", label: "تواصل معنا", icon: Phone },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/images/logo%20(3).png" alt="مقدام لخدمات الأعمال" width={48} height={48} className="h-12 w-12" />
            <span className="font-semibold tracking-wide text-white">مقدام لخدمات الأعمال</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-brand-light transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-brand text-white font-medium rounded-lg px-6 py-2.5
                         hover:bg-brand-light hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">فتح القائمة</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image src="/images/logo%20(3).png" alt="مقدام لخدمات الأعمال" width={48} height={48} className="h-12 w-12" />
                  <span className="font-semibold tracking-wide text-white text-lg">مقدام لخدمات الأعمال</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-brand-light transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full bg-brand text-white font-medium rounded-lg px-6 py-2.5
                               hover:bg-brand-light hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="https://wa.link/65mf3i">احصل على عرض سعر</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
