import FrontLayout from '@/layout/FrontLayout';
import React from 'react';
import Link from 'next/link';
import Social from '@/components/Social';

const About = () => {
  return (
    <FrontLayout>
      <main className='lg:mx-20 mx-6'>

        <div className='lg:flex lg:my-40 my-32 lg:text-lg text-sm justify-between'>
          <img className='lg:w-1/2 lg:h-[80vh] object-cover object-top	' src="./images/about.jpeg" alt="" />
          <div className='lg:w-[45%] my-auto'>
            <h3 className='font-bold text-xl my-5'>Educational Qualifications</h3>
            <ul>
              <li>Bachelor of Science degree (BSc) in Secretarial Administration from Rivers State University, Nigeria</li>
              <li>Master of Science, (MSc) in Human Resources Management from Enugu State University of Technology, Enugu, Nigeria</li>
              <li>Executive Masters Certificate (EMC) in Human Resources Management at East Midlands School of Business & Management, UK</li>
              <li>Doctorate degree in Strategic Management and Leadership from The University of America, Curaçao.</li>
              <li> Advanced Diploma  Certificate in  Educational Management & Leadership -   London Business College</li>
            </ul>
            <Link href="/about#professional">
              <button className='p-4 bg-[#011627] lg:text-lg text-sm rounded-md text-white w-full my-6'>View professional Certification</button>
            </Link>
          </div>
        </div>

        <div id='professional' className='lg:flex lg:text-lg text-sm lg:py-40 py-8 justify-between'>
          <img className='lg:w-1/2 object-cover lg:order-last' src="./images/new-1.jpeg" alt="" />
          <div className='lg:w-[45%] lg:order-first my-auto'>
            <h3 className='font-bold text-xl my-8'>Professional Certifications</h3>
            <ul>
              <li>Professional Certified Coach (PCC)</li>
              <li>Certified Practitioner (CP)</li>
              <li>Senior Certified Professional Coach (SCPC)</li>

              <li>Chartered Finance Professional, (CFP), USA</li>
              <li>Fellow of the Chartered Business Institute, London. (FCBI, dip. MIS)</li>
              <li>Fellow Institute of Management Specialist, UK, (FIMS)</li>
              <li>Certified Chartered Manager (CMgr)</li>
              <li>Fellow, Chartered Institute of Finance & Control of Nigeria, (CIFCN)</li>
              <li>The Institute of Chartered Economists of Nigeria, (ICEN)</li>
              <li>Chartered Institute of Bankers of Nigeria (CIBN)</li>
              <li>Member - Nigerian Institute of Management (Chartered)</li>
              <li>Advanced Flight Dispatchers Certificate</li>
              {/* <p>- "Leadership is not about being in control, but about empowering others to take control."</p> */}
            </ul>
            <Link href="/about#expertise">
              <button className='p-4 bg-[#011627] lg:text-lg text-sm rounded-md text-white w-full my-6'>View Expertise</button>
            </Link>
          </div>
        </div>

        <div id='expertise' className='lg:flex lg:text-lg text-sm lg:py-32 py-8 justify-between'>
          <img className='lg:w-1/2 object-cover  ' src="./images/IMG-20231217-WA0030.jpg" alt="" />
          <div className='lg:w-[45%]  h-[150vh] pr-6 overflow-y-scroll'>
            <h3 className='font-bold text-xl my-5'>Expertise </h3>
            <p>
              <strong>Businesses Seeking Sustainable Growth</strong>
              <br />
              <br />
              Dr Hart provides strategic guidance and tailored solutions to propel your business forward:
              <br />
              <br />
            </p>

            <ul className='!list-disc list-inside	'>
              <li>Developing business ideas.</li>
              <li>Evaluating the feasibility and creating  scalable business plan and models for sustainable growth and profitability.</li>
              <li>Creating a comprehensive and compelling funding proposal</li>
              <li>Explore alternative financing options</li>
              <li>Personal Growth & Transformation for SMEs </li>
              <li>Navigates the challenges and risks of SMEs face</li>
              <li>Develops strategies for overcoming limited resources and access to funding </li>
              <li>Guides on assessing startup capital requirements </li>
            </ul>
            <p>
              <br />
              <strong>Funding Acquisition:</strong> Craft compelling proposals to secure the capital you need to succeed.
              <br /> <br />
              <strong>Operational Excellence:</strong> Optimize processes, implement automation, and build high-performing teams.
              <br />

              <br />
              <strong>Strategic Market Expansion:</strong> Identify new opportunities, penetrate new markets, and achieve sustainable competitive advantage.
              <br />
              <br />
              <strong className='uppercase'>For Individuals Ready for Personal Transformation</strong> <br />
              <br />
              Dr. Hart's transformative coaching is a beacon of inspiration, empowering individuals to craft a life of purpose, authenticity, unlock their potentials,  and achieve work-life harmony.
              <br /> <br />
              <strong>Results-Oriented Approach:</strong> Her focus on actionable strategies and measurable outcomes ensures tangible progress and lasting impact.

              <br /><br />
              Her Lifematics Lifestyle Framework and book series, born from her extensive experience across diverse industries, provides a practical road-map for cultivating a transformative "antifragile mindset." This approach embraces change and uncertainty as opportunities for business growth and personal evolution.

              <br />
              Are you ready to unlock your full potential, whether in business development or life transformation, contact Dr  Hart today and embark on a journey of extraordinary business and personal growth.

              <br />
              <br />
              Let’s connect!
              <br />
              <br />
              <Social />
              <Link href="/about#coach">
                <button className='p-4 bg-[#011627] lg:text-lg text-sm rounded-md text-white w-full my-6'>Career and Life Coach</button>
              </Link>

            </p>
          </div>
        </div>



        <div id='coach' className='lg:flex lg:text-lg text-sm lg:py-40 py-8 justify-between'>
          <img className='lg:w-1/2 object-cover' src="./images/IMGL9479.jpg" alt="" />
          <div className='lg:w-[45%]  h-[150vh] pr-6 overflow-y-scroll my-auto'>
            <h3 className='font-bold text-xl mb-4'>Career and Life Coach</h3>

            <p>
              <b>For Individuals Ready for Personal Transformation</b>
              <br /> <br />
              Dr. Hart's transformative coaching is a beacon of inspiration, empowering individuals to craft a life of purpose, authenticity, unlock their potentials,  and achieve work-life harmony.
              Results-Oriented Approach: Her focus on actionable strategies and measurable outcomes ensures tangible progress and lasting impact.
              <br /> <br />
              <strong>              Experience Dr Hart’s difference:                </strong>
              <br /> <br />
              <strong>Compassionate & Experienced Coach:</strong> A certified life coach providing a supportive and non-judgmental space for you to explore, grow, and transform.
              <br /> <br />

              <strong>Proven Coaching Techniques:</strong> She utilizes evidence-based coaching methodologies tailored to your unique needs and goals.
              <br /> <br />

              <strong>Actionable Strategies and Tools:</strong> Gain practical tools and techniques to overcome challenges, build resilience, and create lasting change.
              <br /> <br />

              <strong>Empowerment and Accountability:</strong> She empowers you to take ownership of your life and provide ongoing support and accountability to keep you motivated and on track.
              <br /> <br />

              Are you ready to unlock your full potential and design a life you love? Contact Dr Ibiso Hart today and embark on your journey of personal transformation.
              <br /> <br />

              <strong>Compassionate Guidance</strong>
              <br /> <br />
              Dr. Hart creates a safe and supportive space for exploration, growth, and transformation. Her vision extends beyond individual empowerment. She has built a global community of Lifematics Lifestyle practitioners, mentors, and mentees, creating a supportive ecosystem for personal growth and transformation.
            </p>
            <br />
            <p>Let's Connect If you are:</p>

            <ul className='!list-disc list-inside	'>
              <li>Seeking life-changing guidance and support</li>
              <li>You want a career change and desire to climb the corporate ladder, or need guidance on balancing work and personal life</li>
              <li>You want to unravel the depth of your potential, enabling you to navigate life's most intricate challenges.</li>
            </ul>
            <p>I would be honored to be your life and career coach.
              <br />
              Together, we can unlock your true potentials and create a life filled with purpose, joy, and success. <br />
              Reach out let's   embark on this transformative journey together.
              <br />
              <br />
              Dr Ibiso Hart
              <br /> <br /></p>
            <Social />
          </div>
        </div>
      </main>
    </FrontLayout>
  );
};

export default About;