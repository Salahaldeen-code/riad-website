"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  const destinations = [
    { name: "وجهات سياحية", image: "/tourism%202.jpg" },
    { name: "إسطنبول", image: "/istanbul-turkey-university-students.jpg" },
    { name: "السفر والفنادق", image: "/luxury-travel-airplane-first-class.jpg" },
    { name: "الرياض", image: "/saudi-arabia-riyadh-business-district.jpg" },
    { name: "عُمان", image: "/modern-office-building-oman-business.jpg" },
    { name: "ماليزيا", image: "/university-campus-malaysia-modern.jpg" },
    { name: "السياحة العلاجية", image: "/modern-hospital-medical-tourism.jpg" },
    { name: "مدن عالمية", image: "/company%201.jpg" },
  ]

  const secondRowDestinations = [
    { name: "وجهات سياحية", image: "/tourism%202.jpg" },
    { name: "إسطنبول", image: "/istanbul-turkey-university-students.jpg" },
    { name: "الرياض", image: "/saudi-arabia-riyadh-business-district.jpg" },
    { name: "شراكات عالمية", image: "/doc%201.jpg" },
    { name: "وجهة مميزة", image: "/images/archviz/client-love-1.jpg" },
    { name: "وجهة مميزة", image: "/images/archviz/client-love-2.jpg" },
  ]

  const DestinationCard = ({ destination, rowId }: { destination: { name: string; image: string }; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
          />
        </div>
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-right">
            <span className="text-brand-light">وجهاتنا</span>
          </h2>
          <Button
            variant="outline"
            className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced text-white border-white/20 bg-transparent"
          >
            المزيد
          </Button>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...destinations, ...destinations, ...destinations].map((destination, index) => (
                <DestinationCard key={`first-${index}`} destination={destination} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...secondRowDestinations, ...secondRowDestinations, ...secondRowDestinations].map((destination, index) => (
                <DestinationCard key={`second-${index}`} destination={destination} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
