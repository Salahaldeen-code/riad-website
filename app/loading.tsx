import Image from "next/image"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex min-h-dvh items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <Image
            src="/images/logo%20(3).png"
            alt="مقدام لخدمات الأعمال"
            width={80}
            height={80}
            className="h-20 w-20 animate-pulse opacity-90"
          />
          <div className="absolute -inset-2 rounded-full border-2 border-brand-light/30 border-t-brand-light animate-spin" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 animate-pulse rounded-full bg-brand-light" />
          </div>
          <p className="text-sm text-gray-400">جاري التحميل...</p>
        </div>
      </div>
    </div>
  )
}
