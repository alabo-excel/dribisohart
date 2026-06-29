import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone } from 'react-icons/fa';

const socials = [
  {
    href: 'https://www.facebook.com/profile.php?id=61571043790358',
    icon: <FaFacebook size={18} />,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/ibisohart1',
    icon: <FaInstagram size={18} />,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/dr-ibiso-hart-cmgr-ims-uk-fcbi-london-30ab7615a',
    icon: <FaLinkedinIn size={18} />,
    label: 'LinkedIn',
  },
  {
    href: 'https://api.whatsapp.com/send?phone=2349030236191',
    icon: <FaWhatsapp size={18} />,
    label: 'WhatsApp',
  },
  {
    href: 'tel:+447393330023',
    icon: <FaPhone size={16} />,
    label: 'Phone',
  },
];

const Social = () => {
  return (
    <div className="flex gap-3">
      {socials.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="w-10 h-10 rounded-full bg-[#011627] text-white flex items-center justify-center hover:bg-[#7EC8E3] hover:text-[#011627] transition-colors duration-200"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
