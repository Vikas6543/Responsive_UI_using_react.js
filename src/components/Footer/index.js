import React from 'react';

const Footer = () => {
  return (
    <div className='fotter_wrapper text-sm'>
      <div className='w-8/12 sm:mx-auto py-10 grid gap-8 sm:gap-4 grid-cols-12 ml-20'>
        <section className='fotter_section_1 col-span-6 md:col-span-3'>
          <h6 className='font-bold text-white pb-1'>ABOUT</h6>
          <p className=''>About Company</p>
          <p>Become a Supplier</p>
          <p>Careers</p>
          <p>Sitemap</p>
        </section>
        <section className='fotter_section_2 md:col-span-3 col-span-6'>
          <h6 className='font-bold text-white pb-1'>SHOP</h6>
          <p className=''>Bulk</p>
          <p>Household</p>
          <p>Health</p>
          <p>Vitamin</p>
        </section>
        <section className='fotter_section_3 md:col-span-3 col-span-6'>
          <h6 className='font-bold text-white pb-1'>CUSTOMER</h6>
          <p className=''>FAQs</p>
          <p>Contact</p>
          <p>Create New</p>
          <p>Account</p>
        </section>
        <section className='fotter_section_4 md:col-span-3 col-span-6'>
          <h6 className='font-bold text-white pb-1'>SIGN UP</h6>
          <p>
            Be the first to here about promotions, new products, trends and more
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
