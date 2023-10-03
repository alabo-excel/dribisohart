import HeaderNav from "@/components/HeaderNav";
import React, { Fragment } from 'react';
import { Carousel } from 'antd';
import Head from "next/head"


export default function Home() {

  return (
    <Fragment>
      <Head>
        <title>Home || Dr. Ibiso Darlington Hart </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Ibiso Darlington Hart" />
        <meta property="og:description" content="Ibiso Darlington Hart (PhD) is a highly accomplished business development strategist and leadership professional with an impressive career spanning over two decades. Throughout her diverse professional journey, she has gained extensive experience in various industries, including banking and the Aviation Sector." />
        <meta property="og:image" content="./images/IMGL9344.jpg" />
        <meta property="og:url" content="http://www.dribisohart.com/" />
        <meta property="og:site_name" content="Dr Ibiso Darlington Hart" />

        <meta name="twitter:title" content="Dr. Ibiso Darlington Hart" />
        <meta name="twitter:description" content="Ibiso Darlington Hart (PhD) is a highly accomplished business development strategist and leadership professional with an impressive career spanning over two decades. Throughout her diverse professional journey, she has gained extensive experience in various industries, including banking and the Aviation Sector." />
        <meta name="twitter:image" content="./images/IMGL9344.jpg" />

      </Head>
      <HeaderNav />
      <div className="lg:flex mt-4 justify-between lg:h-[90vh] lg:px-32 px-2">
        <div className="lg:w-1/2 lg:order-last order-first">
          <img src="./images/hero.png" alt="Hero img" />
        </div>
        <div className="lg:w-[40%] lg:order-first order-last lg:my-auto my-10">
          <h1 className="text-5xl font-black leading-tight">Dr. Ibiso <br /> Darlington Hart</h1>
          <p className="my-3 ">(ICEN, FCIFCN, FIMS, CMGR, FCBI, CFP)</p>
          <p className="my-5">I am a natural-born leader who inspires and motivates those around me. Through her actions and words, I instil a sense of purpose and direction, empowering individuals to strive for their best.</p>
        </div>
      </div>
      <div className="lg:flex bg-[#FBFBFB] justify-between lg:py-20 py-10 lg:px-32 px-2">
        <div className="lg:w-[45%]">
          <img src="./images/IMGL9467.jpg" className="lg:h-[85vh] h-[60vh] w-full object-cover rounded-2xl" alt="" />
        </div>
        <div className="lg:w-1/2 my-auto">
          <h1 className="text-3xl font-bold my-4">About</h1>
          <p className="mt-4">Ibiso Darlington Hart (PhD) is a highly accomplished business development strategist and leadership professional with an impressive career spanning over two decades. Throughout her diverse professional journey, she has gained extensive experience in various industries, including banking and the Aviation Sector.
            <br /><br />
            Currently serving as the General and Operations Manager of Elin Group Ltd., Ibiso holds a Bachelor of Science (BSc) degree in Secretarial Administration from Rivers State University, Nigeria. She further pursued her education by obtaining a Master of Science (MSc) degree in Human Resources Management from Enugu State University of Technology, Enugu, Nigeria.
            <br /> <br />
            Dr. Ibiso got an Executive Masters Certificate (EMC) in Human Resources Management from the East Midlands School of Business & Management in the United Kingdom, inspired by her desire for continual learning and professional development. Her dedication to perfection prompted her to pursue a Doctorate in Strategic Management and Leadership at The University of America, Curaçao.
          </p>
          <button className="p-4 bg-[#011627] rounded-md text-white lg:w-44 w-full my-4">Learn More</button>
        </div>
      </div>
    </Fragment>
  )
}
