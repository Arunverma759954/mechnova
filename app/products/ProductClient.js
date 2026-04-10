"use client"
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import categoryDataEs from './category-es.json'
import categoryDataEn from './category-en.json'
import categoryDataHi from './category-hi.json'
import categoryDataBn from './category-bn.json'
import categoryDataMr from './category-mr.json'
import categoryDataTe from './category-te.json'
import categoryDataGj from './category-gj.json'

import Link from 'next/link'
import { useTranslation } from '@/lib/useTranslation'

function ProductCard({ categoryKey, productKey, product }) {
  const { t } = useTranslation()
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-2 flex flex-col items-center text-center">
      <img src={product.image} alt={product.name} className="w-full h-56 object-contain mb-4 rounded" onError={e => e.target.src='/about.webp'} />
      <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
      <Link href={`/products/${productKey}`} className="mt-auto inline-block bg-[#0072ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">{t('home.productsPage.exploreModels')}</Link>
    </div>
  )
}

export default function ProdPage() {
  const { t, locale } = useTranslation()
  
const categoryData = locale === 'en'
  ? categoryDataEn
  : locale === 'es'
    ? categoryDataEs
    : locale === 'bn'
      ? categoryDataBn
      : locale === 'mr' 
          ? categoryDataMr
        : locale === 'te' 
          ? categoryDataTe
          : locale === 'gj' 
          ? categoryDataGj
      : categoryDataHi;

  
  // Convert categoryData to array and sort by id
  const categories = Object.entries(categoryData)
    .map(([key, value]) => ({ key, ...value }))
    .sort((a, b) => Number(a.id) - Number(b.id))

  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] min-h-screen pb-12">
        <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
        {/* Hero Banner */}
        <div className="relative w-full mb-10 overflow-hidden group">
          <img 
            src="/mechnova/banner/product-banner.webp" 
            alt="mechnova machines products" 
            className="w-full h-auto object-cover transform hover:scale-105 transition duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {locale === 'en' && <ProductsSEOIntro />}

        {/* Categories and Products */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
          {categories.map(category => {
            // Convert products to array and sort by id
            const products = Object.entries(category.products || {})
              .map(([key, value]) => ({ key, ...value }))
              .sort((a, b) => Number(a.id) - Number(b.id))
            if (!products.length) return null
            return (
              <section key={category.key} id={category.key} className="mb-8">
                <div className="flex items-center justify-center mb-6 gap-4">
                  <h2 className="text-3xl md:text-5xl text-center font-semibold text-[#0072ce]">{category.name}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map(product => (
                    <ProductCard key={product.key} categoryKey={category.key} productKey={product.key} product={product} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>


        {locale === 'en' && <ProductsSEOFeatures />}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

function ProductsSEOIntro() {
  return (
    <section className="mt-8 mb-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Intro Header Section - More Compact & Professional */}
      <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-white/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0072ce]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3394E6]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#0072ce] mb-4 leading-tight drop-shadow-sm">
            Agriculture Machinery in India: <br/>
            <span className="text-gray-800">Explore Mechnova&apos;s Complete Product Range</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#0072ce] to-[#3394E6] rounded-full mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Agriculture in India is rapidly evolving with modern machinery that improves efficiency and productivity while reducing manual labor. Mechnova Machines is a reliable provider of high-quality and affordable solutions designed specifically for Indian farming needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#0072ce]">Complete Range of Agriculture Machinery in India</h3>
            <p className="text-gray-650 text-base md:text-lg leading-relaxed">
              Modern farming requires tools for irrigation, soil preparation, and maintenance. Mechnova offers a wide range of machinery including power weeders, water pumps, and chainsaws all under one roof.
            </p>
            <p className="text-gray-650 text-base md:text-lg leading-relaxed">
              Our machines are durable, perform consistently, and are suitable for all land sizes—ensuring farmers achieve the best results with minimal effort.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#0072ce]/5 to-[#3394E6]/5 rounded-[2rem] p-6 border border-white/60 shadow-inner">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 bg-white/90 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <span className="text-3xl">🚜</span>
                <span className="font-bold text-lg text-gray-800">7 HP Power Weeders</span>
              </div>
              <div className="flex items-center gap-4 bg-white/90 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <span className="text-3xl">💧</span>
                <span className="font-bold text-lg text-gray-800">High Flow Water Pumps</span>
              </div>
              <div className="flex items-center gap-4 bg-white/90 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <span className="text-3xl">🪵</span>
                <span className="font-bold text-lg text-gray-800">High RPM Chainsaws</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSEOFeatures() {
  return (
    <section className="mt-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32 pb-20 border-t border-blue-100 pt-20">
      {/* Zig-Zag Features */}
      <div className="space-y-32">
        {/* Feature 1: Power Weeder */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white">
              <img 
                src="/mechnova/products/gasoline-tiller/hero-gasoline-tiller.webp" 
                alt="Power Weeder" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0072ce]/40 to-transparent"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl">🌱</span>
              <h3 className="text-3xl md:text-4xl font-black text-[#0072ce]">Best Power Weeder Brand in India</h3>
            </div>
            <div className="h-2 w-20 bg-gradient-to-r from-[#0072ce] to-[#3394E6] rounded-full"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              A 7 HP power weeder is an agricultural machine commonly used for the practices of tilling, weeding, and preparation of soil. They&apos;re a good switch from the labor-intensive manual weeding to saving time and enhancing output and yield.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              A power weeder involves rotating blades, which help in penetrating the soil, uprooting the weeds, and breaking the compacted soil. It is generally a lightweight machine designed to be used easily, having adjustable blades for precise control.
            </p>
          </div>
        </div>

        {/* Feature 2: Gasoline Engine (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white">
              <img 
                src="/mechnova/products/gasoline-engine/hero-gasoline-engine.webp" 
                alt="Gasoline Engine" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0072ce]/40 to-transparent"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl">⚡</span>
              <h3 className="text-3xl md:text-4xl font-black text-[#0072ce]">Gasoline Engine Machines</h3>
            </div>
            <div className="h-2 w-20 bg-gradient-to-r from-[#0072ce] to-[#3394E6] rounded-full"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              These engine-based machines play a crucial role in today’s modern agricultural era due to their efficiency and ease of maintenance. These engines are designed for providing constant power output, smooth operation, and fuel efficiency.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Gasoline engines are suitable for those farmers who want portable and easy-to-use machines for daily tasks. They&apos;re a perfect choice for farmers looking for easy start mechanisms and reliability.
            </p>
          </div>
        </div>

        {/* Feature 3: Water Pump */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white">
              <img 
                src="/mechnova/products/gasoline-water-pump/hero-gasoline-water-pump.webp" 
                alt="Water Pump" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0072ce]/40 to-transparent"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl">🌊</span>
              <h3 className="text-3xl md:text-4xl font-black text-[#0072ce]">Water Pumps for Irrigation</h3>
            </div>
            <div className="h-2 w-20 bg-gradient-to-r from-[#0072ce] to-[#3394E6] rounded-full"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Water management is the most critical aspect of farming. Mechnova pumps are reliable solutions, delivering efficient water transfer for irrigation, drainage, and other agricultural needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Equipped with powerful engines and self-priming systems, these machines ensure smooth operation even in difficult conditions. High flow capacity and durability make them a trusted choice for Indian farmers.
            </p>
          </div>
        </div>

        {/* Feature 4: Chainsaw (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white">
              <img 
                src="/mechnova/products/chainsaw/hero-chainsaw.webp" 
                alt="Chainsaw" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0072ce]/40 to-transparent"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl">🪓</span>
              <h3 className="text-3xl md:text-4xl font-black text-[#0072ce]">Chainsaw for Maintenance</h3>
            </div>
            <div className="h-2 w-20 bg-gradient-to-r from-[#0072ce] to-[#3394E6] rounded-full"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Chainsaws are essential for forestry, wood-cutting tasks, and farm maintenance. Mechnova chainsaws feature ergonomic designs and high-performance engines ideal for cutting trees and branches efficiently.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With features like high RPM, durable chains, and efficient fuel usage, they help farmers and rural users complete demanding tasks quickly and with maximum safety.
            </p>
          </div>
        </div>

        {/* Final Conclusion Card */}
        <div className="bg-gradient-to-r from-[#0072ce] to-[#3394E6] p-10 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h3 className="text-4xl md:text-5xl font-black mb-4">Conclusion</h3>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              The demand for agriculture machinery in India is growing as farmers adopt modern tools to improve efficiency and productivity. Mechnova continues to support farmers with innovative and reliable machinery. 
            </p>
            <p className="text-lg opacity-85">
              By investing in high-quality equipment, farmers can reduce manual effort, save time, and achieve better crop yields—making modern farming more profitable and sustainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
