"use client";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useTranslation } from "@/lib/useTranslation";
import { useState } from "react";

// New gallery images from public root: gallery1.webp ... gallery8.webp + Agroindustrial banner
const GALLERY_ITEMS = [
  { src: "/gallery1.webp", captionKey: "caption1" },
  { src: "/gallery2.webp", captionKey: "caption2" },
  { src: "/gallery3.webp", captionKey: "caption3" },
  { src: "/gallery4.webp", captionKey: "caption4" },
  { src: "/gallery5.webp", captionKey: "caption5" },
  { src: "/gallery6.webp", captionKey: "caption6" },
  { src: "/gallery7.webp", captionKey: "caption7" },
  { src: "/gallery8.webp", captionKey: "caption8" },
  { src: "/mechnova/banner/Agroindustrial.webp", captionKey: "caption9" },
  { src: "/gallery/26mar-1.webp", captionKey: "Petrol Power Weeders in India" },
  { src: "/gallery/26mar-2.webp", captionKey: "power weeder brand in India," },
  { src: "/gallery/26mar-3.webp", captionKey: "Mechnova Power Weeder" },
];

function GalleryClient() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] min-h-screen">
        <div className="block" style={{ height: "4.5em" }} aria-hidden="true" />
        <section className="container mx-auto px-4 py-8">
          {/* Enhanced Split Layout Header - Compact & Professional */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-w-6xl mx-auto mb-10 bg-white/40 backdrop-blur-md rounded-[2rem] p-5 md:p-8 shadow-lg border border-white/50">
            <div className="w-full lg:w-5/12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0072ce] to-[#3394E6] rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative overflow-hidden rounded-2xl aspect-video max-h-[260px] shadow-lg">
                  {/* Using a high-quality relevant image for the intro */}
                  <img 
                    src="/mechnova/banner/Agroindustrial.webp" 
                    alt={t("gallery.title")}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 text-left">
              <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold tracking-widest text-[#0072ce] uppercase bg-[#0072ce]/10 rounded-full">
                {t("gallery.image")}
              </span>
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-black text-[#0072ce] leading-tight mb-3 drop-shadow-sm">
                {t("gallery.title")}
              </h1>
              <div className="h-1 w-12 bg-gradient-to-r from-[#0072ce] to-[#3394E6] rounded-full mb-4"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium opacity-90">
                {t("gallery.subtitle")}
              </p>
              
              <div className="mt-5 flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-600 bg-white/60 px-3 py-1 rounded-lg shadow-sm border border-white/40">
                  <svg className="w-3.5 h-3.5 text-[#0072ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  High Resolution
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-600 bg-white/60 px-3 py-1 rounded-lg shadow-sm border border-white/40">
                  <svg className="w-3.5 h-3.5 text-[#3394E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Verified Quality
                </div>
              </div>
            </div>
          </div>

          {/* Grid Section Heading */}
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">Gallery Collection</h2>
            <div className="h-0.5 w-10 bg-[#0072ce] mx-auto mt-1.5 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {GALLERY_ITEMS.map((item, index) => (
              <div key={index} className="group relative">
                <button
                  type="button"
                  className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#0072ce]/30 bg-white border-4 border-white"
                  onClick={() => setLightbox(index)}
                >
                  <img
                    src={item.src}
                    alt={t(`gallery.${item.captionKey}`)}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {t(`gallery.${item.captionKey}`)}
                    </p>
                    <span className="text-[#3394E6] text-sm font-semibold flex items-center gap-1 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      View Full Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
            onClick={() => setLightbox(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
            aria-label="Close"
          >
            <button
              type="button"
              className="absolute top-6 right-6 text-white text-5xl hover:scale-110 transition duration-300 z-[110] focus:outline-none"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group w-full flex justify-center">
                <img
                  src={GALLERY_ITEMS[lightbox].src}
                  alt={t(`gallery.${GALLERY_ITEMS[lightbox].captionKey}`)}
                  className="object-contain max-h-[80vh] w-auto shadow-[0_0_50px_rgba(255,255,255,0.1)] rounded-xl"
                />
              </div>
              <div className="mt-6 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
                <p className="text-center text-white text-xl font-medium tracking-wide">
                  {t(`gallery.${GALLERY_ITEMS[lightbox].captionKey}`)}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default GalleryClient;
