import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";

const experiences = [
  {
    company: 'iLab Information Technologies',
    companyAr: 'آي لاب لتقنية المعلومات',
    location: 'Al Khobar, Saudi Arabia',
    locationAr: 'الخبر، المملكة العربية السعودية',
    role: 'Project Manager & Team Lead',
    roleAr: 'مدير مشاريع وقائد فريق',
    period: 'March 2024 - Present',
    periodAr: 'مارس ٢٠٢٤ - الحالي',
    responsibilities: [
      'Leading development teams for DOBS (Driver Onboarding/Offboarding System) using Python/Flask',
      'Managing DMS (Document Management System) project built with PHP',
      'Overseeing Flutter-based driver mobile application development',
      'Coordinating cross-functional teams and ensuring timely project delivery'
    ],
    responsibilitiesAr: [
      'قيادة فرق التطوير لنظام DOBS (نظام إدخال وإخراج السائقين) باستخدام Python/Flask',
      'إدارة مشروع DMS (نظام إدارة المستندات) المبني بـ PHP',
      'الإشراف على تطوير تطبيق موبايل للسائقين باستخدام Flutter',
      'تنسيق الفرق متعددة التخصصات وضمان تسليم المشاريع في الوقت المحدد'
    ]
  },
  {
    company: 'The MK Solution',
    companyAr: 'ذا إم كيه سوليوشن',
    location: 'Rawalpindi, Punjab',
    locationAr: 'راولبندي، البنجاب',
    role: 'Project Manager & Senior WordPress Developer',
    roleAr: 'مدير مشاريع ومطور ووردبريس أول',
    period: 'May 2018 - March 2024',
    periodAr: 'مايو ٢٠١٨ - مارس ٢٠٢٤',
    responsibilities: [
      'Managed a team of 10 cross-functional professionals delivering high-visibility projects on time and within budget',
      'Led development of complex WordPress websites for high-profile clients using Elementor',
      'Implemented SEO optimization, security enhancements, and responsive design best practices',
      'Provided technical mentorship to junior developers fostering continuous learning culture'
    ],
    responsibilitiesAr: [
      'إدارة فريق من ١٠ محترفين متعددي التخصصات لتسليم مشاريع عالية الأهمية في الوقت المحدد وضمن الميزانية',
      'قيادة تطوير مواقع ووردبريس معقدة لعملاء بارزين باستخدام Elementor',
      'تنفيذ أفضل ممارسات تحسين محركات البحث والأمان والتصميم المتجاوب',
      'تقديم التوجيه التقني للمطورين المبتدئين لتعزيز ثقافة التعلم المستمر'
    ]
  },
  {
    company: 'Upwork',
    companyAr: 'أب ورك',
    location: 'Freelance (Remote)',
    locationAr: 'العمل الحر (عن بُعد)',
    role: 'WordPress Developer',
    roleAr: 'مطور ووردبريس',
    period: 'January 2020 - December 2023',
    periodAr: 'يناير ٢٠٢٠ - ديسمبر ٢٠٢٣',
    responsibilities: [
      'Developed custom WordPress themes and designs using Elementor Builder for various clients',
      'Managed multiple WordPress websites with regular updates, maintenance, and troubleshooting',
      'Utilized HTML, CSS, PHP, and JavaScript to enhance and customize websites',
      'Maintained exceptional communication delivering high-quality results on tight deadlines'
    ],
    responsibilitiesAr: [
      'تطوير قوالب وتصاميم ووردبريس مخصصة باستخدام Elementor Builder لعملاء متنوعين',
      'إدارة مواقع ووردبريس متعددة مع التحديثات والصيانة الدورية وحل المشكلات',
      'استخدام HTML وCSS وPHP وJavaScript لتحسين وتخصيص المواقع',
      'الحفاظ على تواصل استثنائي وتقديم نتائج عالية الجودة ضمن مواعيد نهائية ضيقة'
    ]
  },
  {
    company: 'Customer Service & Technical Support',
    companyAr: 'خدمة العملاء والدعم الفني',
    location: 'Rawalpindi, Punjab',
    locationAr: 'راولبندي، البنجاب',
    role: 'CSR & Technical Support Specialist',
    roleAr: 'أخصائي خدمة العملاء والدعم الفني',
    period: 'February 2016 - January 2017',
    periodAr: 'فبراير ٢٠١٦ - يناير ٢٠١٧',
    responsibilities: [
      'Provided exceptional customer service responding to technical inquiries from internal and external customers',
      'Assisted customers in troubleshooting software and hardware issues via phone, email, and chat',
      'Resolved technical problems efficiently ensuring customer satisfaction'
    ],
    responsibilitiesAr: [
      'تقديم خدمة عملاء استثنائية والرد على الاستفسارات التقنية من العملاء الداخليين والخارجيين',
      'مساعدة العملاء في حل مشاكل البرامج والأجهزة عبر الهاتف والبريد الإلكتروني والدردشة',
      'حل المشكلات التقنية بكفاءة لضمان رضا العملاء'
    ]
  }
];

export default function Experience({ isArabic = false }) {
  return (
    <section id="experience" className="w-full bg-gradient-to-b from-white to-gray-50 text-black py-24" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-16 flex justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-pixel">
            <Highlighter action="underline" color="#FFD700">
              {isArabic ? 'الخبرات العملية 💼' : 'Work Experience 💼'}
            </Highlighter>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-yellow-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Company & Role */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {isArabic ? exp.roleAr : exp.role}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-lg font-semibold text-yellow-600">
                    {isArabic ? exp.companyAr : exp.company}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {isArabic ? exp.periodAr : exp.period}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  📍 {isArabic ? exp.locationAr : exp.location}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {isArabic ? 'المسؤوليات الرئيسية:' : 'Key Responsibilities:'}
                </h4>
                <ul className="space-y-2">
                  {(isArabic ? exp.responsibilitiesAr : exp.responsibilities).map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-1 flex-shrink-0">▸</span>
                      <span className="text-gray-700 leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline indicator */}
              <div className="absolute top-8 -left-3 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-md"></div>
            </div>
          ))}
        </div>

        {/* Internships & Volunteering Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
            {isArabic ? 'التدريب والعمل التطوعي 🎓' : 'Internships & Volunteering 🎓'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Internships */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-400">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isArabic ? 'التدريب العملي' : 'Internships'}
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">
                    {isArabic ? 'هيئة تنظيم الإعلام الإلكتروني الباكستانية (PEMRA)' : 'Pakistan Electronic Media Regulatory Authority (PEMRA)'}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {isArabic ? 'إسلام أباد، باكستان' : 'Islamabad, Pakistan'}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    {isArabic ? 'أداء جميع المهام في قسم تكنولوجيا المعلومات والتعلم من خلال العملية' : 'Performed all duties in IT department and learned through the process'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {isArabic ? 'لجنة الانتخابات الباكستانية (ECP)' : 'Election Commission of Pakistan (ECP)'}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {isArabic ? 'إسلام أباد، باكستان' : 'Islamabad, Pakistan'}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    {isArabic ? 'مساعدة نائب مدير قاعدة البيانات واختبار نظام RMS المستخدم في الانتخابات العامة' : 'Assisted Deputy Director Database, performed testing of RMS System used in General Elections'}
                  </p>
                </div>
              </div>
            </div>

            {/* Volunteering */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-400">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {isArabic ? 'العمل التطوعي' : 'Volunteering'}
              </h4>
              <div>
                <p className="font-semibold text-gray-800">
                  {isArabic ? 'قسم الروابط الصناعية (DIL)' : 'Department of Industrial Linkages (DIL)'}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {isArabic ? 'جامعة إقرا، إسلام أباد' : 'IQRA University, Islamabad'}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {isArabic
                    ? 'انضممت كمدخل بيانات ثم عملت كمنظم للعديد من الفعاليات مثل "معارض التوظيف" و"حملات التوظيف" و"المحاضرات العامة"'
                    : 'Joined as Data Operator, later worked as organizer of Corporate Events including Job Fairs, Recruitment Drives, and Guest Lectures'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
