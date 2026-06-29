import FrontLayout from '@/layout/FrontLayout';
import React, { useEffect, useRef, useState } from 'react';
import { FaAmazon } from 'react-icons/fa';

const RevealSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const GumroadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.52 17.518c-2.76 0-4.797-1.908-4.797-4.922 0-3.033 2.163-5.114 5.24-5.114 1.386 0 2.484.346 3.27.904l-.712 1.657c-.596-.404-1.29-.635-2.1-.635-1.811 0-3.042 1.213-3.042 3.15 0 1.906 1.154 3.1 2.953 3.1.77 0 1.386-.173 1.87-.48V13.8h-2.1v-1.734h4.028v4.37c-.904.694-2.194 1.082-3.61 1.082z" />
  </svg>
);

const SelarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.5 14.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5zm2-4h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5zm0-4h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5z" />
  </svg>
);

const coreValues = [
  { label: 'Holistic Approach', bg: 'bg-[#011627]/8  text-[#011627]' },
  { label: 'Empowerment', bg: 'bg-[#7EC8E3]/20 text-[#0a6e85]' },
  { label: 'Authenticity', bg: 'bg-amber-100    text-amber-800' },
  { label: 'Interdisciplinary Wisdom', bg: 'bg-violet-100  text-violet-800' },
  { label: 'Transformation', bg: 'bg-emerald-100  text-emerald-800' },
];

const books = () => {
  return (
    <FrontLayout disableSticky>
      <div className="min-h-screen bg-white">
        {/* <HeaderNav disableSticky /> */}

        {/* ── Hero / Book Feature ── */}
        <RevealSection>
        <section className="pt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

              {/* Book cover */}
              <div className="relative mb-14 lg:mb-0">
                <div className="absolute inset-0 bg-[#011627]/6 rounded-3xl -rotate-2 scale-95" />
                <img
                  src="/images/book-cover.jpeg"
                  alt="Lifematics Lifestyle Book"
                  className="relative w-full max-w-sm mx-auto lg:max-w-full object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div>
                <span className="inline-block text-[#7EC8E3] text-xs font-bold tracking-widest uppercase mb-5 border border-[#7EC8E3]/50 rounded-full px-3 py-1">
                  New Release
                </span>

                <h1 className="text-3xl lg:text-[2.75rem] font-black text-[#011627] leading-tight mb-5">
                  Lifematics Lifestyle<br />
                  <span>Framework &amp; Book Series</span>
                </h1>

                <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-7">
                  A revolutionary framework for holistic living by renowned business development
                  expert and life coach, <strong className="text-[#011627]">Dr. Ibiso Darlington Hart</strong>.
                  Drawing upon scientific research, timeless wisdom, and her transformative journey,
                  Dr. Hart has crafted a comprehensive approach to well-being that addresses the
                  interconnectedness of mind, body, and spirit.
                </p>

                {/* Core value chips */}
                <div className="flex flex-wrap gap-2 mb-9">
                  {coreValues.map((v) => (
                    <span
                      key={v.label}
                      className={`text-xs rounded-full px-3 py-1.5 font-medium ${v.bg}`}
                    >
                      {v.label}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href="https://www.amazon.com/dp/B0DGDKZYM2/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nNrdGwutXNYJptEDh3Ab4Q.3HjdSw5XuKNiEaV5UPwGsGWkfcIHH5mKPieYR_6eeXI&dib_tag=se&keywords=lifematics+lifestyle&qid=1725787584&sr=8-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-[#011627] text-white py-3.5 px-4 rounded-full font-semibold text-sm hover:bg-[#012d4a] transition-colors duration-200">
                      <FaAmazon size={15} />
                      Amazon
                    </button>
                  </a>
                  <a
                    href="https://dribisohart.gumroad.com/l/lifematics-lifestyle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-[#ff90e8] text-[#1a1a1a] py-3.5 px-4 rounded-full font-semibold text-sm hover:bg-[#ff77e0] transition-colors duration-200">
                      <GumroadIcon />
                      Gumroad
                    </button>
                  </a>
                  <a
                    href="https://selar.com/n32sz1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-[#6c47ff] text-white py-3.5 px-4 rounded-full font-semibold text-sm hover:bg-[#5a38e0] transition-colors duration-200">
                      <SelarIcon />
                      Selar
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </RevealSection>

        {/* ── About the Book (dark section) ── */}
        <RevealSection>
        <section className="bg-[#011627] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-10">
              About the Book
            </p>

            <div className="lg:grid lg:grid-cols-3 lg:gap-16">
              {/* Quote + description */}
              <div className="lg:col-span-2 mb-12 lg:mb-0">
                <blockquote className="text-white text-xl lg:text-3xl font-black leading-snug mb-8">
                  "More than just a lifestyle book series — a framework dedicated to empowering
                  a global community to embrace conscious living."
                </blockquote>
                <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-8">
                  Lifematics Lifestyle goes beyond traditional self-help, offering practical guidance
                  on cultivating meaningful relationships, unleashing your creativity, discovering your
                  true purpose, and navigating life's challenges with resilience. Join Dr. Hart on this
                  transformative journey — unlock your potential through workshops, coaching programs,
                  and online resources.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href="https://www.amazon.com/dp/B0DGDKZYM2/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nNrdGwutXNYJptEDh3Ab4Q.3HjdSw5XuKNiEaV5UPwGsGWkfcIHH5mKPieYR_6eeXI&dib_tag=se&keywords=lifematics+lifestyle&qid=1725787584&sr=8-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-white text-[#011627] py-3.5 px-4 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors duration-200">
                      <FaAmazon size={15} />
                      Amazon
                    </button>
                  </a>
                  <a
                    href="https://dribisohart.gumroad.com/l/lifematics-lifestyle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-[#ff90e8] text-[#1a1a1a] py-3.5 px-4 rounded-full font-semibold text-sm hover:bg-[#ff77e0] transition-colors duration-200">
                      <GumroadIcon />
                      Gumroad
                    </button>
                  </a>
                  <a
                    href="https://selar.com/n32sz1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-[#6c47ff] text-white py-3.5 px-4 rounded-full font-semibold text-sm hover:bg-[#5a38e0] transition-colors duration-200">
                      <SelarIcon />
                      Selar
                    </button>
                  </a>
                </div>


              </div>

              {/* Numbered values */}
              <div className="flex flex-col justify-center gap-5 border-t border-white/10 pt-10 lg:border-t-0 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-16">
                {coreValues.map((v, i) => (
                  <div key={v.label} className="flex items-center gap-4">
                    <span className="text-[#7EC8E3] font-black text-sm w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white/65 text-sm">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </RevealSection>
      </div>
    </FrontLayout>
  );
};

export default books;
