import React from 'react';
import rice from '../../assets/rice.png';
import mills from '../../assets/mills.png';
import alive from '../../assets/alive.png';

const SideBar = () => {
  return (
    <div className='hidden sm:block'>
      <div className='sidebar-wrapper py-4 text-xs w-48'>
        <section className='pl-4'>
          <p>My Account</p>
          <p>My Orders</p>
          <p>My Claims</p>
          <p>My Favorites</p>
          <p>My Shopping Lists</p>
        </section>

        <section className='sidebar_payment my-4 pl-4 py-2'>
          <p>Address Book</p>
          <p>Account Information</p>
          <p>Payment Information</p>
        </section>

        <section className='pl-4'>
          <p>Company Profile</p>
          <p>Company Structure</p>
          <p>Company Users</p>
          <p>Roles and Permissions</p>
        </section>

        <section className='pl-4 py-2 sidebar_email mt-4'>
          <p>Email Preferences</p>
          <p>Catalog</p>
        </section>
      </div>

      <section className='my-8'>
        <div className='fav_wrapper pb-1 text-md font-semibold'>
          <p>My Favorites</p>
        </div>

        <div className='flex fav_content my-4 border-b pb-4'>
          <div className='pr-2'>
            <img src={rice} alt='rice' width='45' />
          </div>
          <div>
            <p>Amborsia-Rice Cream-Case</p>
            <p>$ 18.45</p>
            <button className='add_card_btn mt-2 -ml-2 rounded mb-1 text-xs'>
              Add New Cart
            </button>
          </div>
          <div>
            <i className='fa-solid fa-xmark pl-1'></i>
          </div>
        </div>

        <div className='flex fav_content my-6 border-b pb-4'>
          <div className='pr-2'>
            <img src={mills} alt='rice' width='45' />
          </div>
          <div>
            <p>Amborsia-Rice Cream-Case</p>
            <p>$ 18.45</p>
            <button className='add_card_btn mt-2 -ml-2 rounded mb-1 text-xs'>
              Add New Cart
            </button>
          </div>
          <div>
            <i className='fa-solid fa-xmark pl-1'></i>
          </div>
        </div>

        <div className='flex fav_content mt-6'>
          <div className='pr-2'>
            <img src={alive} alt='rice' width='45' />
          </div>
          <div>
            <p>Amborsia-Rice Cream-Case</p>
            <p>$ 18.45</p>
            <button className='add_card_btn mt-2 -ml-2 rounded mb-1 text-xs'>
              Add New Cart
            </button>
          </div>
          <div>
            <i className='fa-solid fa-xmark pl-1'></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
