'use client';
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

function Segment() {
  const { t } = useTranslation();

  const segments = [
    {
      title: t('home.segments.gardeningForestry.title'),
      image: "/segment/brush-cutter-grass-cutting-machine.webp",
      link: "/products/",
      desc: t('home.segments.gardeningForestry.description'),
      bgColor: "bg-[#f1efff]", // Light lavender
    },
    {
      title: t('home.segments.fumigation.title'),
      image: "/segment/chainsaw.webp",
      link: "/products/",
      desc: t('home.segments.fumigation.description'),
      bgColor: "bg-[#e8f4ff]", // Light blue
    },
    {
      title: t('home.segments.diesel.title'),
      image: "/segment/petrol-water-pump.webp",
      link: "/products/",
      desc: t('home.segments.diesel.description'),
      bgColor: "bg-[#fff2e8]", // Light orange/peach
    },
    {
      title: t('home.segments.domestic.title'),
      image: "/segment/petrol-engine.webp",
      link: "/products/",
      desc: t('home.segments.domestic.description'),
      bgColor: "bg-[#f0f9eb]", // Light green
    },
    {
      title: t('home.segments.agroIndustrial.title'),
      image: "/segment/power-weeder.webp",
      link: "/products/",
      desc: t('home.segments.agroIndustrial.description'),
      bgColor: "bg-[#fffbeb]", // Light yellow
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50" id="segments">
      <div className="container max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            {t('home.segments.title')}
          </h2>
          <div className="w-24 h-1.5 bg-[#0072ce] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('home.segments.subpara')}
          </p>
        </div>

        {/* Card-Style Rows */}
        <div className="space-y-12">
          {segments.map((seg, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE BLOCK */}
              <div className="w-full md:w-1/2 relative overflow-hidden">
                <Image
                  src={seg.image}
                  alt={seg.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay for aesthetic */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* CONTENT BLOCK */}
              <div className={`w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16 ${seg.bgColor}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-[#0072ce] transition-colors">
                  {seg.title}
                </h3>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                  {seg.desc}
                </p>

                <div>
                  <Link
                    href={seg.link}
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-white bg-[#0072ce] rounded-full text-lg font-semibold hover:bg-[#0059a8] hover:shadow-lg transition-all active:scale-95"
                  >
                    Explore Products
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Segment;
