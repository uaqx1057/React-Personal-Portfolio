import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function ContactForm({ isArabic = false }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="relative flex w-full items-center justify-center overflow-hidden bg-background pt-16 pb-32 md:pt-24 md:pb-48" dir={isArabic ? 'rtl' : 'ltr'}>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <div className="relative z-10 container px-4 mx-auto">
        {/* Centered Form */}
        <div className="max-w-md mx-auto px-8 py-6 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">{isArabic ? 'تواصل معي' : 'Contact Me'}</h2>
          <p className="text-center text-sm text-gray-600 mb-4">{isArabic ? 'الخبر، السعودية — بريد: UsmanAsif26261@gmail.com — جوال: +966 56 846 5058' : 'Based in Al Khobar, KSA — Email: UsmanAsif26261@gmail.com — Phone: +966 56 846 5058'}</p>
          <form 
            action="https://formspree.io/f/xrbwdkqb" 
            method="POST"
          >
            <div className="mb-4">
              <label className="block text-gray-800 mb-1" htmlFor="name">{isArabic ? 'الاسم' : 'Your Name'}</label>
              <input
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                placeholder={isArabic ? 'اكتب اسمك' : 'Enter your name'}
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 mb-1" htmlFor="email">{isArabic ? 'بريدك الإلكتروني' : 'Your Email'}</label>
              <input
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                placeholder={isArabic ? 'اكتب بريدك الإلكتروني' : 'Enter your email'}
                name="email"
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 mb-1" htmlFor="message">{isArabic ? 'رسالتك' : 'Your Message'}</label>
              <textarea
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                rows="4"
                placeholder={isArabic ? 'اكتب رسالتك' : 'Enter your message'}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
              type="submit"
            >
              {isArabic ? 'إرسال' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          <a
            href="mailto:UsmanAsif26261@gmail.com"
            className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex h-10 px-4 py-2 bg-yellow-300 text-gray-900 hover:bg-yellow-400 hover:scale-105"
          >
            {isArabic ? 'مراسلة عبر البريد' : 'Email Usman'}
          </a>
          <a
            href="/Usman_Asif_Qureshi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex h-10 px-4 py-2 border border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white hover:scale-105"
          >
            {isArabic ? 'تحميل السيرة الذاتية' : 'Download CV'}
          </a>
        </div>
      </div>
    </div>
  );
}