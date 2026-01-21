import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef, isArabic = false }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl text-center">
        <div className="mb-12 flex justify-center">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            {isArabic ? 'نبذة عني 😊' : 'About Me 😊'}
                        </Highlighter>
                    </h2>
        </div>  
        <div className="space-y-6">
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            baseOpacity={0}
            enableBlur={true}
            baseRotation={1.2}
            blurStrength={10}
            containerClassName="my-4"
            textClassName="font-sans text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {isArabic
              ? 'أنا عثمان آصف قريشي، مدير مشاريع ومطور فل ستاك للويب والموبايل بخبرة ست سنوات في قيادة التسليم والهندسة العملية.'
              : "I'm Usman Asif Qureshi, a project manager and full-stack web/mobile developer with six years of experience in delivery leadership and hands-on engineering."}
          </ScrollReveal>
          
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            baseOpacity={0}
            enableBlur={true}
            baseRotation={1.2}
            blurStrength={10}
            containerClassName="my-4"
            textClassName="font-sans text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {isArabic
              ? 'أعمل حالياً في iLab Information Technologies بالخبر، حيث أقود فرقاً تبني نظام DOBS لتسجيل السائقين باستخدام Python/Flask، ونظام DMS بـ PHP، وتطبيق موبايل بـ Flutter.'
              : "Currently at iLab Information Technologies in Al Khobar, I lead teams building DOBS (Driver Onboarding/Offboarding System) in Python/Flask, a DMS in PHP, and a Flutter-based driver app."}
          </ScrollReveal>
          
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            baseOpacity={0}
            enableBlur={true}
            baseRotation={1.2}
            blurStrength={10}
            containerClassName="my-4"
            textClassName="font-sans text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {isArabic
              ? 'أتخصص في مواقع ووردبريس وإليمنتور، وبرمجة PHP/JavaScript، وتطبيقات أندرويد، وواجهات Python API. هدفي: تسليم موثوق وتجارب سريعة وآمنة.'
              : "I specialize in WordPress and Elementor, custom PHP/JavaScript, Android apps, and Python APIs. My focus: reliable delivery and fast, secure experiences."}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}