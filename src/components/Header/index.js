import React from 'react';
import user from '../../assets/user.png';
import truck from '../../assets/truck.png';
import cart from '../../assets/cart.png';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openMenuHandler = () => {
    setIsOpen(true);
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className='flex justify-around header-wrapper'>
        <div>
          <i className='fa-solid fa-circle-check'></i> Free shipping for orders
          above $150
        </div>
        <div className='hidden sm:block'>
          <i className='fa-solid fa-circle-check'></i> 2 day Delivery
        </div>
        <div>
          <i className='fa-solid fa-circle-check'></i> Exciting Offers
        </div>
      </section>

      {isOpen && (
        <div className='menu_wrapper w-60'>
          <button onClick={closeMenuHandler} className='absolute top-1 right-2'>
            <i className='fa-solid fa-xmark text-3xl text-white'></i>
          </button>

          <div className='menu_content mt-14'>
            <section className='pl-6'>
              <p>My Account</p>
              <p>My Orders</p>
              <p>My Claims</p>
              <p>My Favorites</p>
              <p>My Shopping Lists</p>
            </section>

            <section className='sidebar_payment my-4 pl-6 py-5'>
              <p>Address Book</p>
              <p>Account Information</p>
              <p>Payment Information</p>
            </section>

            <section className='pl-6'>
              <p>Company Profile</p>
              <p>Company Structure</p>
              <p>Company Users</p>
              <p>Roles and Permissions</p>
            </section>

            <section className='pl-6 py-2 sidebar_email mt-4'>
              <p>Email Preferences</p>
              <p>Catalog</p>
            </section>
          </div>
        </div>
      )}

      <section className='text-sm flex my-6 items-center sm:w-8/12 sm:mx-auto justify-around'>
        <button onClick={openMenuHandler} className='sm:hidden cursor-pointer'>
          <i class='fa-solid fa-bars text-xl'></i>
        </button>
        <div className='font-bold sm:mr-14'>
          <i class='fa-solid fa-crown text-lg'></i>
        </div>
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
