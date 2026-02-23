"use client"

import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import BgLayout from "@/components/layouts/bgLayout"
import { useTranslation } from '@/contexts/TranslationContext'

export default function WarrantyClient() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const productModel = searchParams.get("model") || ""

  const [location, setLocation] = useState({ lat: "", lng: "" })

  useEffect(() => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude.toString(),
        lng: pos.coords.longitude.toString(),
      })
    })
  }, [])

  const PRODUCT_CODES = [
    "BNEDR500","BNIMD750","BNIMD850","BNIMD1100","BNPLS240",
    "BNRHM800SDS","BNRHM800","BNRHM1500","BNTRM350","BNROU1600",
  ]

  return (
    <BgLayout>

      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden mb-14">
        <img
          src="/banners/warranty banner.webp"
          alt="Warranty Banner"
          className="w-full h-72 md:h-[24rem] lg:h-[28rem] object-cover"
        />
      </section>

      {/* ================= INTRO ================= */}
      <section className="container mx-auto px-4 max-w-4xl mb-16">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#0072ce] drop-shadow-lg mb-4">
          {t("warranty.intro.title")}
        </h1>

        <p className="text-center text-lg text-gray-700 mb-4">
          {t("warranty.intro.para1")}
        </p>

        <p className="text-center text-gray-600">
          {t("warranty.intro.para2")}
        </p>
      </section>

      {/* ================= FORM ================= */}
      <section className="container mx-auto px-4 max-w-3xl pb-20">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-10">

          <h2 className="text-3xl font-bold text-[#0072ce] mb-8 text-center">
            {t("warranty.form.title")}
          </h2>

          <form className="space-y-6">

            {/* Hidden Fields */}
            <input type="hidden" name="product_model" value={productModel} />
            <input type="hidden" name="lat" value={location.lat} />
            <input type="hidden" name="lng" value={location.lng} />
            <input type="hidden" name="timestamp" value={new Date().toISOString()} />

            {/* Customer Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("warranty.form.customerName")} *
              </label>
              <input
                type="text"
                placeholder={t("warranty.form.customerNamePlaceholder")}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-[#0072ce] focus:outline-none"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("warranty.form.contactNumber")} *
              </label>
              <div className="flex gap-3">
                <select className="px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0072ce]">
                  <option>🇮🇳 +91</option>
                  <option>🇺🇸 +1</option>
                  <option>🇬🇧 +44</option>
                </select>
                <input
                  type="tel"
                  placeholder={t("warranty.form.contactPlaceholder")}
                  className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                />
              </div>
            </div>

            {/* Product Code */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("warranty.form.productCode")} *
              </label>

              <select
                name="product_code"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-[#0072ce] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  {t("warranty.form.productCodePlaceholder")}
                </option>

                {PRODUCT_CODES.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>

            {/* Serial Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("warranty.form.serialNumber")} *
              </label>
              <input
                type="text"
                placeholder={t("warranty.form.serialPlaceholder")}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-[#0072ce] focus:outline-none"
              />
            </div>

            {/* Invoice Upload */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("warranty.form.invoice")} *
              </label>

              <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-blue-200 rounded-2xl cursor-pointer hover:border-[#0072ce] transition">
                <span className="text-gray-500">
                  {t("warranty.form.uploadHint")}
                </span>
                <span className="text-sm text-gray-400 mt-2">
                  {t("warranty.form.uploadTypes")}
                </span>
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600">
                {t("warranty.form.terms")} *
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg"
            >
              {t("warranty.form.submit")}
            </button>

          </form>
        </div>
      </section>

    </BgLayout>
  )
}
