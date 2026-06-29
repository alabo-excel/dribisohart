import React, { Fragment, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import FrontLayout from '@/layout/FrontLayout';
import Link from 'next/link';
import { message } from 'antd';
import Slider from '@/components/Slider';
import { VisionMissionSection } from '@/components/VisionMission';
import {
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  MdPerson,
  MdEmail,
  MdSubject,
  MdMessage,
  MdSend,
} from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi';
import { BiBriefcase, BiAward, BiGroup, BiTime } from 'react-icons/bi';

const stats = [
  { icon: <BiTime className="text-3xl" />, value: '20+', label: 'Years of Experience' },
  { icon: <BiGroup className="text-3xl" />, value: '500+', label: 'Lives Transformed' },
  { icon: <BiAward className="text-3xl" />, value: 'PhD', label: 'Strategic Management' },
  { icon: <BiBriefcase className="text-3xl" />, value: '6+', label: 'Industries Served' },
];

const credentials = [
  'Certified Professional Coach (CPC)',
  'Senior Certified Professional Coach (SCPC)',
  'PhD in Strategic Management & Leadership',
  'Over two decades of multi-industry expertise',
];

const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [messages, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    setLoading(true);
    fetch('https://formsubmit.co/ajax/13f31a938690a6f51223ac7d97410249', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, message: messages, subject, email }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success === 'true') {
          message.open({ type: 'success', content: 'Message sent successfully!' });
          setName(''); setEmail(''); setSubject(''); setMessage('');
        }
        setLoading(false);
      })
      .catch(() => {
        message.open({ type: 'error', content: 'An error occurred, please try again.' });
        setLoading(false);
      });
  };

  return (
    <FrontLayout>
      {contextHolder}
      <main>

        {/* ── HERO ── */}
        <div className="mt-18">
          <Carousel>
            <div className="relative">
              <img
                src="./images/IMGL9381.jpg"
                className="h-[100vh] lg:w-[100%] mx-auto object-cover object-top"
                alt="Dr. Ibiso Darlington Hart"
              />
              {/* gradient overlay — richer than flat opacity */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#011627]/85 via-[#011627]/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 lg:bottom-10 lg:left-16 z-20 text-white px-6 pb-10 lg:pb-0">
                {/* badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 text-sm">
                  {/* <HiSparkles className="text-yellow-300" /> */}
                  <span>Certified Lifestyle Coach</span>
                </div>

                <div className="lg:w-[45%]">
                  <h1 className="lg:text-6xl text-4xl font-black leading-tight tracking-tight">
                    Dr. Ibiso <br />
                    <span className="text-[#7EC8E3]">Darlington Hart</span>
                  </h1>
                  <p className="mt-4 text-white/80 text-base lg:text-lg font-medium">
                    Your Partner in Personal Evolution
                  </p>
                  <p className="mt-3 text-white/70 text-sm lg:text-base leading-relaxed max-w-md">
                    I am a natural-born Coach and Mentor who inspires and motivates those around me.
                    Through my actions and words, I instil a sense of purpose and direction,
                    empowering individuals to strive for their best.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <a href="https://lifematicswithdribisohart.com/" target="_blank" rel="noreferrer">
                      <button className="inline-flex items-center gap-2 bg-[#7EC8E3] hover:bg-white text-[#011627] font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-200 hover:scale-105">
                        Book a Session <FaArrowRight />
                      </button>
                    </a>
                    <Link href="/about">
                      <button className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 hover:bg-white/10">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        {/* ── STATS BAND ── */}
        {/* <div className="bg-[#011627] text-white py-10 px-6 lg:px-20">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-[#7EC8E3]">
                  {s.icon}
                </div>
                <p className="text-3xl font-black">{s.value}</p>
                <p className="text-white/60 text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* ── CTA BANNER ── */}
        <div className="px-6 lg:px-20 py-10 mt-20">
          <div className="relative rounded-3xl overflow-hidden bg-[#011627] py-14 px-8 lg:px-16">
            {/* mesh gradient blobs */}
            <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-[#CDE8FE]/40 blur-3xl" />
              <div className="absolute bottom-[-10%] right-[10%] w-80 h-80 rounded-full bg-[#a8d8f0]/30 blur-3xl" />
              <div className="absolute top-[20%] right-[30%] w-64 h-64 rounded-full bg-[#CDE8FE]/20 blur-3xl" />
            </div>

            <div className="relative max-w-xl">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Ready to Embrace Your Potential and Rewrite Your Story?
              </h2>
              <p className="text-white/60 text-base lg:text-lg mb-8">
                Crush your goals, overcome challenges, and take your life to the next level.
                Your transformation starts with a single step!
              </p>
              <a href="https://lifematicswithdribisohart.com/" target="_blank" rel="noreferrer">
                <button className="bg-white hover:bg-gray-100 text-[#0d0d0d] font-semibold text-base py-4 px-8 rounded-full shadow-lg transition-all duration-200 hover:scale-105">
                  Schedule Your Discovery Session
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ── ABOUT ── */}
        <div className="bg-white lg:flex justify-between items-center lg:py-24 py-12 lg:px-20 px-6 gap-12">
          <div className="lg:w-[45%] mb-8 lg:mb-0 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#CDE8FE] -z-10" />
            <img
              src="./images/IMGL9466.jpg"
              className="w-full object-cover rounded-3xl shadow-2xl"
              alt="Dr. Ibiso Hart"
            />
            {/* floating credential card */}
            <div className="absolute -bottom-6 -right-4 bg-[#011627] text-white rounded-2xl px-5 py-4 shadow-2xl max-w-[200px]">
              <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Certified</p>
              <p className="font-bold text-sm leading-snug">Professional Life Coach</p>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400 text-xs" />)}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block bg-[#CDE8FE] text-[#011627] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
              About Me
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#011627] mb-4 leading-tight">
              Empowering Lives Through<br /> Purposeful Coaching
            </h2>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
              Dr Ibiso Hart is a visionary Certified Lifestyle Coach. Driven by her own profound
              journey of self-discovery and transformation, Dr. Hart empowers businesses to thrive
              and individuals to unlock their full potentials and navigate life's challenges with
              resilience and adaptability.
            </p>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
              With a PhD in Strategic Management and Leadership, and a diverse background spanning
              teaching, banking, oil & gas, aviation, and catering, she brings a unique blend of
              expertise to every coaching relationship.
            </p>

            <ul className="space-y-3 mb-8">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-gray-700">
                  <FaCheckCircle className="text-[#011627] mt-0.5 shrink-0 text-lg" />
                  {c}
                </li>
              ))}
            </ul>

            <Link href="/about">
              <button className="inline-flex items-center gap-2 bg-[#011627] hover:bg-[#012d4a] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-200 hover:scale-105">
                View Educational Qualifications <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* ── VISION & MISSION ── */}
        <div className="lg:px-20 px-6 mb-20">
          <VisionMissionSection />
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="bg-[#CDE8FE] py-20 px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-[#011627] rounded-full px-4 py-1.5 text-sm mb-4">
            {/* <FaStar className="text-yellow-500" /> */}
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#011627] mb-3">What People Say</h2>
          <p style={{ textAlign: 'center' }} className="text-gray-500 mb-16 max-w-md mx-auto">
            Real stories from the lives Dr. Ibiso has touched and transformed.
          </p>
          <div className="lg:w-[60%] mx-auto">
            <Slider />
          </div>
        </div>

        {/* ── CONTACT ── */}
        <div id="contact" className="bg-[#f8fbff] py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#CDE8FE] text-[#011627] rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                <MdMessage /> Get In Touch
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#011627] mb-3">Let's Connect</h2>
              <p className="text-gray-500 max-w-md mx-auto text-center text-sm lg:text-base">
                I want to hear from you. Please feel free to reach out using any of the channels below.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 space-y-5">
              {/* Name */}
              <div className="relative">
                <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#011627]/30 focus:border-[#011627] transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#011627]/30 focus:border-[#011627] transition-all text-sm"
                />
              </div>

              {/* Subject */}
              <div className="relative">
                <MdSubject className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#011627]/30 focus:border-[#011627] transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MdMessage className="absolute left-4 top-4 text-xl text-gray-400" />
                <textarea
                  value={messages}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#011627]/30 focus:border-[#011627] transition-all text-sm resize-none"
                />
              </div>

              <button
                onClick={sendMessage}
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#011627] hover:bg-[#012d4a] disabled:opacity-60 text-white font-bold text-base py-4 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.01]"
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>Send Message <MdSend className="text-lg" /></>
                )}
              </button>
            </div>
          </div>
        </div>

      </main>
    </FrontLayout>
  );
};

export default Home;
