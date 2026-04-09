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
          </div>
        </div>

        {/* Middle Section: Contact Form */}
        <section id="contact-form" className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-[#0072ce] p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6">{t('contact.sendMessage')}</h3>
                <p className="opacity-80 text-lg">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaWhatsapp />
                  </div>
                  <span className="font-medium">+91 7428642333</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className="space-y-1">
                    <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t('contact.fullName')}*</label>
                    <input type="text" id="fullName" name="fullName" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-0 focus:ring-2 focus:ring-[#0072ce] transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t('contact.email')}*</label>
                    <input type="email" id="email" name="email" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-0 focus:ring-2 focus:ring-[#0072ce] transition-all outline-none" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t('contact.phone')}*</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-0 focus:ring-2 focus:ring-[#0072ce] transition-all outline-none" placeholder="+91 XXXX XXX XXX" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="requirement" className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t('contact.requirement')}</label>
                    <select id="requirement" name="requirement" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-0 focus:ring-2 focus:ring-[#0072ce] transition-all outline-none appearance-none">
                      <option value="">Select Option</option>
                      <option value="buyer">{t('contact.requirements.buyer')}</option>
                      <option value="dealer">{t('contact.requirements.dealer')}</option>
                      <option value="general">{t('contact.requirements.generalEnquiry')}</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t('contact.message')}</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-0 focus:ring-2 focus:ring-[#0072ce] transition-all outline-none resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="w-full py-5 bg-[#0072ce] text-white font-black rounded-2xl hover:bg-blue-600 shadow-xl shadow-blue-200 transition-all text-xl uppercase tracking-widest active:scale-95">
                  {t('contact.sendButton')}
                </button>
              </form>
            </div>
          </div>
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

          <div className="mt-20 bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/60 shadow-xl">
             <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  The contact page also serves as a helpful resource to understand the company&apos;s performance, quality, and farmer-friendly solutions. The experienced support team is available to answer questions regarding pricing policy, features of products, and service requirements.
                </p>
                <p>
                  Getting assistance and help is easily accessible from <span className="text-[#0072ce] font-bold">Mechnova Machines&apos; phone number</span> and contact form. Reach out today to explore reliable agricultural machinery and get the support you need for efficient farming.
                </p>
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
