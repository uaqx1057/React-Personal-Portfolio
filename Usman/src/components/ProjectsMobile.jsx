import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import projectData from '../data/projectsData';

export default function ProjectsMobile({ isArabic = false }) {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <section id="projects-mobile" className="w-full bg-white text-black py-12 px-2" dir={isArabic ? 'rtl' : 'ltr'}>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-pixel underline-wavy-yellow inline-block">
                    <Highlighter action="underline" color="#FFD700">
                        {isArabic ? 'المشاريع 🚀' : 'Projects 🚀'}
                    </Highlighter>
                </h2>
            </div>
            <div className="flex flex-col gap-6 max-w-md mx-auto">
                {displayedProjects.map((project, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col">
                        <div className="w-full h-40 rounded-lg overflow-hidden mb-3 bg-gray-100">
                            {project.videoUrl ? (
                                <video
                                    src={project.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster={project.imageUrl}
                                />
                            ) : (
                                <img
                                            src={project.imageUrl}
                                            alt={isArabic ? project.titleAr || project.title : project.title}
                                            className="w-full h-full object-cover"
                                        />
                            )}
                        </div>
                                <h3 className="text-lg font-bold mb-1">{isArabic ? (project.titleAr || project.title) : project.title}</h3>
                                <p className="text-xs text-gray-600 mb-2">{isArabic ? (project.descriptionAr || project.description) : project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {project.tags && project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-200 text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg"
                            >
                                {isArabic ? 'زيارة الموقع' : 'Visit Site'}
                            </a>
                            {project.repoUrl && project.repoUrl !== '#' && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
                                >
                                    {isArabic ? 'عرض الكود' : 'View Code'}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* View More / View Less Button */}
            <div className="text-center mt-8">
                {!showAll && projectData.length > 3 && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="btn"
                    >
                        {isArabic ? 'عرض المزيد' : 'View More'}
                    </button>
                )}
                {showAll && (
                    <button
                        onClick={() => setShowAll(false)}
                        className="btn"
                    >
                        {isArabic ? 'عرض أقل' : 'View Less'}
                    </button>
                )}
            </div>
        </section>
    );
}