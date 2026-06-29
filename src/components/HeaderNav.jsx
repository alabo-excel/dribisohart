import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Expertise', href: '/about#expertise' },
  { label: 'Books', href: '/books' },
  { label: 'Media', href: '/gallery' },
  { label: 'Contact', href: '/#contact' },
];

const HeaderNav = ({ disableSticky = false }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (disableSticky) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [disableSticky]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      {/* ── main navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || disableSticky
            ? 'bg-white border-b border-gray-100 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-0 h-16 flex items-center justify-between relative">

          {/* Logo */}
          <Link href="/">
            <img src="./images/logo.png" className="w-11 h-11" alt="Dr. Ibiso D Hart" />
          </Link>

          {/* Center nav — desktop only */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.slice(0, 5).map((l) => (
              <Link key={l.label} href={l.href}>
                <span
                  className={`text-sm transition-colors duration-200 cursor-pointer ${
                    scrolled || disableSticky
                      ? 'text-gray-500 hover:text-[#011627]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {l.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right — CTA button (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="http://lifematicswithdribisohart.com/" target="_blank" rel="noreferrer">
              <button
                className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                  scrolled || disableSticky
                    ? 'bg-[#011627] text-white hover:bg-[#012d4a]'
                    : 'bg-white text-[#011627] hover:bg-white/90'
                }`}
              >
                Lifematics Blog
              </button>
            </a>
          </div>

          {/* Mobile hamburger → X */}
          <button
            onClick={toggle}
            className="lg:hidden relative flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`absolute block w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                scrolled || disableSticky || open ? 'bg-[#011627]' : 'bg-white'
              } ${open ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
            />
            <span
              className={`absolute block w-6 h-0.5 rounded-full transition-all duration-300 ${
                scrolled || disableSticky || open ? 'bg-[#011627]' : 'bg-white'
              } ${open ? 'opacity-0 scale-x-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute block h-0.5 rounded-full transition-all duration-300 origin-center ${
                scrolled || disableSticky || open ? 'bg-[#011627]' : 'bg-white'
              } ${open ? 'w-6 -rotate-45 translate-y-0' : 'w-4 translate-y-2'}`}
            />
          </button>
        </div>
      </nav>

      {/* ── mobile nav overlay (starts below the nav bar) ── */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 z-40 bg-[#011627] flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo row */}
        {/* <div className="flex items-center px-6 pt-8 pb-4 border-b border-white/10">
          <Link href="/" onClick={close}>
            <img src="./images/logo.png" className="w-12 h-12" alt="Dr. Ibiso D Hart" />
          </Link>
        </div> */}

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-12 flex-1 overflow-y-auto">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} onClick={close}>
              <span className="block text-white/70 hover:text-white text-lg font-semibold py-4 border-b border-white/10 transition-colors duration-200">
                {l.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 py-8 shrink-0">
          <a href="http://lifematicswithdribisohart.com/" target="_blank" rel="noreferrer" onClick={close}>
            <button className="w-full bg-white text-[#011627] font-bold py-4 rounded-full text-base hover:bg-gray-100 transition-colors duration-200">
              Lifematics Blog
            </button>
          </a>
        </div>
      </div>

      {/* Backdrop to close on tap outside */}
      {open && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={close}
          aria-hidden
        />
      )}
    </>
  );
};

export default HeaderNav;
