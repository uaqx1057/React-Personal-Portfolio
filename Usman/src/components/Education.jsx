import React from 'react';
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Highlighter } from "@/components/ui/highlighter";

export default function Education({ isArabic = false }) {
  return (
    <section id="education" className="w-full bg-white text-black pb-20" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                {isArabic ? 'المؤهلات' : 'Qualifications'}
              </Highlighter>
            </h2>
          </div>
          <div className="relative flex max-w-lg mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
            <Tree
              className="w-full bg-background overflow-hidden rounded-md"
              initialExpandedItems={["Education", "IU", "Askaria", "Certifications", "Meta", "IBM", "Google", "Illinois"]}
            >
              <Folder element={isArabic ? "تعليمي" : "My Education"} value="Education">
                <Folder element={isArabic ? "جامعة إقرأ" : "Iqra University"} value="IU">
                  <File value="IU-BSE">
                    <p>{isArabic ? 'بكالوريوس هندسة برمجيات (2017 – 2021)' : 'Bachelor of Software Engineering (2017 – 2021)'}</p>
                  </File>
                </Folder>
                <Folder element={isArabic ? "كلية عسكريا، روالبندي" : "Askaria College, Rawalpindi"} value="Askaria">
                  <File value="Askaria-PreEng">
                    <p>{isArabic ? 'دبلوم تمهيدي هندسة (2014 – 2016)' : 'Intermediate in Pre-Engineering (2014 – 2016)'}</p>
                  </File>
                </Folder>
              </Folder>
                <Folder element={isArabic ? "الشهادات" : "Certifications"} value="Certifications">
                  <Folder element="Meta" value="Meta">
                    <File value="Meta-BE">
                      <p>{isArabic ? 'Meta مطور باك إند (مايو 2024)' : 'Meta Back-End Developer (May 2024)'}</p>
                    </File>
                    <File value="Meta-FE">
                      <p>{isArabic ? 'Meta مطور فرونت إند (مايو 2024)' : 'Meta Front-End Developer (May 2024)'}</p>
                    </File>
                  </Folder>
                  <Folder element="IBM" value="IBM">
                    <File value="IBM-FullStack">
                      <p>{isArabic ? 'IBM مطور فل كامل للبرمجيات (مايو 2024)' : 'IBM Full Stack Software Developer (May 2024)'}</p>
                    </File>
                    <File value="IBM-FE">
                      <p>{isArabic ? 'IBM مطور فرونت إند (يونيو 2024)' : 'IBM Front-End Developer (June 2024)'}</p>
                    </File>
                  </Folder>
                  <Folder element="Google" value="Google">
                    <File value="Google-PM">
                      <p>{isArabic ? 'إدارة مشاريع من Google (مايو 2024)' : 'Google Project Management (May 2024)'}</p>
                    </File>
                  </Folder>
                  <Folder element={isArabic ? "جامعة إلينوي" : "University of Illinois"} value="Illinois">
                    <File value="Illinois-FA">
                      <p>{isArabic ? 'تخصص التحليل المالي (يونيو 2024)' : 'Financial Analysis Specialization (June 2024)'}</p>
                    </File>
                  </Folder>
                </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
}