import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";

const skillCategories = [
  {
    title: 'Programming Languages',
    titleAr: 'لغات البرمجة',
    icon: '💻',
    skills: [
      { name: 'Python', nameAr: 'بايثون', level: 'Expert', levelAr: 'خبير', percentage: 95 },
      { name: 'JavaScript', nameAr: 'جافا سكريبت', level: 'Intermediate', levelAr: 'متوسط', percentage: 75 },
      { name: 'PHP', nameAr: 'بي اتش بي', level: 'Intermediate', levelAr: 'متوسط', percentage: 80 },
      { name: 'HTML', nameAr: 'اتش تي ام ال', level: 'Expert', levelAr: 'خبير', percentage: 95 },
      { name: 'CSS', nameAr: 'سي اس اس', level: 'Expert', levelAr: 'خبير', percentage: 95 },
      { name: 'C++', nameAr: 'سي++', level: 'Expert', levelAr: 'خبير', percentage: 90 },
      { name: 'Java (Android)', nameAr: 'جافا (أندرويد)', level: 'Intermediate', levelAr: 'متوسط', percentage: 75 },
      { name: 'Solidity', nameAr: 'سوليديتي', level: 'Intermediate', levelAr: 'متوسط', percentage: 65 },
    ]
  },
  {
    title: 'Web Development',
    titleAr: 'تطوير الويب',
    icon: '🌐',
    skills: [
      { name: 'WordPress Development', nameAr: 'تطوير ووردبريس', level: 'Expert', levelAr: 'خبير', percentage: 95 },
      { name: 'Elementor Builder', nameAr: 'بناء Elementor', level: 'Expert', levelAr: 'خبير', percentage: 95 },
      { name: 'React.js', nameAr: 'رياكت', level: 'Intermediate', levelAr: 'متوسط', percentage: 80 },
      { name: 'Node.js', nameAr: 'نود جي اس', level: 'Intermediate', levelAr: 'متوسط', percentage: 75 },
      { name: 'Flask (Python)', nameAr: 'فلاسك (بايثون)', level: 'Expert', levelAr: 'خبير', percentage: 90 },
      { name: 'Bootstrap', nameAr: 'بوتستراب', level: 'Expert', levelAr: 'خبير', percentage: 90 },
    ]
  },
  {
    title: 'Project Management',
    titleAr: 'إدارة المشاريع',
    icon: '📊',
    skills: [
      { name: 'Agile Project Management', nameAr: 'الإدارة الرشيقة', level: 'Expert', levelAr: 'خبير', percentage: 90 },
      { name: 'Requirements Elicitation', nameAr: 'استخلاص المتطلبات', level: 'Expert', levelAr: 'خبير', percentage: 85 },
      { name: 'Team Leadership', nameAr: 'قيادة الفرق', level: 'Expert', levelAr: 'خبير', percentage: 90 },
      { name: 'Client Handling', nameAr: 'التعامل مع العملاء', level: 'Expert', levelAr: 'خبير', percentage: 95 },
      { name: 'Project Planning', nameAr: 'تخطيط المشاريع', level: 'Expert', levelAr: 'خبير', percentage: 90 },
    ]
  },
  {
    title: 'Mobile Development',
    titleAr: 'تطوير الموبايل',
    icon: '📱',
    skills: [
      { name: 'Android (Java)', nameAr: 'أندرويد (جافا)', level: 'Intermediate', levelAr: 'متوسط', percentage: 75 },
      { name: 'Flutter', nameAr: 'فلاتر', level: 'Intermediate', levelAr: 'متوسط', percentage: 70 },
      { name: 'Mobile App Management', nameAr: 'إدارة تطبيقات الموبايل', level: 'Expert', levelAr: 'خبير', percentage: 85 },
    ]
  },
  {
    title: 'Database & Tools',
    titleAr: 'قواعد البيانات والأدوات',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', nameAr: 'ماي إس كيو إل', level: 'Expert', levelAr: 'خبير', percentage: 90 },
      { name: 'MongoDB', nameAr: 'مونجو دي بي', level: 'Intermediate', levelAr: 'متوسط', percentage: 75 },
      { name: 'PostgreSQL', nameAr: 'بوستجري إس كيو إل', level: 'Intermediate', levelAr: 'متوسط', percentage: 70 },
      { name: 'Git', nameAr: 'جيت', level: 'Expert', levelAr: 'خبير', percentage: 90 },
      { name: 'Postman', nameAr: 'بوستمان', level: 'Expert', levelAr: 'خبير', percentage: 85 },
      { name: 'Figma', nameAr: 'فيجما', level: 'Intermediate', levelAr: 'متوسط', percentage: 75 },
    ]
  },
  {
    title: 'Languages',
    titleAr: 'اللغات',
    icon: '🌍',
    skills: [
      { name: 'English', nameAr: 'الإنجليزية', level: 'Expert', levelAr: 'خبير', percentage: 95 },
      { name: 'Arabic', nameAr: 'العربية', level: 'Beginner', levelAr: 'مبتدئ', percentage: 40 },
      { name: 'Urdu', nameAr: 'الأردية', level: 'Native', levelAr: 'لغة أم', percentage: 100 },
    ]
  }
];

const getLevelColor = (percentage) => {
  if (percentage >= 90) return 'bg-green-500';
  if (percentage >= 75) return 'bg-blue-500';
  if (percentage >= 60) return 'bg-yellow-500';
  return 'bg-gray-500';
};

export default function SkillsDetailed({ isArabic = false }) {
  return (
    <section id="skills-detailed" className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-24" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-16 flex justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-pixel">
            <Highlighter action="underline" color="#FFD700">
              {isArabic ? 'المهارات والخبرات 🚀' : 'Skills & Expertise 🚀'}
            </Highlighter>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-yellow-400 hover:shadow-2xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <span>{isArabic ? category.titleAr : category.title}</span>
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">
                        {isArabic ? skill.nameAr : skill.name}
                      </span>
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {isArabic ? skill.levelAr : skill.level}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${getLevelColor(skill.percentage)} group-hover:opacity-80`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg p-6 text-center text-white shadow-lg">
              <div className="text-4xl font-bold">6+</div>
              <div className="text-sm mt-2">{isArabic ? 'سنوات خبرة' : 'Years Experience'}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-center text-white shadow-lg">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm mt-2">{isArabic ? 'تقنية ولغة' : 'Technologies'}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-center text-white shadow-lg">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm mt-2">{isArabic ? 'مشروع منجز' : 'Projects Delivered'}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-center text-white shadow-lg">
              <div className="text-4xl font-bold">6</div>
              <div className="text-sm mt-2">{isArabic ? 'شهادات احترافية' : 'Certifications'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
