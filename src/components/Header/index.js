import React from 'react';
import user from '../../assets/user.png';
import truck from '../../assets/truck.png';
import cart from '../../assets/cart.png';

const Header = () => {
  return (
    <>
      <section className='flex justify-around header-wrapper'>
        <div className='hidden sm:block'>
          <i className='fa-solid fa-circle-check'></i> Free shipping for orders
          above $150
        </div>
        <div>
          <i className='fa-solid fa-circle-check'></i> 2 day Delivery
        </div>
        <div>
          <i className='fa-solid fa-circle-check'></i> Exciting Offers
        </div>
      </section>

      <section className='text-sm flex my-6 items-center sm:w-9/12 sm:mx-auto justify-around'>
        <div className='sm:hidden cursor-pointer'>
          <i class='fa-solid fa-bars text-xl'></i>
        </div>
        <div className='font-bold sm:mr-14'>Logo</div>
        <div className='flex hidden sm:flex'>
          <input
            className='appearance-none border rounded-xs py-2 leading-tight focus:outline-none focus:shadow-outline w-96 pl-2 text-xs'
            type='text'
            placeholder='Search by product, category or brand'
          />
          <div className='search-btn'>
            <i className='fa-solid fa-magnifying-glass text-white px-5 pt-2'></i>
          </div>
        </div>

        <div className='flex text-xs sm:ml-8 items-center'>
          <div className='hidden sm:block'>
            <img src={user} width='16' className='mx-auto' />
            <p className='pt-1'>Hello, Jonathan</p>
          </div>
          <div className='mx-5 hidden sm:block'>
            <img src={truck} width='24' className='mx-auto' />
            <p className='pt-2'>Quick Order</p>
          </div>
          <div className='hidden sm:block'>
            <i className='fa-solid fa-heart text-lg ml-3'></i>
            <p className=''>Favorites</p>
          </div>
          <div className='sm:hidden'>
            <i className='fa-solid fa-magnifying-glass text-lg mr-2'></i>
          </div>
          <div className='sm:ml-5'>
            <img src={cart} width='18' className='mx-auto' />
            <p className='pt-1 hidden sm:block'>Cart</p>
          </div>
        </div>
      </section>

      <section className='flex hidden sm:flex text-sm header_items_wrapper py-2 items-center font-semibold'>
        <div>Beverages</div>
        <div className='px-14'>Bulk</div>
        <div>Groceries</div>
        <div className='px-14'>Health & Beauty</div>
        <div>Household</div>
        <div className='px-14'>Vitamin & Supplements</div>
        <div>Brands</div>
      </section>
    </>
  );
};

export default Header;
