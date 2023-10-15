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
        <div className=''>
          <Carousel autoplay>
            <div className='relative'>
              <img src="./images/IMGL9381.jpg" className='h-[100vh] w-full object-cover' alt="" />
              <div className='absolute top-0  opacity-50 w-full h-full bg-[#011627]'></div>
              <div className='absolute bottom-20 lg:left-32 left-5 right-5 z-20 text-white'>
                <div className="lg:w-[40%] z-20 lg:order-first order-last lg:my-auto my-10">
                  <h1 className="lg:text-5xl text-3xl font-black leading-tight">Dr. Ibiso <br /> Darlington Hart</h1>
                  <p className="my-3 lg:text-base text-sm">(CFP-USA, FCBI-dip.MIS, FIMS-UK, Cmgr, FCIFCN, ICEN, CIBN)</p>
                  <p className="my-5 lg:text-base text-sm">I am a natural-born leader who inspires and motivates those around me. Through my actions and words, I instil a sense of purpose and direction, empowering individuals to strive for their best.</p>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img src="./images/IMGL9509.jpg" className='h-[100vh] w-full object-cover' alt="" />
              <div className='absolute top-0  opacity-50 w-full h-full bg-[#011627]'></div>
              <div className='absolute bottom-20 lg:left-32 left-5 right-5 z-20 text-white'>
                <div className="lg:w-[40%] z-20 lg:order-first order-last lg:my-auto my-10">
                  <p className="my-5 lg:text-lg text-sm">My strong managerial acumen allows me to optimize processes, streamline operations, and foster a culture of productivity and accountability. </p>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img src="./images/img.jpeg" className='h-[100vh] w-full object-cover' alt="" />
              <div className='absolute top-0  opacity-50 w-full h-full bg-[#011627]'></div>
              <div className='absolute bottom-20 lg:left-32 left-5 right-5 z-20 text-white'>
                <div className="lg:w-[40%] z-20 lg:order-first order-last lg:my-auto my-10">
                  <p className="my-5 lg:text-lg text-sm">Success is not measured by how high you climb, but by how many people you bring along with you.</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="lg:flex bg-[#FBFBFB] justify-between lg:py-20 py-10 lg:px-32 px-6">
          <div className="lg:w-[45%]">
            <img src="./images/IMGL9466.jpg" className="lg:h-[85vh] w-full object-cover rounded-2xl" alt="" />
          </div>
          <div className="lg:w-1/2 my-auto">
            <h1 className="lg:text-3xl text-xl font-bold my-4">About</h1>
            <p className="mt-4 lg:text-base text-sm">
              Dr Ibiso Darlington Hart <span className='text-sm'>(CFP-USA, FCBI-dip.MIS, FIMS-UK, Cmgr, FCIFCN, ICEN, CIBN)</span> is a phenomenal Business Development Strategist, Leadership Professional and a Career and Life Coach spanning over two decades of experience, with a PhD in Strategic Management and Leadership and having gained extensive experience in various sectors ranging from teaching/coaching to 14 years of banking career, oil and gas servicing and Aviation, (private jet charter services).
              <br /><br />
              In her diverse professional journey, Dr Ibiso has consistently delivered exceptional results, driving operational excellence, strategic growth, and fostering a culture of innovation in organisations.
            </p>
            <Link href="/about">
              <button className="p-4 bg-[#011627] lg:text-base text-sm rounded-md text-white lg:w-72 w-full my-6">View Educational Qualification</button>
            </Link>
          </div>
        </div>

        <div className=' bg-[#dddddd] mx-auto py-20 text-center'>
          <div className='mb-10'>
            <h1 className='lg:text-3xl text-xl font-bold'>Testimonials</h1>
            <p className='lg:text-base text-center text-sm'>Check out what people say about me.</p>
          </div>
          <div className='lg:w-[60%] mx-auto p-6'>
            <Slider />
          </div>
        </div>

        <div id='contact' className='text-center lg:px-32 py-20'>
          <div className='mb-10 lg:w-[70%] lg:p-0 p-6 mx-auto lg:text-base text-sm'>
            <div className='mb-10'>
              <h1 className='lg:text-3xl text-xl font-bold'>Let's Connect</h1>
              <p className='lg:text-base text-center text-sm lg:w-1/2 w-full mx-auto'>Thank you for visiting my website. I want to hear from you. Please feel free to reach out using any of the channels below.</p>
            </div>

            <div className='my-4'>
              <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Enter your Name' className='p-3 bg-[#dddddd]  rounded-md w-full' />
            </div>
            <div className='my-4'>
              <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='Enter your Email' className='p-3 bg-[#dddddd] rounded-md w-full' />
            </div>
            <div className='my-4'>
              <input value={subject} onChange={e => setSubject(e.target.value)} type="text" placeholder='Enter the Subject' className='p-3 bg-[#dddddd] rounded-md w-full' />
            </div>
            <div className='my-4'>
              <textarea value={message} onChange={e => setMessage(e.target.value)} className='w-full p-3 rounded-md h-40 bg-[#dddddd]' placeholder='Enter your Message'></textarea>
            </div>
            <button onClick={() => sendMessage()} className='bg-[#011627] p-4 text-white rounded-md w-44'>{loading ? 'sending...' : 'Send'}</button>
            {/* dribisohart@gmail.com */}
          </div>
        </div>
      </main>
    </FrontLayout>
  )
}

export default Home