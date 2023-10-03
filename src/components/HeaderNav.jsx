import React from 'react';

const HeaderNav = () => {
  return (
    <div className='p-6 flex justify-between text-white bg-[#011627] lg:px-32'>
      <h1 className='text-3xl font-bold'>Dr Ibiso .D. Hart</h1>
      <div className='lg:flex hidden text-base justify-between w-[30%]'>
        <p className='my-auto'>Home</p>
        <p className='my-auto'>About</p>
        <p className='my-auto'>Blog</p>
        <button className='bg-white rounded-full w-32 text-[#011627]'>Contact Me</button>
      </div>
      <img className='lg:hidden block' src="./images/icons8-hamburger.svg" alt="" />
    </div>
  );
};

export default HeaderNav;