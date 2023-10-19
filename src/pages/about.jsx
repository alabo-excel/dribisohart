import FrontLayout from '@/layout/FrontLayout';
import React from 'react';
import Link from 'next/link';
import Social from '@/components/Social';

const About = () => {
  return (
    <FrontLayout>
      <main className='lg:mx-32 mx-6'>

        <div className='lg:flex lg:my-40 my-32 lg:text-base text-sm justify-between'>
          <img className='lg:w-1/2 lg:h-[80vh] object-cover' src="./images/image.png" alt="" />
          <div className='lg:w-[45%] my-auto'>
            <h3 className='font-bold text-xl my-5'>Educational Qualifications</h3>
            <ul>
              <li>Bachelor of Science degree (BSc) in Secretarial Administration from Rivers State University, Nigeria</li>
              <li>Master of Science, (MSc) in Human Resources Management from Enugu State University of Technology, Enugu, Nigeria</li>
              <li>Executive Masters Certificate (EMC) in Human Resources Management at East Midlands School of Business & Management, UK</li>
              <li>Doctorate degree in Strategic Management and Leadership from The University of America, Curaçao.</li>
            </ul>
            <Link href="/about#professional">
              <button className='p-4 bg-[#011627] lg:text-base text-sm rounded-md text-white w-auto my-6'>View professional Certification</button>
            </Link>
          </div>
        </div>

        <div id='professional' className='lg:flex lg:text-base text-sm lg:py-40 py-8 justify-between'>
          <img className='lg:w-1/2 lg:order-last' src="./images/IMGL9509.jpg" alt="" />
          <div className='lg:w-[45%] lg:order-first'>
            <h3 className='font-bold text-xl my-8'>Professional Certifications</h3>
            <ul>
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
              <button className='p-4 bg-[#011627] lg:text-base text-sm rounded-md text-white w-auto my-6'>View Expertise</button>
            </Link>
          </div>
        </div>

        <div id='expertise' className='lg:flex lg:text-base text-sm lg:py-32 py-8 justify-between'>
          <img className='lg:w-1/2 object-cover  ' src="./images/IMGL9401.jpg" alt="" />
          <div className='lg:w-[45%] my-auto'>
            <h3 className='font-bold text-xl my-5'>Expertise</h3>
            <p>
              Dr Ibiso Hart is a passionate top-tier Business Development Strategist/Manager, currently contributing her quota as the General Manager in a leading conglomerate.

              <br /> <br />

              She possess a wealth of knowledge and skills that can benefit organizations,
              taking into consideration that, only the most capable and visionary leaders can navigate the complexities of this ever-evolving business environments.
              <br />
              Having developed expertise in a range of strategic management and leadership areas, which include but are not limited to:
              <br />
              <br />
              <b>Strategic Management:</b>
              <br />
              - Developing and implementing sustainable and effective business strategies in alignment with organizational goals.
              <br />

              - Conducting comprehensive market analysis to identify opportunities, anticipate challenges, and adapt strategies appropriately.
              <br />

              - Balancing short-term objectives with long-term vision of the organisation to ensure business continuity.
              <br />
              <br />
              <b>Leadership and Team Management:</b>
              <br />

              - Inspiring and motivating teams to perform at their best by providing clear direction and fostering a collaborative work environment.
              <br />

              - Building high-performing teams through effective talent acquisition, training, and development initiatives.
              <br />

              - Encouraging diversity, inclusion, and empowerment to drive innovation and productivity.
              <br />
              <br />

              <b>Operational Excellence:</b>
              <br />

              - Enhancing operational efficiency by implementing streamlined processes, performance metrics, and continuous improvement strategies.
              <br />

              - Expertise in managing large-scale projects, optimizing asset utilization, and implementing cost-effective measures.
              <br />

              - Ensuring strict adherence to safety protocols, industry regulations, and environmental sustainability practices.
              <br />
              <br />

              <b>Stakeholder Engagement:</b>
              <br />

              - Building strong relationships with clients, suppliers, regulatory bodies, and local communities.
              <br />

              - Identifying and addressing the evolving needs of stakeholders to enhance satisfaction and drive long-term partnerships.
              <br />

              - Proven track record in negotiating and managing contracts, joint ventures, and other strategic alliances.
              <br /><br />
              Dr Ibiso would love to connect with like-minded individuals, professionals, and organizations who are passionate about integrating the latest trends in strategic management and leadership styles.
              <br />

              Feel free to reach out to her, ask questions, and also share your own experiences and concerns.
              <br />

              Let's engage in meaningful conversations, expand our knowledge, and collectively strive for excellence in the realm of strategic thinking and leadership!
              <Social />
              <Link href="/about#coach">
                <button className='p-4 bg-[#011627] lg:text-base text-sm rounded-md text-white w-auto my-6'>Career and Life Coach</button>
              </Link>

              {/* <br />
              <br />

              Her favourite pastimes are cooking, hospitality, and photography */}
            </p>
          </div>
        </div>

        {/* <div className='lg:flex lg:text-base text-sm my-4 justify-between'>
          <img className='lg:w-1/2 h-[80vh] object-cover lg:order-last' src="./images/IMGL9467.jpg" alt="" />
          <div className='lg:w-[45%] lg:order-first'>
            <p>
              In the dynamic and fast-paced competitive business environ, organizations require a leader who possess a unique blend of strategic acumen, good leadership skill, and industry expertise, Dr Ibiso possess a track record of delivering exceptional results, also poised to lead organizations towards sustainable growth and success.
              <br /><br />
              Her favourite pastimes are cooking, hospitality, and photography
              <br /> <br />

              - "Success is not measured by how high you climb, but by how many people you bring along with you."
              <br /> <br />

              Dr Ibiso would love to connect with like-minded individuals, professionals, and organizations who are passionate about strategic management and leadership.
              <br />
              Feel free to reach out to her, ask questions, and share your own experiences.
              <br />
              Let's engage in meaningful conversations, expand our knowledge, and collectively strive for excellence in the realm of strategic thinking and leadership!
              <Social />
            </p>
            <Link href="/about#coach">
              <button className='p-4 bg-[#011627] lg:text-base text-sm rounded-md text-white w-auto my-6'>Life Coach</button>
            </Link>
          </div>
        </div> */}

        <div id='coach' className='lg:flex lg:text-base text-sm lg:py-40 py-8 justify-between'>
          <img className='lg:w-1/2 object-cover' src="./images/IMGL9497.jpg" alt="" />
          <div className='lg:w-[45%] my-auto'>
            <h3 className='font-bold text-xl mb-4'>Career and Life Coach</h3>
            <p>
              With over 20 years of expertise as a life coach, Dr Ibiso Darlington Hart has been committed to guiding individuals on their path to conquering complex life issues.
              <br />
              Together, you will unravel the depth of your potentials, enabling you to navigate life's most intricate challenges CONFIDENTLY. Whether it's career dissatisfaction, relationship struggles, personal development hurdles, widow-hood, addictions, abuse or navigating major life challenges, she is here to empower and support you every step of the way.

              <br />
              With advanced expertise in Career and Life Coaching, which include but  not limited to:
              <br /><br />

              <b>Personal Growth Blueprint:</b>
              <br />
              Discovering the power within you to navigate complex life issues in an exhilarating journey that begins with a personalized roadmap. Leveraging her extensive knowledge and experience.
              <br /><br />

              <b>Unpacking Limiting Beliefs:</b>
              <br />
              Often, the first step towards personal transformation involves addressing and overcoming limiting beliefs. She possesses an in-depth understanding of the subconscious mind and its influence on daily actions.
              <br /><br />

              <b>Navigating Career Challenges:</b>
              <br />
              Whether you seek a career change, desire to climb the corporate ladder, or need guidance on balancing work and personal life, Dr Ibiso will provide you with the tools and strategies necessary to thrive professionally.

              <br /><br />
              <b>Relationship Resilience:</b>
              <br />
              Complex relationship dynamics can often hinder our personal growth and happiness. As an experienced life coach, she specializes in fostering healthier relationships, whether it's within your family, romantic partnership, or social circles.
              <br /> <br />

              <b>Emotional Well-being and Life Transition of Loved Ones:</b>
              <br />
              Transition of loved ones can be both exhilarating and overwhelming. From major relocations, career shifts, or personal tragedies, she is here to provide emotional support, guidance, and practical tools to help you navigate these changes with resilience.
              <br />
              As an empathetic life coach, her mission is to empower individuals in tackling and overcoming complex life issues while unearthing their true potentials. She will join you to embark on a transformative journey that will enable you to scale through barriers, cultivate deeper self-awareness, and navigate life's intricate challenges with confidence and God’s grace.
            </p>
            <br />
            <p>Let's Connect If you are:</p>

            <ul>
              <li>Seeking life-changing guidance and support</li>
              <li>You want a career change and desire to climb the corporate ladder, or need guidance on balancing work and personal life</li>
              <li>You want to unravel the depth of your potential, enabling you to navigate life's most intricate challenges.</li>
            </ul>
            I would be honored to be your life and career coach.
            <br />
            Together, we can unlock your true potentials and create a life filled with purpose, joy, and success. <br />
            Reach out let's   embark on this transformative journey together.
            <br />
            Dr Ibiso Hart
            <br />
            <Social />
          </div>
        </div>
      </main>
    </FrontLayout>
  );
};

export default About;