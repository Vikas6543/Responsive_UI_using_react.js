import React from 'react';
import visa from '../../../assets/visa.png';
import { useSelector } from 'react-redux';

const OtherPayment = () => {
  const result = useSelector((state) => state.card);

  return (
    <div className='mt-12 ml-8 sm:ml-0'>
      <section className='otherPayment_title sm:flex sm:items-center sm:justify-between pb-1'>
        <div className='pb-1 deafultPayment_title_text'>
          Other Payment Method
        </div>
      </section>
      {result.card.length > 0 &&
        result.card.map((item, index) => (
          <section className='deafultPayment_card p-2 rounded w-60 my-4'>
            <div className='border-b pb-1'>
              <img src={visa} alt='visa' />
            </div>

            <div className='my-3 text-xs border-b pb-3'>
              <div className='flex'>
                <div className='w-4/6'>Card Type</div>
                <div>{item.cardType}</div>
              </div>
              <div className='flex my-1'>
                <div className='w-4/6'>Card Number</div>
                <div>{item.cardNumber}</div>
              </div>
              <div className='flex'>
                <div className='w-4/6'>Name on Card</div>
                <div>{item.firstName}</div>
              </div>
              <div className='flex mt-1'>
                <div className='w-4/6'>Expiration Date</div>
                <div>{item.year}</div>
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
        ))}
    </div>
  );
};

export default OtherPayment;
