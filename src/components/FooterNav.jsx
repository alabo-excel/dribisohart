import React from 'react';

const FooterNav = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className='bg-[#011627] p-6'>

      <div className='text-center text-white'>Copyright © {year} Dr. Ibiso D Hart. All Rights Reserved.</div>
    </div>
  );
};

export default FooterNav;