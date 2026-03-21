'use client';
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

function OnlineStores() {
  const { t } = useTranslation();

  const stores = [
    { name: "Store 1", image: "/on.svg" },
    { name: "Store 2", image: "/on2.svg" },
    { name: "Store 3", image: "/on3.svg" },
  ];

  return (
    <section className="w-full py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t('home.onlineStores.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('home.onlineStores.subtitle')}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {stores.map((store, i) => (
            <div 
              key={i} 
              className="group relative flex items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-2 w-full max-w-[220px] min-h-[100px]"
            >
              <Image
                src={store.image}
                alt={store.name}
                width={180}
                height={60}
                className="max-w-full h-auto transition-all duration-500"
              />
              
              {/* Subtle accent border */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0072ce] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action text below logos */}
        <div className="mt-12">
           <p className="text-sm font-medium text-gray-400 uppercase tracking-[0.2em]">{t('home.onlineStores.authorizedRetailers')}</p>
        </div>
      </div>
    </section>
  );
}

export default OnlineStores;
