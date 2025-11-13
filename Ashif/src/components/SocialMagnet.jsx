import React from 'react';
import Magnet from './Magnet';

const socials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ashif.zip/',
    icon: (
<svg width="45px" height="45px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0C2.01472 0 0 2.01472 0 4.5V10.5C0 12.9853 2.01472 15 4.5 15H10.5C12.9853 15 15 12.9853 15 10.5V4.5C15 2.01472 12.9853 0 10.5 0H4.5ZM4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5ZM11 4H12V3H11V4Z" fill="#000000"/>
</svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/',
    icon: (
<svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"/></svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: (
<svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
    ),
  },
];

export default function SocialMagnet() {
  return (
    <div className="flex gap-8 justify-center py-12">
      {socials.map((social) => (
        <Magnet
          key={social.name}
          padding={50}
          disabled={false}
          magnetStrength={10}
        >
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-white font-semibold"
            style={{ minWidth: 80 }}
          >
            {social.icon}
            <span className="text-base">{social.name}</span>
          </a>
        </Magnet>
      ))}
    </div>
  );
}