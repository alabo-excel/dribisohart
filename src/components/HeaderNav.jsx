import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Expertise', href: '/about#expertise' },
  { label: 'Books', href: '/books' },
  { label: 'Media', href: '/gallery' },
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

  const openNav = () => {
    document.getElementById('mySidenav').style.width = '100%';
    setOpen(true);
  };
  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0%';
    setOpen(false);
  };

  return (
    <>
      {/* ── main navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || disableSticky
            ? 'bg-white border-b border-gray-100 shadow-sm'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-0 h-16 flex items-center justify-between relative">

          {/* Logo */}
          <Link href="/">
            <img src="./images/logo.png" className="w-11 h-11" alt="Dr. Ibiso D Hart" />
          </Link>

          {/* Center nav — absolutely centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href}>
                <span
                  className={`text-sm transition-colors duration-200 cursor-pointer ${scrolled || disableSticky
                      ? 'text-gray-500 hover:text-[#011627]'
                      : 'text-white/80 hover:text-white'
                    }`}
                >
                  {l.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right — CTA button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="http://lifematicswithdribisohart.com/" target="_blank" rel="noreferrer">
              <button
                className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${scrolled || disableSticky
                    ? 'bg-[#011627] text-white hover:bg-[#012d4a]'
                    : 'bg-white text-[#011627] hover:bg-white/90'
                  }`}
              >
                Lifematics Blog
              </button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={openNav}
            className={`lg:hidden flex flex-col gap-1.5 cursor-pointer ${scrolled ? '' : ''}`}
            aria-label="Open menu"
          >
            <span className={`block w-6 h-0.5 transition-colors duration-300 ${scrolled || disableSticky ? 'bg-[#011627]' : 'bg-white'}`} />
            <span className={`block w-6 h-0.5 transition-colors duration-300 ${scrolled || disableSticky ? 'bg-[#011627]' : 'bg-white'}`} />
            <span className={`block w-4 h-0.5 transition-colors duration-300 ${scrolled || disableSticky ? 'bg-[#011627]' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* ── mobile side nav ── */}
      <div id="mySidenav" className="sidenav">
        <div className="w-[90%] mx-auto">
          <p onClick={closeNav} className="float-right text-4xl cursor-pointer">&times;</p>
          <div className="pt-20" />
          <Link onClick={closeNav} href="/"><p className="my-5">Home</p></Link>
          <Link onClick={closeNav} href="/about"><p className="my-5">About</p></Link>
          <Link onClick={closeNav} href="/about#expertise"><p className="my-5">Expertise</p></Link>
          <Link onClick={closeNav} href="/books"><p className="my-5">Books</p></Link>
          <Link onClick={closeNav} href="/gallery"><p className="my-5">Media</p></Link>
          <Link onClick={closeNav} href="/#contact"><p className="my-5">Contact</p></Link>
          <a href="http://lifematicswithdribisohart.com/" target="_blank" rel="noreferrer">
            <button onClick={closeNav} className="bg-white my-5 rounded-full w-full p-4 text-[#011627]">
              Lifematics Blog
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
