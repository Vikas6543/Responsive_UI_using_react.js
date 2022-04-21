import React from 'react';
import visa from '../../../assets/visa.png';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '../../redux/action';

const DefaultPayment = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(modalAction(true));
  };

  return (
    <div>
      <Modal />
      <div>
        <section className='deafultPayment_title sm:flex sm:items-center sm:justify-between ml-8 sm:ml-0'>
          <div className='pb-1 deafultPayment_title_text'>
            Default Payment Method
          </div>
          <div>
            <button
              onClick={openModal}
              className='add_card_btn rounded mb-1 text-xs mt-2 sm:mt-0 sm:ml-2 sm:mr-2'
            >
              Add New card
            </button>
          </div>
        </section>

        <section className='deafultPayment_card p-2 rounded w-60 sm:mt-6 mt-10 ml-8 sm:ml-0'>
          <div className='border-b pb-1'>
            <img src={visa} alt='visa' />
          </div>

          <div className='my-3 text-xs border-b pb-3'>
            <div className='flex'>
              <div className='w-4/6'>Card Type</div>
              <div>Visa</div>
            </div>
            <div className='flex my-1'>
              <div className='w-4/6'>Card Number</div>
              <div>*****7778</div>
            </div>
            <div className='flex'>
              <div className='w-4/6'>Name on Card</div>
              <div>Vikas</div>
            </div>
            <div className='flex mt-1'>
              <div className='w-4/6'>Expiration Date</div>
              <div>07/22</div>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <i className='fa-solid fa-circle-check'></i> Default
            </div>
            <div className='text-xs'>
              <p>Edit | Remove</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DefaultPayment;
