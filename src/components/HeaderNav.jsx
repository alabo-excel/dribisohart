import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HeaderNav = () => {
  const [open, setOpen] = useState(false)

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
    setOpen(true)
  }
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
    setOpen(false)
  }

  return (
    <div>
      <div className={`p-4 w-full fixed top-0 z-10 flex justify-between bg-[#011627] text-white text-lg lg:px-20`}>
        {/* <h1 className='text-3xl font-bold'>Dr. Ibiso .D. Hart</h1> */}
        <Link href='/'><img src="./images/logo.png" className='w-11 h-11' alt="" /></Link>
        <div className='lg:flex hidden text-lg justify-between w-[60%]'>
          <p className='my-auto'><Link href='/'>Home</Link></p>
          <p className='my-auto'><Link href="/about">About</Link></p>
          <p className='my-auto'><Link href="/about#expertise">Expertise</Link></p>

          <p className='my-auto'><Link href="/about">Books</Link></p>
          <p className='my-auto'><Link href="/gallery">Media</Link></p>

          <p className='my-auto'><Link href="/#contact">Contact</Link></p>

          {/* <a className='my-auto' href="https://dribisohart.blogspot.com/" target="_blank">
             <p className='my-auto'>Blog</p>
          </a> */}
          <a href="http://lifematicswithdribisohart.com/">
            <button className='bg-white rounded-full p-2 w-44 text-[#011627]'>Lifematics Blog</button>
          </a>
          {/* <Link href='/'></Link> */}
        </div>
        <img onClick={() => openNav()} className='lg:hidden block w-6 burger' src="./images/icons8-hamburger.svg" alt="" />
      </div>
      <div id="mySidenav" className='sidenav'>
        <div className="w-[90%] mx-auto">
          <p onClick={() => closeNav()} className="float-right text-4xl cursor-pointer">&times;</p>
          <div className="pt-20"></div>
          <Link onClick={() => closeNav()} href='/'><p className='my-5'>Home</p></Link>
          <Link onClick={() => closeNav()} href='/about'><p className='my-5'>About</p></Link>
          <Link onClick={() => closeNav()} href='/#books'><p className='my-5'>Books</p></Link>
          <Link onClick={() => closeNav()} href='/#contact'><p className='my-5'>Contact</p></Link>
          <Link onClick={() => closeNav()} href='/gallery'><p className='my-5'>Media</p></Link>

          {/* <a href="https://dribisohart.blogspot.com/" target="_blank">
            <p className='my-5'>Blog</p>
          </a> */}
          {/* <Link href='/#contact'></Link> */}
          <a href="https://lifematicswithdribisohart.com/"><button onClick={() => closeNav()} className='bg-white my-5 rounded-full w-full p-4 text-[#011627]'>Lifematics Blog</button></a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
