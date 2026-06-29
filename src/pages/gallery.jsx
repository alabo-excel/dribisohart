import FrontLayout from '@/layout/FrontLayout';
import Link from 'next/link';
import React from 'react';
import { FaAmazon, FaArrowLeft, FaImages } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const GumroadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.52 17.518c-2.76 0-4.797-1.908-4.797-4.922 0-3.033 2.163-5.114 5.24-5.114 1.386 0 2.484.346 3.27.904l-.712 1.657c-.596-.404-1.29-.635-2.1-.635-1.811 0-3.042 1.213-3.042 3.15 0 1.906 1.154 3.1 2.953 3.1.77 0 1.386-.173 1.87-.48V13.8h-2.1v-1.734h4.028v4.37c-.904.694-2.194 1.082-3.61 1.082z" />
  </svg>
);

const SelarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.5 14.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5zm2-4h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5zm0-4h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5z" />
  </svg>
);

const gallery = () => {
  return (
    <FrontLayout disableSticky>
      <main className="min-h-screen bg-[#f8fbff] flex items-center justify-center px-6 py-24">
        {/* Background decorative blobs */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#CDE8FE]/50 blur-3xl" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#7EC8E3]/30 blur-3xl" />
          <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#CDE8FE]/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl w-full text-center">
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#011627] shadow-2xl mb-8 mx-auto">
            <FaImages className="text-4xl text-[#7EC8E3]" />
          </div>

          {/* Label */}
          {/* <div className="inline-flex items-center gap-2 bg-[#CDE8FE] text-[#011627] rounded-full px-4 py-1.5 text-sm font-bold tracking-widest uppercase mb-6">
            <HiSparkles className="text-[#011627]" />
            Gallery
          </div> */}

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-black text-[#011627] leading-tight mb-4">
            Coming <span className="text-[#7EC8E3]">Soon</span>
          </h1>

          

          {/* Decorative dots */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-3 h-3 rounded-full bg-[#011627]" />
            <span className="w-2 h-2 rounded-full bg-[#7EC8E3]" />
            <span className="w-2 h-2 rounded-full bg-[#CDE8FE]" />
          </div>

          {/* CTA */}
          <Link href="/">
            <button className="inline-flex items-center gap-2 bg-[#011627] hover:bg-[#012d4a] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-200 hover:scale-105">
              <FaArrowLeft /> Back to Home
            </button>
          </Link>
        </div>
      </main>
    </FrontLayout>
  );
};

export default gallery;
