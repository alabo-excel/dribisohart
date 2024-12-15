import React, { Fragment, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import FrontLayout from '@/layout/FrontLayout';
import Link from 'next/link';
import { message } from 'antd';
import Slider from '@/components/Slider';


const Home = () => {
  // const [messageApi, contextHolder] = message.useMessage();



  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const sendMessage = () => {
    setLoading(true)
    fetch("https://formsubmit.co/ajax/dribisohart@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: message,
        subject: subject,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === "true") {
          message.open({
            type: 'success',
            content: 'Message sent Successfully!',
          });
        }
        setLoading(false)

      })
      .catch((error) => {
        console.log(error);
        // alert("An error occured, Please try again", error.text);
        message.open({
          type: 'error',
          content: "An error occured, Please try again",
        });
        setLoading(false)
        // messageApi.info("An error occured, Please try again", error.text);
      });
  }


  return (
    <FrontLayout>
      <main>
        <div className='mt-18'>
          <Carousel>
            <div className='relative'>
              <img src="./images/IMGL9381.jpg" className='h-[100vh] lg:w-[90%] mx-auto object-cover object-top	' alt="" />
              <div className='absolute top-0  opacity-50 w-full h-full bg-[#011627]'></div>
              <div className='absolute bottom-2 lg:left-20 left-5 right-5 z-20 text-white'>
                <div className="lg:w-[40%] z-20 lg:order-first order-last">
                  <h1 className="lg:text-5xl style text-3xl font-black leading-tight">Dr. Ibiso <br /> Darlington Hart</h1> <br /> <br />
                  <p>A Certified Lifestyle Coach</p>
                  <p>Your Partner in Personal Evolution</p>
                  <p className="my-3 lg:text-base text-sm">Certified Professional Coach, Senior Certified Professional Coach</p>
                  <p className="mb-5 lg:text-base text-sm">I am a natural-born leader who inspires and motivates those around me. Through my actions and words, I instil a sense of purpose and direction, empowering individuals to strive for their best.</p>
                </div>
              </div>
            </div>
            {/* <div className='relative'>
              <img src="./images/new-img-4.jpeg" className='h-[100vh] lg:w-[90%] mx-auto object-top	 object-cover' alt="" />
              <div className='absolute top-0  opacity-50 w-full h-full bg-[#011627]'></div>
              <div className='absolute bottom-20 lg:left-32 left-5 right-5 z-20 text-white'>
                <div className="lg:w-[40%] z-20 lg:order-first order-last lg:my-auto my-10">
                  <p className="my-5 lg:text-lg text-sm">My strong managerial acumen allows me to optimize processes, streamline operations, and foster a culture of productivity and accountability. </p>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img src="./images/hero-img.png" className='h-[100vh] lg:w-[90%] mx-auto object-top object-cover' alt="" />
              <div className='absolute top-0  opacity-50 w-full h-full bg-[#011627]'></div>
              <div className='absolute bottom-20 lg:left-32 left-5 right-5 z-20 text-white'>
                <div className="lg:w-[40%] z-20 lg:order-first order-last lg:my-auto my-10">
                  <p className="my-5 lg:text-lg text-sm">Success is not measured by how high you climb, but by how many people you bring along with you.</p>
                </div>
              </div>
            </div> */}
          </Carousel>
        </div>

        <div className=' bg-[#CDE8FE] mt-20 p-8 text-center'>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Ready to Start Your Own Success Story?
            </h2>
            <p className="text-lg text-center text-gray-700 mb-8">
              Crush your goals, overcome challenges, and take your life to the next level.
              Your transformation starts with a single step!
            </p>
            <a href="https://lifematicswithdribisohart.com/">
              <button
                className="bg-[#011627] text-white font-semibold text-lg py-3 px-8  shadow-md transition-transform transform hover:scale-105"
              >
                Schedule Your Discovery Session Now
              </button>
            </a>
          </div>
        </div>

        <div className="lg:flex bg-[#FBFBFB] justify-between lg:py-20 py-10 lg:px-20 px-6">
          <div className="lg:w-[45%]">
            <img src="./images/IMGL9466.jpg" className=" w-full object-cover rounded-2xl" alt="" />
          </div>
          <div className="lg:w-1/2 my-auto">
            <h1 className="lg:text-3xl text-xl font-bold mb-4">About</h1>
            <p className="lg:text-lg text-sm">
              Dr Ibiso Hart is a visionary Business Development Expert, driven by her own profound journey of self-discovery and transformation, Dr. Hart empowers businesses to thrive and individuals to unlock their full potentials and navigate life's challenges with resilience and adaptability.
              <br /> <br />
              <b>Proven Expertise: </b> <br />
              With over two decades of experience and  a PhD in Strategic Management and Leadership, and a diverse background spanning from teaching & coaching, banking, oil and gas, aviation, and catering, Dr. Hart brings a unique blend of expertise to her work. This rich tapestry of experience has instilled in her a deep understanding of the diverse challenges and opportunities faced by individuals across various industries.
              <br /> <br />
              Dr. Hart's impact is undeniable.  She has consistently delivered exceptional results, driving operational excellence in Small and Medium Enterprises (SMEs), and Large Enterprises (LEs) fostering a culture of innovation in organizations, and promoting a supportive ecosystem for business growth and personal transformation.
            </p>
            <Link href="/about">
              <button className="p-4 bg-[#011627] lg:text-lg text-sm rounded-md text-white w-full my-6">View Educational Qualification</button>
            </Link>
          </div>
        </div>

        <div className=' bg-[#CDE8FE] mx-auto py-20 text-center'>
          <div className='mb-10'>
            <h1 className='lg:text-3xl text-xl font-bold'>Testimonials</h1>
            <p className='lg:text-lg text-center text-sm'>Check out what people say about me.</p>
          </div>
          <div className='lg:w-[60%] mx-auto p-6'>
            <Slider />
          </div>
        </div>

        <div id='contact' className='text-center lg:px-32 py-20'>
          <div className='mb-10 lg:w-[70%] lg:p-0 p-6 mx-auto lg:text-lg text-sm'>
            <div className='mb-10'>
              <h1 className='lg:text-3xl text-xl font-bold'>Let's Connect</h1>
              <p className='lg:text-lg text-center text-sm lg:w-1/2 w-full mx-auto'>Thank you for visiting my website. I want to hear from you. Please feel free to reach out using any of the channels below.</p>
            </div>

            <div className='my-4'>
              <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Name' className='p-3 border border-[#011627] rounded-md w-full' />
            </div>
            <div className='my-4'>
              <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='Email' className='p-3 border border-[#011627] rounded-md w-full' />
            </div>
            <div className='my-4'>
              <input value={subject} onChange={e => setSubject(e.target.value)} type="text" placeholder='Subject' className='p-3 border border-[#011627] rounded-md w-full' />
            </div>
            <div className='my-4'>
              <textarea value={message} onChange={e => setMessage(e.target.value)} className='w-full p-3 rounded-md h-40 border border-[#011627] ' placeholder='Your Message'></textarea>
            </div>
            <button onClick={() => sendMessage()} className='bg-[#011627] text-xl p-4 text-white rounded-md w-full'>{loading ? 'sending...' : 'Send'}</button>
            {/* dribisohart@gmail.com */}
          </div>
        </div>
      </main>
    </FrontLayout>
  )
}

export default Home