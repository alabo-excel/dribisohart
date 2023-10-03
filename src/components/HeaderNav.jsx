import React, { useState } from 'react';

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
      <div className='p-4 flex justify-between text-white bg-[#011627] lg:px-32'>
        {/* <h1 className='text-3xl font-bold'>Dr. Ibiso .D. Hart</h1> */}
        <img src="./images/logo.png" className='w-11 h-11' alt="" />
        <div className='lg:flex hidden text-base justify-between w-[30%]'>
          <p className='my-auto'>Home</p>
          <p className='my-auto'>About</p>
          <p className='my-auto'>Blog</p>
          <button className='bg-white rounded-full p-2 w-32 text-[#011627]'>Contact Me</button>
        </div>
        <img onClick={() => openNav()} className='lg:hidden block w-8 burger' src="./images/icons8-hamburger.svg" alt="" />
      </div>
      <div id="mySidenav" className='sidenav'>
        <div className="w-[90%] mx-auto">
          <p onClick={() => closeNav()} className="float-right text-4xl cursor-pointer">&times;</p>
          <div className="pt-20"></div>
          <p className='my-5'>Home</p>
          <p className='my-5'>About</p>
          <p className='my-5'>Blog</p>
          <button className='bg-white my-5 rounded-full w-full p-4 text-[#011627]'>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;