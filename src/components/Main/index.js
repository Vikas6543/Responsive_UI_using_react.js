import React from 'react';
import SideBar from './SideBar';
import PaymentInfo from './PaymentInfo';

const Main = () => {
  return (
    <div className='sm:w-8/12 sm:mx-auto text-xs'>
      <div className='sm:hidden py-4 mx-16 justify-around flex items-center bg-gray-200'>
        <div className='font-semibold text-lg'>Payment Information</div>
        <div className='fa-solid fa-bars text-xl cursor-pointer'></div>
      </div>
      <div className='py-3 hidden sm:block'>
        <p>
          <span className='text-blue-600'>Home</span>{' '}
          <i className='fa-solid fa-angle-right px-2'></i> My Account
        </p>
      </div>
      <div className='flex'>
        <SideBar />
        <PaymentInfo />
      </div>

      <div
        className='fixed z-10 overflow-y-auto top-0 w-full left-0 hidden'
        id='modal'
      >
        <div className='flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div className='fixed inset-0 transition-opacity'>
            <div className='absolute inset-0 bg-gray-900 opacity-75' />
          </div>
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>
            &#8203;
          </span>
          <div
            className='inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-headline'
          >
            {/* main-content */}
            <div>hello</div>

            <div className='bg-gray-200 px-4 py-3 text-right'>
              <button
                type='button'
                className='py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2'
              >
                <i className='fas fa-times'></i> Cancel
              </button>
              <button
                type='button'
                className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2'
              >
                <i className='fas fa-plus'></i> Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
