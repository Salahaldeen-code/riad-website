"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function DestinationsMarquee() {
  // Destination photos - using images from public folder and some travel destinations
  const destinationImages = [
    "/saudi-arabia-riyadh-business-district.jpg",
    "/luxury-travel-airplane-first-class.jpg",
    "/modern-office-building-oman-business.jpg",
    "/istanbul-turkey-university-students.jpg",
    "/university-campus-malaysia-modern.jpg",
    "/modern-hospital-medical-tourism.jpg",
    // Add more destination images - you can add your own images to public folder
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=970&h=700&fit=crop",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=970&h=700&fit=crop",
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-10 pointer-events-none" />
      
      {/* Overlay heading */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-16 pb-8 px-4 text-center pointer-events-none">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-light/90 mb-4">
          وجهاتنا
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          <span className="block">اكتشف العالم</span>
          <span className="block text-brand-light drop-shadow-[0_0_20px_rgba(5,79,152,0.35)]">
            مع خدماتنا السياحية
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          نقدم لك أفضل الخدمات السياحية والتنسيق الطبي في أرقى الوجهات حول العالم
        </p>
      </div>
      
      {/* Full screen marquee */}
      <div className="w-full h-full">
        <ThreeDMarquee images={destinationImages} className="w-full h-full rounded-none" />
      </div>
    </section>
  );
}
