import React from 'react';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaArrowRight,
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const col1 = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
];

const col2 = [
  { label: 'Media', href: '/gallery' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Life Matic Blog', href: 'http://lifematicswithdribisohart.com/', external: true },
];

const socials = [
  { icon: <FaFacebook size={15} />, href: 'https://www.facebook.com/profile.php?id=61571043790358', label: 'Facebook' },
  { icon: <FaInstagram size={15} />, href: 'https://www.instagram.com/ibisohart1', label: 'Instagram' },
  { icon: <FaLinkedin size={15} />, href: 'https://www.linkedin.com/in/dr-ibiso-hart-cmgr-ims-uk-fcbi-london-30ab7615a', label: 'LinkedIn' },
  { icon: <FaWhatsapp size={15} />, href: 'https://api.whatsapp.com/send?phone=2349030236191', label: 'WhatsApp' },
  { icon: <FaPhone size={15} />, href: 'tel:+447393330023', label: 'Phone' },
];

const FooterNav = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 px-4 mt-10 lg:px-8">

      {/* ── dark rounded card ── */}
      <div className="max-w-6xl mx-auto bg-[#0f1c2e] rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/30">

          {/* LEFT — brand + tagline + subscribe */}
          <div className="lg:w-[38%] p-8 lg:p-10">
            <div className="flex items-center gap-2 mb-6">
              {/* <HiSparkles className="text-[#7EC8E3] text-base" /> */}
              <span className="text-white text-sm font-bold tracking-wide">Dr. Ibiso D Hart</span>
            </div>

            <p style={{ textAlign: 'left' }} className="text-white text-2xl lg:text-3xl font-black leading-snug mb-8">
              Empowering minds,<br />
              <span className="text-white/35">transforming lives.</span>
            </p>

            <a href="https://lifematicswithdribisohart.com/" target="_blank" rel="noreferrer">
              <button className="inline-flex items-center gap-2 bg-white hover:bg-[#7EC8E3] text-[#011627] font-bold text-sm py-3 px-6 rounded-full transition-all duration-200 hover:scale-105">
                Book Your Discovery Session <FaArrowRight size={13} />
              </button>
            </a>
          </div>

          {/* MIDDLE — nav links in 2 columns */}
          <div className="flex-1 p-8 lg:p-10 flex items-center">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 w-full">
              {[...col1, ...col2].map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textAlign: 'left' }}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-150"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.label} href={l.href}>
                    <span
                      style={{ textAlign: 'left' }}
                      className="block text-white/55 hover:text-white text-sm transition-colors duration-150 cursor-pointer"
                    >
                      {l.label}
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* RIGHT — stacked social icons */}
          <div className="p-8 lg:px-8 lg:py-10 flex lg:flex-col flex-row flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#7EC8E3] text-white/50 hover:text-[#7EC8E3] flex items-center justify-center transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ── copyright below card ── */}
      <div className="max-w-6xl mx-auto mt-4 px-2 flex flex-col md:flex-row items-center justify-between gap-1">
        <p style={{ textAlign: 'left' }} className="text-[11px] text-gray-400">
          © {year} Dr. Ibiso D Hart. All Rights Reserved.
        </p>
        <p style={{ textAlign: 'left' }} className="text-[11px] text-gray-400">
          Built by{' '}
          <a
            href="https://a03labs.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#011627] font-medium hover:text-[#7EC8E3] transition-colors duration-150"
          >
            A03 Labs
          </a>
        </p>
      </div>

    </footer>
  );
};

export default FooterNav;
