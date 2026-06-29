import FrontLayout from '@/layout/FrontLayout';
import React from 'react';

import Social from '@/components/Social';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const educationalQualifications = [
  'Bachelor of Science degree (BSc) in Secretarial Administration from Rivers State University, Nigeria',
  'Master of Science, (MSc) in Human Resources Management from Enugu State University of Technology, Enugu, Nigeria',
  'Executive Masters Certificate (EMC) in Human Resources Management at East Midlands School of Business & Management, UK',
  'Doctorate degree in Strategic Management and Leadership from The University of America, Curaçao.',
  'Advanced Diploma Certificate in Educational Management & Leadership — London Business College',
];

const professionalCertifications = [
  'Certified Practitioner (CP)',
  'Senior Certified Professional Coach (SCPC)',
  'Chartered Finance Professional, (CFP), USA',
  'Fellow of the Chartered Business Institute, London. (FCBI, dip. MIS)',
  'Fellow Institute of Management Specialist, UK, (FIMS)',
  'Certified Chartered Manager (CMgr)',
  'Fellow, Chartered Institute of Finance & Control of Nigeria, (CIFCN)',
  'The Institute of Chartered Economists of Nigeria, (ICEN)',
  'Chartered Institute of Bankers of Nigeria (CIBN)',
  'Member — Nigerian Institute of Management (Chartered)',
  'Advanced Flight Dispatchers Certificate',
];

const businessServices = [
  'Developing business ideas.',
  'Evaluating the feasibility and creating scalable business plans and models for sustainable growth and profitability.',
  'Creating a comprehensive and compelling funding proposal',
  'Explore alternative financing options',
  'Personal Growth & Transformation for SMEs',
  'Navigates the challenges and risks SMEs face',
  'Develops strategies for overcoming limited resources and access to funding',
  'Guides on assessing startup capital requirements',
];

const expertiseHighlights = [
  {
    title: 'Funding Acquisition',
    body: 'Craft compelling proposals to secure the capital you need to succeed.',
  },
  {
    title: 'Operational Excellence',
    body: 'Optimize processes, implement automation, and build high-performing teams.',
  },
  {
    title: 'Strategic Market Expansion',
    body: 'Identify new opportunities, penetrate new markets, and achieve sustainable competitive advantage.',
  },
];

const coachDifferences = [
  {
    title: 'Compassionate & Experienced Coach',
    body: 'A certified life coach providing a supportive and non-judgmental space for you to explore, grow, and transform.',
  },
  {
    title: 'Proven Coaching Techniques',
    body: 'She utilizes evidence-based coaching methodologies tailored to your unique needs and goals.',
  },
  {
    title: 'Actionable Strategies and Tools',
    body: 'Gain practical tools and techniques to overcome challenges, build resilience, and create lasting change.',
  },
  {
    title: 'Empowerment and Accountability',
    body: 'She empowers you to take ownership of your life and provide ongoing support and accountability to keep you motivated and on track.',
  },
];

const coachConnectPoints = [
  'Seeking life-changing guidance and support',
  'You want a career change and desire to climb the corporate ladder, or need guidance on balancing work and personal life',
  "You want to unravel the depth of your potential, enabling you to navigate life's most intricate challenges.",
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const About = () => {
  return (
    <FrontLayout disableSticky>
      <main className="bg-white">

        {/* ── Educational Qualifications ── */}
        <section className="pt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-stretch">

              <div className="relative mb-14 lg:mb-0 h-full">
                <div className="absolute inset-0 bg-[#CDE8FE]/40 rounded-3xl rotate-2 scale-95" />
                <img
                  src="./images/about.jpeg"
                  alt="Dr. Ibiso Hart"
                  className="relative w-full h-full object-cover object-top rounded-2xl shadow-2xl"
                />
              </div>

              <div>
                <span className="inline-block bg-[#CDE8FE] text-[#011627] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                  Academic Background
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-[#011627] leading-tight mb-6">
                  Educational Qualifications
                </h2>
                <ul className="space-y-4 mb-10">
                  {educationalQualifications.map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-gray-700">
                      <FaCheckCircle className="text-[#011627] mt-0.5 shrink-0 text-lg" />
                      {q}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo('professional')} className="inline-flex items-center gap-2 bg-[#011627] hover:bg-[#012d4a] text-white font-semibold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 hover:scale-105">
                  View Professional Certifications <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Professional Certifications ── */}
        <section id="professional" className="bg-[#011627] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center">

              <div className="order-2 lg:order-1">
                <span className="inline-block bg-[#7EC8E3] text-[#011627] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                  Credentials
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-8">
                  Professional Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {professionalCertifications.map((cert, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-white/5 rounded-xl px-4 py-3">
                      <span className="text-[#7EC8E3] font-black text-xs mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-white/80 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => scrollTo('expertise')} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#011627] font-semibold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 hover:scale-105">
                  View Expertise <FaArrowRight />
                </button>
              </div>

              <div className="order-1 lg:order-2 relative mb-14 lg:mb-0">
                <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-2 scale-95" />
                <img
                  src="./images/new-1.jpeg"
                  alt="Dr. Ibiso Hart Professional"
                  className="relative w-full object-cover rounded-2xl shadow-2xl max-h-[80vh]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Expertise ── */}
        <section id="expertise" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">

              <div className="relative mb-14 lg:mb-0 lg:sticky lg:top-24">
                <div className="absolute inset-0 bg-[#CDE8FE]/40 rounded-3xl rotate-1 scale-95" />
                <img
                  src="./images/IMG-20231217-WA0030.jpg"
                  alt="Dr. Ibiso Hart Expertise"
                  className="relative w-full object-cover rounded-2xl shadow-2xl max-h-[80vh]"
                />
              </div>

              <div>
                <span className="inline-block bg-[#CDE8FE] text-[#011627] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                  What She Does
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-[#011627] leading-tight mb-8">
                  Expertise
                </h2>

                <h3 className="font-bold text-lg text-[#011627] mb-2">Businesses Seeking Sustainable Growth</h3>
                <p className="text-gray-600 text-sm lg:text-base mb-5">
                  Dr Hart provides strategic guidance and tailored solutions to propel your business forward:
                </p>
                <ul className="space-y-3 mb-8">
                  {businessServices.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-gray-700">
                      <FaCheckCircle className="text-[#011627] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 mb-10">
                  {expertiseHighlights.map((h, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-5">
                      <p className="text-sm lg:text-base text-gray-700">
                        <strong className="text-[#011627]">{h.title}:</strong> {h.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-8 mb-6">
                  <h3 className="font-black text-base uppercase text-[#011627] mb-3">
                    For Individuals Ready for Personal Transformation
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base mb-4">
                    Dr. Hart's transformative coaching is a beacon of inspiration, empowering individuals to craft a life of purpose, authenticity, unlock their potentials, and achieve work-life harmony.
                  </p>
                  <p className="text-gray-600 text-sm lg:text-base mb-4">
                    <strong className="text-[#011627]">Results-Oriented Approach:</strong> Her focus on actionable strategies and measurable outcomes ensures tangible progress and lasting impact.
                  </p>
                  <p className="text-gray-600 text-sm lg:text-base mb-4">
                    Her Lifematics Lifestyle Framework and book series, born from her extensive experience across diverse industries, provides a practical road-map for cultivating a transformative "antifragile mindset." This approach embraces change and uncertainty as opportunities for business growth and personal evolution.
                  </p>
                  <p className="text-gray-600 text-sm lg:text-base mb-6">
                    Are you ready to unlock your full potential, whether in business development or life transformation, contact Dr Hart today and embark on a journey of extraordinary business and personal growth.
                  </p>
                  <p className="font-semibold text-[#011627] mb-4">Let's connect!</p>
                  <Social />
                </div>

                <button onClick={() => scrollTo('coach')} className="inline-flex items-center gap-2 bg-[#011627] hover:bg-[#012d4a] text-white font-semibold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 hover:scale-105 mt-4">
                  Career and Life Coach <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Career and Life Coach ── */}
        <section id="coach" className="bg-[#011627] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-start">

              <div className="order-2 lg:order-1">
                <span className="inline-block bg-[#7EC8E3] text-[#011627] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                  Coaching
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
                  Career and Life Coach
                </h2>

                <h3 className="font-bold text-[#7EC8E3] text-base mb-3">
                  For Individuals Ready for Personal Transformation
                </h3>
                <p className="text-white/70 text-sm lg:text-base mb-8">
                  Dr. Hart's transformative coaching is a beacon of inspiration, empowering individuals to craft a life of purpose, authenticity, unlock their potentials, and achieve work-life harmony. Her focus on actionable strategies and measurable outcomes ensures tangible progress and lasting impact.
                </p>

                <h3 className="font-bold text-white text-base mb-4">Experience Dr Hart's Difference</h3>
                <div className="space-y-3 mb-8">
                  {coachDifferences.map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-2xl p-5">
                      <p className="font-semibold text-[#7EC8E3] text-sm mb-1">{item.title}</p>
                      <p className="text-white/70 text-sm">{item.body}</p>
                    </div>
                  ))}
                </div>

                <p className="text-white/70 text-sm lg:text-base mb-8">
                  Are you ready to unlock your full potential and design a life you love? Contact Dr Ibiso Hart today and embark on your journey of personal transformation.
                </p>

                <h3 className="font-bold text-white text-base mb-3">Compassionate Guidance</h3>
                <p className="text-white/70 text-sm lg:text-base mb-8">
                  Dr. Hart creates a safe and supportive space for exploration, growth, and transformation. Her vision extends beyond individual empowerment. She has built a global community of Lifematics Lifestyle practitioners, mentors, and mentees, creating a supportive ecosystem for personal growth and transformation.
                </p>

                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-white font-semibold mb-4">Let's Connect If you are:</p>
                  <ul className="space-y-3 mb-6">
                    {coachConnectPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                        <FaCheckCircle className="text-[#7EC8E3] mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/70 text-sm lg:text-base mb-4">
                    I would be honored to be your life and career coach. Together, we can unlock your true potentials and create a life filled with purpose, joy, and success. Reach out — let's embark on this transformative journey together.
                  </p>
                  <p className="font-bold text-white mb-6">Dr Ibiso Hart</p>
                  <Social />
                </div>
              </div>

              <div className="order-1 lg:order-2 relative mb-14 lg:mb-0 lg:sticky lg:top-24">
                <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-2 scale-95" />
                <img
                  src="./images/IMGL9479.jpg"
                  alt="Dr. Ibiso Hart Life Coach"
                  className="relative w-full object-cover rounded-2xl shadow-2xl max-h-[90vh]"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
    </FrontLayout>
  );
};

export default About;
