import React, { Fragment, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import FrontLayout from '@/layout/FrontLayout';
import Link from 'next/link';


export default function Home() {

  return (
    <FrontLayout>
      <main>
        <div className='relative'>
          <Carousel autoplay>
            <div>
              <img src="./images/IMGL9381.jpg" className='h-[100vh] w-full object-cover' alt="" />
            </div>
            <div>
              <img src="./images/img2.png" className='h-[100vh] w-full object-cover' alt="" />
            </div>
            <div>
              <img src="./images/img1.png" className='h-[100vh] w-full object-cover' alt="" />
            </div>
          </Carousel>
          <div className='absolute top-0  opacity-50 w-full h-full bg-[#011627]'></div>
          <div className='absolute top-60 lg:left-32  left-5 right-5 x-10 text-white'>
            <div className="lg:w-[40%] lg:order-first order-last lg:my-auto my-10">
              <h1 className="lg:text-5xl text-3xl font-black leading-tight">Dr. Ibiso <br /> Darlington Hart</h1>
              <p className="my-3 lg:text-base text-sm">(ICEN, FCIFCN, FIMS, CMGR, FCBI, CFP)</p>
              <p className="my-5 lg:text-base text-sm">I am a natural-born leader who inspires and motivates those around me. Through her actions and words, I instil a sense of purpose and direction, empowering individuals to strive for their best.</p>
            </div>
          </div>
        </div>
        {/* <div className="lg:flex mt-4 justify-between lg:h-[90vh] lg:px-32 px-6">
          <div className="lg:w-1/2 lg:order-last order-first">
            <img src="./images/hero.png" alt="Hero img" />
          </div>
          <div className="lg:w-[40%] lg:order-first order-last lg:my-auto my-10">
            <h1 className="lg:text-5xl text-3xl font-black leading-tight">Dr. Ibiso <br /> Darlington Hart</h1>
            <p className="my-3 lg:text-base text-sm">(ICEN, FCIFCN, FIMS, CMGR, FCBI, CFP)</p>
            <p className="my-5 lg:text-base text-sm">I am a natural-born leader who inspires and motivates those around me. Through her actions and words, I instil a sense of purpose and direction, empowering individuals to strive for their best.</p>
          </div>
        </div> */}

        <div className="lg:flex bg-[#FBFBFB] justify-between lg:py-20 py-10 lg:px-32 px-6">
          <div className="lg:w-[45%]">
            <img src="./images/IMGL9467.jpg" className="lg:h-[85vh] h-[60vh] w-full object-cover rounded-2xl" alt="" />
          </div>
          <div className="lg:w-1/2 my-auto">
            <h1 className="lg:text-3xl text-xl font-bold my-4">About</h1>
            <p className="mt-4 lg:text-base text-sm">
              Dr Ibiso Darlington Hart (CFP-USA, FCBI-dip.MIS, FIMS-UK, Cmgr, FCIFCN, ICEN, CIBN) is a phenomenal Business Development Strategist, Leadership Professional and a Life Coach spanning over two decades of experience, with a PhD in Strategic Management and Leadership and having gained extensive experience in various sectors ranging from teaching/coaching to 14 years of banking career, oil and gas servicing and Aviation, (private jet charter services).
              <br /><br />
              In her diverse professional journey, Dr Ibiso has consistently delivered exceptional results, driving operational excellence, strategic growth, and fostering a culture of innovation in organisations.
            </p>
            <Link href="/about">
              <button className="p-4 bg-[#011627] lg:text-base text-sm rounded-md text-white lg:w-44 w-full my-6">Expertise</button>
            </Link>
          </div>
        </div>

        <div className='lg:w-1/2 mx-auto my-20 text-center'>
          <div className='mb-10'>
            <h1 className='lg:text-3xl text-xl font-bold'>Testimonials</h1>
            <p className='lg:text-base text-sm'>Check out what people say about me.</p>
          </div>
          <div className=' p-6'>
            <Carousel dotPosition="right" autoplay>
              <div className='lg:text-lg text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi quam similique, asperiores esse vitae consectetur et quidem repellat voluptatem quod facere minima dolores beatae ullam omnis voluptatum, consequuntur distinctio.
                <p className='font-bold mt-4'>Elli Joe</p>
                <p>Founder Joe Joe</p>
              </div>
              <div className='lg:text-lg text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi quam similique, asperiores esse vitae consectetur et quidem repellat voluptatem quod facere minima dolores beatae ullam omnis voluptatum, consequuntur distinctio.
                <p className='font-bold mt-4'>Elli John</p>
                <p>Founder Joe Joe</p>
              </div>
            </Carousel>
          </div>
        </div>

        <div id='contact' className='bg-[#dddddd] text-center lg:px-32 py-20'>
          <div className='mb-10 lg:w-[70%] lg:p-0 p-6 mx-auto lg:text-base text-sm'>
            <div className='mb-10'>
              <h1 className='lg:text-3xl text-xl font-bold'>Contact Me</h1>
              <p className='lg:text-base text-sm lg:w-1/2 w-full mx-auto'>Thank you for visiting my website. I want to hear from you. Please feel free to reach out using any of the channels below.</p>
            </div>

            <div className='my-4'>
              <input type="text" placeholder='Enter your Name' className='p-3 rounded-md w-full' />
            </div>
            <div className='my-4'>
              <input type="text" placeholder='Enter your Email' className='p-3 rounded-md w-full' />
            </div>
            <div className='my-4'>
              <input type="text" placeholder='Enter the Subject' className='p-3 rounded-md w-full' />
            </div>
            <div className='my-4'>
              <textarea className='w-full p-3 rounded-md h-40' placeholder='Enter your Message'></textarea>
            </div>
            <button className='bg-[#011627] p-4 text-white rounded-md w-44'>Send</button>
          </div>
        </div>
      </main>
    </FrontLayout>
  )
}
