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
        <div className="relative w-full mb-10">
          <img src="/mechnova/banner/product-banner.webp" alt="mechnova machines products" className="w-full h-full object-cover" />
        </div>
        {/* Categories and Products */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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

        {locale === 'en' && <ProductsSEOContent />}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

function ProductsSEOContent() {
  return (
    <section className="mt-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-blue-200 pt-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-[#0072ce] mb-6 text-center leading-tight">
          Agriculture Machinery in India: <br/>
          <span className="text-gray-800">Explore Mechnova&apos;s Complete Product Range</span>
        </h2>
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/40">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Agriculture in India is rapidly evolving as there is a rise in adopting modern machinery that improves efficiency and increases productivity while reducing manual labor. In today’s time farmers are shifting towards tools like power weeders, brush cutters, water pumps, and chainsaws to manage their farms more effectively. Among these leading products, Mechnova Machines has proved to be a reliable provider of such high-quality and affordable solutions designed specifically for Indian farming needs.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0072ce]">Complete Range of Agriculture Machinery in India</h3>
              <p className="text-gray-700 leading-relaxed">
                Modern farming requires a combination of tools that are efficient enough for irrigation, soil preparation, harvesting, and crop maintenance. Mechnova offers a wide range of agricultural machinery in India, including power weeders, petrol engine machines, water pumps, chainsaws, and brush cutters, all under one roof.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These machines are suitable for all types and sizes of land, whether it be small, medium, or large. Focusing on durability and performance, Mechnova ensures that farmers get long-lasting tools that deliver consistent results.
              </p>
            </div>
            <div className="bg-[#0072ce]/5 rounded-2xl p-6 border border-[#0072ce]/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-3xl">🚜</span>
                  <span className="font-semibold text-gray-800">7 HP Power Weeders</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-3xl">💧</span>
                  <span className="font-semibold text-gray-800">High Flow Water Pumps</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-3xl">🪵</span>
                  <span className="font-semibold text-gray-800">High RPM Chainsaws</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50 hover:shadow-2xl transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-[#0072ce] mb-4 flex items-center gap-2">
            <span className="text-2xl">🌱</span> Best Power Weeder Brand in India
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            A 7 HP power weeder is an agricultural machine commonly used for the practices of tilling, weeding, and preparation of soil. They&apos;re a good switch from the labor-intensive manual weeding to saving time and enhancing output and yield. The 7 HP denotes the engine power of the machine, which is the horsepower, making it durable enough to handle tough soil conditions while being manageable for the farmers to operate fully by themselves.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base mt-4">
            A power weeder involves rotating blades, which help in penetrating the soil, uprooting the weeds, and breaking the compacted soil. It is generally a lightweight machine designed to be used easily, having adjustable blades, so that farmers can set the depth and width, as some crops may require shallow tilling of soil, while others may need deep tilling.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50 hover:shadow-2xl transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-[#0072ce] mb-4 flex items-center gap-2">
            <span className="text-2xl">⚡</span> Gasoline Engine Machines
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            These engine-based machines play a crucial role in today’s modern agricultural era due to their efficiency and ease of maintenance. These engines are designed for providing constant power output, smooth operation, and fuel efficiency. Gasoline engines are suitable for those farmers who want portable and easy-to-use machines for daily agricultural tasks. They&apos;re a perfect choice for farmers of India who are looking for easy start mechanisms with low maintenance.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50 hover:shadow-2xl transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-[#0072ce] mb-4 flex items-center gap-2">
            <span className="text-2xl">🌊</span> Water Pumps for Irrigation
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            Talking about the most critical aspect of farming includes water management. The water pump provided by Mechnova is a reliable solution, as it delivers water transfer for irrigation, drainage, and other various agricultural needs. These machines are equipped with a powerful engine and self-priming system, giving a smooth flow of operation in situations of difficulty. These pumps can be used for multiple farming activities such as irrigating fields, supplying water to crops, and effectively managing water resources. For Indian farmers, Mechnova water pumps are the best solution because of their high flow capacity and durability.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50 hover:shadow-2xl transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-[#0072ce] mb-4 flex items-center gap-2">
            <span className="text-2xl">🪓</span> Chainsaw for Maintenance
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            Chainsaws are commonly used for forestry, wood-cutting tasks, and farm maintenance. Mechnova chainsaws are powered with powerful engines and ergonomic designs, making them an ideal solution for cutting trees, branches, and firewood. Precise cutting can be done through these machines due to their lightweight and easy-to-handle design. With features like high RPM, durable chains, and efficient fuel usage, they help farmers and rural users complete tasks quickly and safely.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50 hover:shadow-2xl transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-[#0072ce] mb-4 flex items-center gap-2">
            <span className="text-2xl">✂️</span> Brush Cutter for Control
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            Brushcutters are widely used agricultural machines, used for cutting grass, small bushes, and weeds in farms and gardens. These brushcutters are powered by petrol engines and designed to work for long hours. They have strong cutting ability, low vibration, and a unique ergonomic design, making them a comfortable pick for users. Whether it is field maintenance or boundary cleaning, brush cutters provide fast and efficient results.
          </p>
        </div>

        <div className="bg-[#0072ce] p-8 rounded-3xl shadow-lg text-white hover:shadow-2xl transition hover:-translate-y-2 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
          <p className="leading-relaxed text-sm opacity-90">
            The demand for agriculture machinery in India is growing as farmers adopt modern tools to improve efficiency and productivity. Mechnova continues to support farmers with innovative and reliable machinery. By investing in high-quality equipment, farmers can reduce manual effort, save time, and achieve better crop yields—making modern farming more profitable and sustainable.
          </p>
        </div>
      </div>
    </section>
  );
}
