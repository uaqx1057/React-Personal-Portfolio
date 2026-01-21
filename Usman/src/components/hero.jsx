import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import RotatingText from './RotatingText';
import { WordRotate } from "@/components/ui/word-rotate";

/**
 * A modern, minimal hero section component.
 */
export default function Hero({ isArabic = false }) {
  const skills = isArabic
    ? ['مدير مشاريع', 'مطور فل ستاك', 'خبير ووردبريس', 'مطور تطبيقات موبايل']
    : ['Project Manager', 'Full-Stack Developer', 'WordPress Expert', 'Mobile App Developer'];
  const greetings = isArabic ? ["مرحباً", "أهلاً", "السلام عليكم"] : ["Hello", "Hola", "Ciao", "مرحبا"];

  return (
    <section className="relative w-full h-screen overflow-hidden" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* 1. Spline Background */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Spline
          scene="https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode"
          aria-label="Interactive 3D animation"
        />
      </div>

      {/* 2. Overlay Content */}
      {/* Content is aligned to the center */}
      <div className="relative z-20 flex items-center justify-center w-full h-full p-8 text-center bg-black/20 pointer-events-none sm:p-16 md:p-24">
        <div className="max-w-3xl pointer-events-auto">
          <h1 className="font-pixel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white [text-shadow:_0_3px_5px_rgb(0_0_0_/_40%)]">
            <div className="flex items-center justify-center gap-x-2 mb-2">
              <WordRotate words={greetings} />
            </div>
            <div className="mt-2">
              {isArabic ? 'أنا عثمان آصف قريشي' : "I'm Usman Asif Qureshi"}
            </div>
          </h1>
          
          {/* Rotating Text for Skills */}
          <div className="flex justify-center mt-4">
            <RotatingText
              texts={skills}
              mainClassName="text-lg text-white/90 md:text-xl lg:text-2xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.08}
              staggerFrom="last"
            />
          </div>
        
          {/* Call-to-action buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                setTimeout(() => {
                  const el = document.getElementById('projects');
                  if (el) {
                    el.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-black transition-all duration-300 bg-white rounded-lg shadow-lg pointer-events-auto hover:bg-gray-200 hover:scale-105"
            >
              {isArabic ? 'شاهد أعمالي' : 'View My Work'}
              <ArrowRight size={20} />
            </a>
            <a
              href="/Usman_Asif_Qureshi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-white rounded-lg shadow-lg pointer-events-auto hover:bg-white hover:text-black hover:scale-105"
            >
              {isArabic ? 'تحميل السيرة الذاتية' : 'Download CV'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}