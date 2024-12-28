import React from 'react';
import Link from 'next/link';
import Social from './Social';

const FooterNav = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className='bg-[#011627] lg:text-lg text-sm text-white p-6'>
      <div className='lg:flex justify-evenly my-6 lg:w-1/2 mx-auto'>
        <Link href='/'>
          <p className='lg:my-auto my-3'>Home</p>
        </Link>
        <Link href="/about">
          <p className='lg:my-auto my-3'>About</p>
        </Link>
        <Link href={'/books'}>
          <p className='lg:my-auto my-3'>Books</p>
        </Link>
        <Link href={'/gallery'}>
          <p className='lg:my-auto my-3'>Media</p>
        </Link>

        <Link href="/#contact"><p className='lg:my-auto my-3'>Contact</p></Link>
        <a href="http://lifematicswithdribisohart.com/">
          <p className='lg:my-auto my-3'>Life Matic Blog</p>
        </a>
      </div>

      <div className='my-10 lg:w-[35%] mx-auto'>
        <p className='text-center text-xs my-4'>Let's Connect</p>
        <Social />
      </div>
      <div className='text-center mt-8 text-white text-sm'>Copyright © {year} Dr. Ibiso D Hart. All Rights Reserved.</div>
    </div>
  );
};

export default FooterNav;