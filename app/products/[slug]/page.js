"use client"
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import { useTranslation } from '@/lib/useTranslation'
import Link from 'next/link'
import categoryDataEs from '../category-es.json'
import categoryDataEn from '../category-en.json'
import categoryDataBn from '../category-bn.json'
import categoryDataMr from '../category-mr.json'
import categoryDataTe from '../category-te.json'
import categoryDataGj from '../category-gj.json'
import detailedModelData from './detailedModelData.json'
import modelDataEn from './modelData-en.json'
import modelDataEs from './modelData-es.json'
import modelDataHi from './modelData-hi.json'
import modelDataBn from './modelData-bn.json'
import modelDataMr from './modelData-mr.json'
import modelDataTe from './modelData-te.json'
import modelDataGj from './modelData-gj.json'

const ChainsawSEOContent = () => (
  <section className="bg-slate-50 py-16 md:py-24 font-sans leading-relaxed text-slate-900 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Immersive Header & Intro */}
      <div className="relative mb-20">
        <div className="absolute top-0 left-0 w-32 h-1 bg-[#0072ce]"></div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight pt-8">
          Chainsaw Machine: <span className="text-[#0072ce]">Powerful Wood Cutting Solution</span> for Modern Farming
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-[1.6]">
              As there is a shift towards modern agriculture, implementing new-age modern machinery is necessary, and that is when a chainsaw comes into the picture.
            </p>
            <p className="text-lg text-slate-700">
              It is a powerful machine mastered by new technology that makes it suitable for cutting trees, preparing firewood, or maintaining farms and orchards. This machine offers speed, precision, and efficiency. In today&apos;s time, farmers and professionals in India opt for tools like petrol-powered chainsaws because of their high performance and durability.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center">
             <p className="text-lg text-slate-700 mb-6 italic border-l-4 border-[#0072ce] pl-6 font-medium">
               &quot;Chainsaws help in saving time and manual effort, making it a valuable purchase and investment for anyone who is involved in farming and agricultural activities.&quot;
             </p>
             <p className="text-lg text-slate-700">
               Due to their power and long-term capacity, they make themselves a reliable solution among the available solutions. 
             </p>
          </div>
        </div>
      </div>

      {/* Key Features Section - Premium Grid */}
      <div className="mb-24">
        <h3 className="text-3xl font-extrabold text-[#0072ce] mb-12 flex items-center gap-4">
          <span className="p-2 bg-blue-100 rounded-lg">
            <svg className="w-8 h-8 text-[#0072ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </span>
          Key Features of a Petrol Chainsaw
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "High-Performance Petrol Engine",
              text: "Petrol chainsaws are powered by petrol engines, which makes them capable of working in tough conditions. This helps the machine in delivering consistent performance throughout. Heavy tasks including tree cutting and log processing are easily handled by machines having an engine of 50-60 cc."
            },
            {
              title: "Long-Lasting and Durable Built",
              text: "The build of modern chainsaws is made from strong and good-quality components, making them suitable for continuous use. This ensures long life and reliability in demanding tasks."
            },
            {
              title: "Efficient Wood Cutting Capability",
              text: "With the help of a tree-cutting machine like a chainsaw, they are equipped with a sharp rotating chain that enables precise and fast cutting. These features of the machine make it suitable for cutting branches, logs, and even thick trunks with absolute ease."
            },
            {
              title: "Easy to Operate",
              text: "In today&apos;s time comfort is a factor that cannot be compromised by the users, so these chainsaws are designed and developed with user-friendly features like recoil start, ergonomic handle, and anti-vibration system. This helps in reducing operator fatigue and improving comfort."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-blue-200 border border-slate-100 transition-all duration-300 group">
              <h4 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#0072ce] transition-colors">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Uses Section - Decorative Listing */}
      <div className="mb-24 relative">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden">
          <h3 className="text-3xl md:text-5xl font-bold mb-16 text-center">Uses of Chainsaw Machines</h3>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {[
              {
                title: "Firewood Preparation",
                text: "Chainsaws are a highly useful machine for preparing firewood for commercial or domestic use. Uniformly sized logs can be quickly and easily obtained through it."
              },
              {
                title: "Farm Use and Garden Maintenance",
                text: "Farmers use a chainsaw in clearing the unwanted bushes, branches, and weeds from their farms, making it easier for them to maintain healthy and clean farms and gardens."
              },
              {
                title: "Tree Cutting and Pruning",
                text: "Chainsaws are widely used for cutting trees and trimming branches in farms, orchards, and forests. They provide clean and quick cuts, improving efficiency."
              }
            ].map((use, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="text-6xl font-black text-blue-500/20">0{i+1}</div>
                <h4 className="text-2xl font-bold">{use.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed">{use.text}</p>
              </div>
            ))}
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0072ce]/10 rounded-full blur-[100px]"></div>
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        </div>
      </div>

      {/* Trust & Recommendation Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
        <div className="bg-gradient-to-br from-[#0072ce] to-blue-800 text-white p-12 rounded-[2.5rem] shadow-xl">
           <h3 className="text-3xl font-bold mb-8">Why Choose the Best Chainsaw Brand in India?</h3>
           <p className="text-lg text-blue-50 leading-relaxed">
             By choosing the best chainsaw brand in India, farmers can easily rely on the durability of the products, performance of the machines, and after-sales support. Brands like <span className="underline decoration-2 underline-offset-4 font-black">Mechnova</span> can be trusted, as the machines made by them are according to the Indian farming conditions, offering strong engines and reliable performance.
           </p>
        </div>
        
        <div className="bg-blue-50 p-12 rounded-[2.5rem] border-2 border-dashed border-blue-200 flex flex-col justify-center">
           <div className="text-[#0072ce] font-bold text-sm uppercase tracking-widest mb-4">Highly Recommended</div>
           <p className="text-xl text-slate-700 leading-relaxed font-medium">
             Petrol chainsaws are highly recommendable as they are compact, portable, and powerful in nature, making them suitable for working longer working hours. As the machine runs on petrol and not on electricity, it can be used in rural areas and field work.
           </p>
        </div>
      </div>

      {/* Professional Conclusion */}
      <div className="max-w-4xl mx-auto text-center py-12 border-t border-slate-200">
         <h3 className="text-3xl font-bold text-slate-900 mb-8 italic">&quot;A chainsaw machine is a non-compromisable machine...&quot;</h3>
         <p className="text-xl text-slate-600 leading-[1.8] mb-12">
           A chainsaw machine is a non-compromisable machine for anyone who is involved in farming activities, forestry, and cutting work. It is a time saver as well as decreases the labor dependency. With its versatility in nature, it provides powerful performance and improves efficiency in long-term use.
         </p>
         
         <div className="inline-flex items-center gap-6 bg-white py-6 px-10 rounded-full shadow-lg border border-slate-100 hover:scale-105 transition-transform">
           <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1  1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
           </div>
           <p className="text-2xl font-black text-slate-900 leading-tight">
          Mechnova Machine&apos;s chainsaw is the <span className="text-[#0072ce]">most trusted brand</span> and stands out for farmers looking for an efficient, long-term wood-cutting machine.
        </p>
      </div>
     </div>
    </div>
  </section>
);

const BrushCutterSEOTop = () => (
  <section className="bg-slate-50 py-12 font-sans leading-relaxed text-slate-900 border-b border-slate-200 mb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative mb-16">
        <div className="absolute top-0 left-0 w-32 h-1 bg-[#0072ce]"></div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight pt-8 leading-tight">
          Brush Cutter Machine: <span className="text-[#0072ce]">A Reliable Grass Cutting Tool</span> for Every Farm
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              One of the major problems which gets raised in farms and fields are the unwanted weeds which get grown, and removing them becomes an essential task as they can hamper the growth of the crop by competing with them in terms of sunlight, water, and minerals.
            </p>
            <p className="text-lg text-slate-700">
              With the help of a brush cutter farmers and gardeners can keep their fields clean and well maintained. This machine is also known as a grass cutting machine which can tackle everything from light grass trimming to cutting heavy bushes. 
            </p>
            <p className="text-lg font-medium text-[#0072ce]">
              Unless like manual tilling, a brush cutter saves time and manual labor. It is widely used by farmers, gardeners for effective farming and results.
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-[#0072ce] pl-4">Types of Brush Cutter Machines</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0072ce] mb-2">Back Pack Brush Cutter</h4>
                <p className="text-slate-600 text-sm">A back pack brush cutter is designed for farmers who are involved in activities which require long and continuous work. The engine is mounted on the back of the user reducing the wait on hands. This type of brush cutter is ideal for those farmers who prefer comfort and work for extended periods in large fields.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0072ce] mb-2">Side Pack Brush Cutter</h4>
                <p className="text-slate-600 text-sm">In this brush cutter the engine is attached to the side of the machine. This machine is suitable for small and medium sized farms as it is easy to handle and provides better balance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BrushCutterSEOBottom = () => (
  <section className="bg-slate-50 py-16 font-sans leading-relaxed text-slate-900 mt-12 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Key Features */}
      <div className="mb-20">
        <h3 className="text-3xl font-extrabold text-[#0072ce] mb-12 flex items-center gap-4">
          <span className="p-2 bg-blue-100 rounded-lg">
            <svg className="w-8 h-8 text-[#0072ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </span>
          Key Features of Brush Cutter
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Powerful Petrol Engine",
              text: "The machine is powered by a petrol engine which performs consistent performance throughout. A petrol brush cutter is designed to perform heavy duty tasks and in rural areas where electricity cannot be found easily."
            },
            {
              title: "Multiple Attachments",
              text: "A brush cutter is a versatile machine and can perform various tasks. Different attachments like nylon head and metal blades are supported by the machinery making it capable to work in different situations with different requirements."
            },
            {
              title: "Ergonomic Design",
              text: "While working in farms, users get fatigued easily and comfort is required when working on a brush cutter. Thus a brush cutter is enabled with adjustable handles and anti-vibration systems to make it easier to use."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold mb-4 text-slate-900 underline decoration-[#0072ce] decoration-2 underline-offset-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-20 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center relative z-10">Benefits of Using a Grass Cutter Machine</h3>
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {[
            {
              title: "Saves Time and Effort",
              text: "Cutting grass manually from tools like sickles, a lot of time is wasted. But with the help of a brush cutter one can cover larger fields in a shorter duration. It also reduces physical strain on the user and allows the work to get done quickly."
            },
            {
              title: "Improves Farm Productivity",
              text: "Removal of weeds and unwanted grass is necessary for crops to grow better as they compete with plants for nutrients. By switching to a grass cutter machine, farmers can maintain their fields efficiently and quickly, which ultimately leads to better crop growth and overall productivity of the farm."
            },
            {
              title: "Suitable for All Terrains",
              text: "A brush cutter machine is designed to perform and work effectively on uneven land, and slope. Its portability and strong performance make it ideal for different farming conditions, including rough and hard-to-reach locations."
            }
          ].map((benefit, i) => (
            <div key={i} className="space-y-4">
              <div className="text-5xl font-black text-blue-500/20">0{i+1}</div>
              <h4 className="text-xl font-bold">{benefit.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto text-center py-12 border-t border-slate-200">
        <h3 className="text-3xl font-bold text-slate-900 mb-8 italic">Conclusion</h3>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          A brush cutter machine is a must-have tool for farming and land maintenance today. These machines help a lot with cutting grass. You can pick a back pack brush cutter or a side pack brush cutter. Both types are efficient, convenient and work well. Farmers can benefit a lot from using a petrol brush cutter. It reduces the work of cutting, saves time and helps keep fields in good shape.
        </p>
        <div className="bg-gradient-to-br from-[#0072ce] to-blue-700 text-white p-10 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-transform">
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
            A brush cutter machine is really helpful for farming. With care a brush cutter can greatly improve how farms are run and how much is produced.
          </p>
          <p className="text-lg opacity-90 leading-relaxed">
            Farmers can manage their farms better with a brush cutter. It is an investment, for any farmer. A brush cutter machine makes farming easier.
          </p>
        </div>
      </div>
    </div>
  </section>
);

function ModelCard({ slug, model }) {
  const { t } = useTranslation()
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col">
      <img 
        src={model.image} 
        alt={model.name} 
        className="w-full object-contain mb-4 rounded" 
        onError={e => e.target.src='/about.webp'} 
      />
      <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">{model.code}</h3>
      {/* <p className="text-gray-600 mb-3 text-sm">
        Model: <span className="font-semibold text-[#0072ce]">{model.code}</span>
      </p> */}
      <div className="mt-auto">
        <Link 
          href={`/products/${slug}/${model.code}`} 
          className="w-full inline-block bg-[#0072ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition text-center"
        >
          {t('home.productsPage.exploreModels')}
        </Link>
      </div>
    </div>
  )
}

export default function ProductSlugPage() {
  const { slug } = useParams()
  const { t, locale } = useTranslation()
  const [productData, setProductData] = useState(null)
  const [categoryInfo, setCategoryInfo] = useState(null)
  const [isDetailedProduct, setIsDetailedProduct] = useState(false)
  const [oldProductData, setOldProductData] = useState(null)
  const sliderRef = useRef(null);
  const indexRef = useRef(0);
  const sliderRefs = useRef([]);


  useEffect(() => {
    if (slug) {
      // Get category data based on language
     const categoryData =
  locale === 'en' ? categoryDataEn :
  locale === 'es' ? categoryDataEs :
  locale === 'bn' ? categoryDataBn :
  locale === 'mr' ? categoryDataMr :
  locale === 'te' ? categoryDataTe :
  locale === 'gj' ? categoryDataGj :

  
  categoryDataEn; // fallback

      
      // Find the category and product info
      let foundProduct = null
      let foundCategory = null
      
      Object.entries(categoryData).forEach(([categoryKey, category]) => {
        if (category.products && category.products[slug]) {
          foundProduct = { key: slug, ...category.products[slug] }
          foundCategory = { key: categoryKey, ...category }
        }
      })
      
      setCategoryInfo(foundCategory)
      
      // Check if this product has detailed model data
      if (foundProduct && foundProduct.detail === "yes" && detailedModelData[slug]) {
        setProductData(detailedModelData[slug])
        setIsDetailedProduct(true)
        setOldProductData(null)
      } else {
        // For regular products, use the old modelData structure based on language
const modelDataMap = {
  en: modelDataEn,
  es: modelDataEs,
  hi: modelDataHi || modelDataEn,  // fallback to English
  bn: modelDataBn || modelDataEn, 
  mr: modelDataMr, 
  te: modelDataTe,
  gj: modelDataGj,


};


const modelData = modelDataMap[locale] || modelDataEn;



        const oldProduct = modelData[slug]
        if (oldProduct) {
          // Check if the old product also has detail: "yes", then prioritize new view
          if (oldProduct.detail === "yes" && detailedModelData[slug]) {
            setProductData(detailedModelData[slug])
            setIsDetailedProduct(true)
            setOldProductData(null)
          } else {
            // Use old view for detail: "no" or missing detail field
            setOldProductData(oldProduct)
            setIsDetailedProduct(false)
            setProductData(null)
          }
        } else {
          setOldProductData(null)
          setProductData(null)
          setIsDetailedProduct(false)
        }
      }
    }
  }, [slug, locale])

  // Autoplay logic for sliding images
useEffect(() => {
  if (!oldProductData || !oldProductData.models) return;

  const intervals = [];

  oldProductData.models.forEach((model, index) => {
    const slider = sliderRefs.current[index];
    if (!slider) return;

    // SAFELY HANDLE IMAGES
    const images = Array.isArray(model.images) && model.images.length > 0
      ? model.images
      : [model.image];

    const totalImages = images.length;
    if (totalImages <= 1) return; // Skip autoplay for single image

    let slideIndex = 0;

    const interval = setInterval(() => {
      slideIndex = (slideIndex + 1) % totalImages;
      slider.scrollTo({
        left: slider.clientWidth * slideIndex,
        behavior: "smooth",
      });
    }, 3000);

    intervals.push(interval);
  });

  return () => intervals.forEach(clearInterval);
}, [oldProductData]);


  // If neither detailed nor old product data exists
  if (!productData && !oldProductData) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('home.productsPage.productNotFound')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('home.productsPage.productNotAvailable')}
            </p>
            <Link href="/products" className="text-[#0072ce] hover:text-blue-700 font-medium">
              ← {t('home.productsPage.backToProducts')}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Render old view for detail: "no" products
   // Hero Section
  if (!isDetailedProduct && oldProductData) {
    return (
      <>
        <Header />
        <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] pb-12">
          {/* Hero banner */}
          <div className="relative w-full mb-10">
            <img
              src="/mechnova/banner/banner-m.webp"
              alt="Productos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
              <div className="px-8 md:px-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{oldProductData.name}</h1>
                <p className="text-lg md:text-2xl text-blue-100">{oldProductData.description}</p>
              </div>
            </div>
          </div>

          {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOTop />}

          {/* Models Section */}
          <div className="max-w-5xl mx-auto flex flex-col gap-12 px-4">
            {oldProductData.models && oldProductData.models.length > 0 ? (
              oldProductData.models
                .sort((a, b) => Number(a.id) - Number(b.id))
                .map((model, idx) => (
                  <div
                    key={model.code}
                    className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Image Slider for Model */}
                    <div className="w-full h-full md:w-2/5 flex justify-center items-center relative">
                  <div
                    ref={(el) => (sliderRefs.current[idx] = el)}
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      scrollBehavior: "smooth",
                      scrollbarWidth: "none",        // Firefox
                      msOverflowStyle: "none",       // IE & Edge
                    }}
                    className="h-full"
                  >


                  {Array.isArray(model.images) && model.images.length > 0 ? (
                    model.images.map((image, i) => (
                      <div key={i} className="w-full flex-shrink-0 h-full relative snap-center">
                        <img
                          src={image}
                          alt={`${model.name} Image ${i + 1}`}
                          className="rounded-lg shadow-lg bg-white w-full h-full object-cover"
                          onError={(e) => { 
                            e.target.src = oldProductData.error_image || '/about.webp'; 
                          }} // Fallback image
                        />
                      </div>
                    ))
                  ) : (
                    <div className="w-full flex-shrink-0 h-full relative snap-center">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="rounded-lg shadow-lg bg-white w-full h-full object-cover"
                        onError={(e) => { 
                          e.target.src = oldProductData.error_image || '/about.webp'; 
                        }} // Fallback image
                      />
                    </div>
                  )}
                </div>
              </div>



                    {/* Model Info */}
                    <div className="flex-1 flex flex-col justify-center bg-gray-50 rounded-lg p-6 shadow">
                      <h3 className="text-xl font-semibold text-[#0072ce] mb-2">{model.name}</h3>
                      <p className="mb-1">
                        <span className="font-bold">{t('home.productsPage.code')}</span> {model.code}
                      </p>
                      <p className="mb-1">
                        <span className="font-bold">{t('home.productsPage.warranty')}</span> {model.warranty}
                      </p>
                      <p className="whitespace-pre-line">
                        <span className="font-bold">{t('home.productsPage.specificationsLabel')}</span> <br /> {model.specifications}
                      </p>
                      <span className="flex flex-col md:flex-row items-start md:items-center mt-4 gap-4">
                        <Link href="/contact">
                          <button className="p-2 bg-[#0072ce] text-gray-100 text-lg rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-110 transition">
                            {t('home.productsPage.requestQuote')}
                          </button>
                        </Link>
                        <Link href="tel:+917428642333">
                          <button className="md:ml-4 p-2 bg-[#0072ce] text-gray-100 text-lg rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-110 transition">
                            {t('home.productsPage.callUs')}
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                ))
            ) : (
              <div className="text-center text-gray-500">{t('home.productsPage.noModelsAvailable')}</div>
            )}
          </div>

          {/* Back link */}
          <div className="mt-16 flex justify-center">
            <Link href="/products" className="">
              <button className="bg-[#0072ce] text-white text-xl font-medium p-4 rounded-xl cursor-pointer hover:scale-110 transition-all">
                {t('home.productsPage.backToProductsButton')}
              </button>
            </Link>
          </div>
          {slug === 'chainsaw' && locale === 'en' && <ChainsawSEOContent />}
          {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOBottom />}
        </main>
        <Footer />
      </>
    );
  }

  // Render new view for detail: "yes" products
  if (isDetailedProduct && productData) {
    const productName = locale === 'en' ? (productData.nameEn || productData.name) : productData.name
    const productDescription = locale === 'en' ? (productData.descriptionEn || productData.description) : productData.description

    return (
      <>
        <Header />
        <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] min-h-screen pb-12">
        <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
        {/* Hero Banner */}
        <div className="relative w-full mb-10">
          <img 
            src={productData.banner_image || productData.hero_image} 
            alt={productName} 
            className="w-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="px-8 md:px-20">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {productName}
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                {productDescription}
              </p>
            </div>
          </div>
        </div>

        {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOTop />}

        {/* Models Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0072ce] text-center mb-2">
              {t('home.productsPage.availableModels')}
            </h2>
            <p className="text-gray-600 text-center">
              {t('home.productsPage.chooseFromSelection')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productData.models.map((model, index) => (
              <ModelCard key={model.code || index} slug={slug} model={model} />
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-[#0072ce] hover:text-blue-700 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('home.productsPage.backToProducts')}
            </Link>
          </div>
          {slug === 'chainsaw' && locale === 'en' && <ChainsawSEOContent />}
          {slug === 'brushcutter' && locale === 'en' && <BrushCutterSEOBottom />}
        </div>
      </main>
      <Footer />
    </>
    )
  }

  // This should never be reached, but just in case
  return null
}

