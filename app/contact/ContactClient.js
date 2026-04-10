'use client';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/useTranslation';

function ContactPage() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const timeoutRef = useRef();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setShowModal(true);
    timeoutRef.current = setTimeout(() => {
      setShowModal(false);
      router.push('/');
    }, 5000);
  }

  function handleCloseModal() {
    setShowModal(false);
    clearTimeout(timeoutRef.current);
    router.push('/');
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="min-h-screen bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] pb-16">
        <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
        <section className="relative w-full overflow-hidden mb-16 shadow-lg">
          <img
            src="/mechnova/banner/banner-m.webp"
            alt="Contact Us Hero"
            className="w-full h-auto object-cover object-center"
          />
        </section>

        {/* Top Content Section: Information & Support */}
        <div className="container mx-auto px-4 mb-20">
          <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-black text-[#0072ce] drop-shadow-sm mb-10 text-center tracking-tight">
              {t('contact.getInTouch')}
            </h1>

            {/* Top section replaced with Image + Text */}
            <div className="w-full rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-xl border border-white/80 shadow-2xl">
              <div className="grid md:grid-cols-2 items-stretch">
                {/* Left: Image */}
                <div className="relative min-h-[320px] md:min-h-[400px]">
                  <img
                    src="/mechnova/banner/banner-m.webp"
                    alt="Mechnova Machines Support Team"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
                </div>
                {/* Right: Content */}
                <div className="p-10 md:p-14 flex flex-col justify-center space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0072ce] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider w-fit">
                    <FaPhoneAlt className="text-sm" /> Why Contact Us
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    The contact page also serves as a helpful resource to understand the company&apos;s performance, quality, and farmer-friendly solutions. The experienced support team is available to answer questions regarding <span className="font-bold text-[#0072ce]">pricing policy, features of products,</span> and service requirements.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Getting assistance and help is easily accessible from <span className="text-[#0072ce] font-bold">Mechnova Machines&apos; phone number</span> and contact form. Reach out today to explore reliable agricultural machinery and get the support you need for efficient farming.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a href="https://wa.me/917428642333" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md text-sm">
                      <FaWhatsapp /> WhatsApp Us
                    </a>
                    <a href="mailto:info@mechnovamachines.com" className="inline-flex items-center gap-2 bg-[#0072ce] hover:bg-[#005bb5] text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md text-sm">
                      <FaEnvelope /> Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Form */}
        <section id="contact-form" className="container mx-auto px-4 mb-24">
          <div className="max-w-2xl mx-auto bg-[#F0F7FF] rounded-[1rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-[#0072ce] mb-8">{t('contact.sendMessage')}</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6'>
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="fullName" className="block text-sm font-bold text-gray-700">{t('contact.fullName')}*</label>
                  <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm" />
                </div>
                {/* Email Address */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700">{t('contact.email')}*</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm" />
                </div>
                {/* Phone Number */}
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700">{t('contact.phone')}*</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm" />
                </div>
                {/* Company */}
                <div className="space-y-1">
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700">{t('contact.company')}</label>
                  <input type="text" id="company" name="company" className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm" />
                </div>
                {/* Requirement */}
                <div className="space-y-1">
                  <label htmlFor="requirement" className="block text-sm font-bold text-gray-700">{t('contact.requirement')}</label>
                  <div className="relative">
                    <select id="requirement" name="requirement" className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option value="">{t('contact.requirement')}</option>
                      <option value="buyer">{t('contact.requirements.buyer')}</option>
                      <option value="dealer">{t('contact.requirements.dealer')}</option>
                      <option value="general">{t('contact.requirements.generalEnquiry')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                {/* Quantity */}
                <div className="space-y-1">
                  <label htmlFor="quantity" className="block text-sm font-bold text-gray-700">{t('contact.productInterest')}</label>
                  <input type="number" id="quantity" name="quantity" className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm" />
                </div>
                {/* City */}
                <div className="space-y-1">
                  <label htmlFor="city" className="block text-sm font-bold text-gray-700">{t('contact.city')}*</label>
                  <input type="text" id="city" name="city" required className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm" />
                </div>
                {/* Country */}
                <div className="space-y-1">
                  <label htmlFor="country" className="block text-sm font-bold text-gray-700">{t('contact.country')}*</label>
                  <input type="text" id="country" name="country" required className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm" />
                </div>
                {/* Designation */}
                <div className="space-y-1">
                  <label htmlFor="designation" className="block text-sm font-bold text-gray-700">{t('contact.designation')}</label>
                  <input type="text" id="designation" name="designation" className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm" />
                </div>
                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700">{t('contact.subject')}</label>
                  <input type="text" id="subject" name="subject" className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm" />
                </div>
              </div>
              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700">{t('contact.message')}</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2.5 rounded-md bg-white border border-gray-300 focus:ring-1 focus:ring-[#0072ce] focus:border-[#0072ce] outline-none transition-all shadow-sm resize-none" />
              </div>
              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" className="w-full py-4 bg-[#005bb5] text-white font-bold rounded-full hover:bg-[#004a94] shadow-md transition-all text-lg active:scale-[0.98]">
                  {t('contact.sendButton')}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Support & Inquiries Section (Below Form) */}
        <section className="container mx-auto px-4 mb-24 max-w-6xl">
          {useTranslation().locale === 'en' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center bg-white/50 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/80">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-3 bg-blue-100 text-[#0072ce] px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                  <FaPhoneAlt /> Customer Support
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Get in Touch with Mechnova Machines for <span className="text-[#0072ce]">Support & Inquiries</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  Still confused between choosing a trusted partner of agricultural equipment? Then the Mechnova Machines contact page is your go-to destination.
                </p>
              </div>
              <div className="lg:col-span-5 space-y-6 bg-white/80 p-8 rounded-[2rem] shadow-inner border border-blue-50">
                <p className="text-gray-700 leading-relaxed">
                  The contact section mentioned on the website provides all the necessary information to help users regarding <span className="font-bold text-[#0072ce]">product inquiries, dealership opportunities</span>, and after-sales support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Farmers can reach out anytime to gain knowledge and information on any machines like brush cutters, power weeders, chainsaws, and water pumps.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Bottom Details Section: Contact Cards */}
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition group">
              <div className="w-16 h-16 bg-blue-50 text-[#0072ce] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#0072ce] group-hover:text-white transition-colors duration-500">
                <FaEnvelope />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
              <p className="text-gray-500 mb-6">Our team is here to help.</p>
              <Link href="mailto:info@mechnovamachines.com" className="text-lg font-bold text-[#0072ce] hover:underline wrap-anywhere">info@mechnovamachines.com</Link>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition group">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
                <FaWhatsapp />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Chat with Us</h4>
              <p className="text-gray-500 mb-6">Mon-Sat from 9am to 6pm.</p>
              <Link href="https://wa.me/917428642333" target="_blank" className="text-lg font-bold text-green-600 hover:underline">+91 7428642333</Link>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition group">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h4>
              <p className="text-gray-500 mb-6">Haryana, India 122015</p>
              <p className="text-sm font-bold text-gray-800 leading-relaxed">2nd Floor, Plot No. 756, Udyog Vihar Phase V, Gurugram</p>
            </div>
          </div>

        </section>

        {/* Thank You Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center mx-4">
              <h3 className="text-2xl font-bold text-[#0072ce] mb-4">{t('contact.thankYou')}</h3>
              <p className="text-gray-700 mb-6 text-center">
                {t('contact.thankYouMessage')}<br />
                {t('contact.redirectMessage')}
              </p>
              <button onClick={handleCloseModal} className="px-6 py-2 bg-[#0072ce] text-white rounded-full font-semibold hover:scale-105 transition">
                {t('contact.close')}
              </button>
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

export default ContactPage;
