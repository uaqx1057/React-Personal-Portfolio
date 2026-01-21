import React from 'react';
import logo from '../assets/logo3.png'; // Make sure this path is correct

function handleNavClick(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}

/**
 * A minimal, transparent navigation bar.
 * It uses Flexbox to space out the logo and navigation links.
 * The `z-30` class ensures it sits on top of other content.
 */
export default function Navbar({ isArabic = false }) {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 p-4 sm:p-6" dir={isArabic ? 'rtl' : 'ltr'}>
      <nav className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="Logo" className="h-50 w-auto object-contain" /> {/* Adjust size as needed */}
        </a>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-4 text-sm font-medium text-white/90 sm:gap-6">
          <a
            href="#about"
            onClick={e => handleNavClick(e, 'about')}
            className="transition hover:text-white"
          >
            {isArabic ? 'من أنا' : 'About'}
          </a>
          <a
            href="#experience"
            onClick={e => handleNavClick(e, 'experience')}
            className="transition hover:text-white"
          >
            {isArabic ? 'الخبرات' : 'Experience'}
          </a>
          <a
            href="#projects"
            onClick={e => handleNavClick(e, 'projects')}
            className="transition hover:text-white"
          >
            {isArabic ? 'المشاريع' : 'Projects'}
          </a>
          <a
            href="#contact"
            onClick={e => handleNavClick(e, 'contact')}
            className="transition hover:text-white"
          >
            {isArabic ? 'تواصل' : 'Contact'}
          </a>
        </div>
      </nav>
    </header>
  );
}