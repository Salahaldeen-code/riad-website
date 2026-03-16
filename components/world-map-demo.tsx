"use client";
import { WorldMap } from "./ui/world-map";
import { MapPin } from "lucide-react";

export function WorldMapDemo() {
  return (
    <section className="py-16 px-4 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-light/80 mb-4">
            مواقعنا
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-6">
            <span className="block">تواصل معنا</span>
            <span className="block text-brand-light drop-shadow-[0_0_20px_rgba(5,79,152,0.35)]">
              من أي مكان
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على أسئلتك وتقديم الدعم الذي تحتاجه. لا تتردد في
            التواصل معنا من أي من مواقعنا
          </p>
        </div>
        
        <div className="relative">
          <WorldMap
            lineColor="#0a6bc4"
            dots={[
              {
                start: {
                  // Yemen - Aden
                  lat: 12.8,
                  lng: 45,
                  location: {
                    country: "اليمن",
                    city: "عدن",
                    address: "عدن - الجمهورية اليمنية",
                  },
                },
                end: {
                  lat: 12.8,
                  lng: 45,
                },
              },
              {
                start: {
                  // Oman - Muscat
                  lat: 23.6,
                  lng: 58.5,
                  location: {
                    country: "سلطنة عُمان",
                    city: "مسقط",
                    address: "مسقط - سلطنة عُمان",
                  },
                },
                end: {
                  lat: 23.6,
                  lng: 58.5,
                },
              },
              {
                start: {
                  // Saudi Arabia - Jeddah
                  lat: 21.5,
                  lng: 39.2,
                  location: {
                    country: "السعودية",
                    city: "جدة",
                    address: "جدة - المملكة العربية السعودية",
                  },
                },
                end: {
                  lat: 21.5,
                  lng: 39.2,
                },
              },
            ]}
          />
          
          {/* Location Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-border rounded-2xl p-6 hover:border-brand/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-brand-light" />
                </div>
                <div className="text-right flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">اليمن</h3>
                  <p className="text-brand-light font-medium mb-1">عدن</p>
                  <p className="text-gray-600 text-sm">عدن - الجمهورية اليمنية</p>
                </div>
              </div>
            </div>
            
            <div className="glass-border rounded-2xl p-6 hover:border-brand/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-brand-light" />
                </div>
                <div className="text-right flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">سلطنة عُمان</h3>
                  <p className="text-brand-light font-medium mb-1">مسقط</p>
                  <p className="text-gray-600 text-sm">مسقط - سلطنة عُمان</p>
                </div>
              </div>
            </div>

            <div className="glass-border rounded-2xl p-6 hover:border-brand/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-brand-light" />
                </div>
                <div className="text-right flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">السعودية</h3>
                  <p className="text-brand-light font-medium mb-1">جدة</p>
                  <p className="text-gray-600 text-sm">جدة - المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

