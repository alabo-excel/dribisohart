import React, { Fragment, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import FrontLayout from '@/layout/FrontLayout';
import Link from 'next/link';
import { message } from 'antd';


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
            <img src="./images/IMGL9466.jpg" className="lg:h-[85vh] h-[60vh] w-full object-cover rounded-2xl" alt="" />
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
            <Carousel autoplay>
              <div className='lg:text-lg text-sm'>
                Dr. Ibiso is dedicated, industrious, innovative, disciplined, and has a pleasant personality. She is one with a golden heart who does not miss any opportunity to render help to others. She has rendered selfless services as well as volunteered in various capacities both in the church and in the community.
                <p className='font-bold mt-4 text-center'>Ngozi Okeh</p>
                {/* <p className='text-center'>Founder Joe Joe</p> */}
              </div>
              <div className='lg:text-lg text-sm'>
                Dr. Ibiso is a mentor and life coach, and I have cherished every moment working with you so far.
                Your impact on the human race typifies you as a trailblazer and I Can't stop loving and praying for you always. Thank you for all you do for mankind.
                <p className='font-bold mt-4 text-center'>Pastor (Mrs.). Esther Uduak Anthony</p>
                {/* <p className='text-center'>Founder Joe Joe</p> */}
              </div>
              <div className='lg:text-lg text-sm'>
                Dr. Ibiso Hart is an extraordinary individual who has touched my life and the lives of many others in ways that words fail to describe. She is my confidante, my role model, and my best friend. I am blessed to have her as a sister and friend. She is my source of strength and inspiration and the person I admire most.
                <p className='font-bold mt-4 text-center'>Mrs Asitoa George Amadi</p>
                {/* <p className='text-center'>Founder Joe Joe</p> */}
              </div>
              <div className='lg:text-lg text-sm'>
                I have known Dr. Ibiso Hart for over two decades. She is full of empathy for others, very non-judgmental, and her confidence level is highly contagious. She is very engaging and has high energy.
                <p className='font-bold mt-4 text-center'>Wilfred F.K. Wokekoro ( SCMP)</p>
                {/* <p className='text-center'>Founder Joe Joe</p> */}
              </div>
              <div className='lg:text-lg text-sm'>
                Dr. Ibiso, my esteemed line manager at my former place of work, has left an indelible mark on my professional journey. Her unwavering guidance and invaluable support have been nothing short of remarkable.
                Under her expert guidance, I've undergone a profound evolution, emerging as a highly meticulous and detail-oriented worker. Dr. Ibiso's insightful feedback and strategic insights have not only enhanced my performance but have also instilled in me a deep commitment to precision and thoroughness.
                <p className='font-bold mt-4 text-center'>Ibibo Seleye-Fubara</p>
                <p className='text-center'>Senior Product Manager. </p>
              </div>
              <div className='lg:text-lg text-sm'>
                My experience working under the watch of Dr. Ibiso Darlington Hart as a customer service officer was an unforgettable experience of learning and growing. She is a kindhearted woman with a motherly heart.

                As an intern at First Bank, Port Harcourt, Trans Amadi branch, she guided me in all areas of knowledge. Today, she is one of my amiable inspirations who always makes me know that I can do better no matter where I'm coming from.
                <p className='font-bold mt-4 text-center'>Rev'd Kenneth C. Eke,</p>
                {/* <p className='text-center'>Founder Joe Joe</p> */}
              </div>
              <div className='lg:text-lg text-sm'>
                Dr. Ibiso has been a source of encouragement for me. I could recall us going to study together. Being close to her gave me an understanding of life expectancy. I was always encouraged by her humility and focus, as well as her ability to relate to friends. She was indeed very conserved and determined. Recently, I have found in her a lady who is determined to build a career for herself that will influence society positively. I still have this conviction that connecting with her can only be a plus in my life as an individual and family too.
                <p className='font-bold mt-4 text-center'>Engr. Onyige Emmanuel E. </p>
                {/* <p className='text-center'>Founder Joe Joe</p> */}
              </div>
              <div className='lg:text-lg text-sm'>
                I had the very distinct honor of meeting and working with Dr. Ibiso Hart in the First Bank Nigeria Rumuokoro branch and she made a lasting impact on my professional life would be an understatement. She was more than a colleague. She is a mentor, a role model and I dare say a dear friend.
                It wasn't just Dr. Ibiso's work ethic that impressed me. Her ability to connect with people on a profound level, she has a unique talent for making everyone feel valued and heard. She has an innate ability to bring out the best in others.
                <p className='font-bold mt-4 text-center'>Muoghalu Philip.</p>
                {/* <p className='text-center'>Founder Joe Joe</p> */}
              </div>
            </Carousel>
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