"use client"
import { useScroll, useTransform, motion } from "motion/react"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute right-3 md:right-3 w-10 rounded-full bg-gray-900 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-brand/30 border border-brand p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pr-20 md:text-5xl font-bold text-brand-light">{item.title}</h3>
            </div>

            <div className="relative pr-20 pl-4 md:pr-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-right font-bold text-brand-light">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:right-8 right-8 top-0 overflow-hidden w-[2px]"
        >
          {/* Background track */}
          <div
            className="absolute inset-0 w-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgb(64, 64, 64) 10%, rgb(64, 64, 64) 90%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          />
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: "linear-gradient(to top, #054f98 0%, #0a6bc4 10%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
