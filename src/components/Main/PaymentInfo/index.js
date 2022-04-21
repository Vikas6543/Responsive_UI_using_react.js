import React from 'react';
import DefaultPayment from './DefaultPayment';
import OtherPayment from './OtherPayment';

const PaymentInfo = () => {
  return (
    <div className='ml-8 w-full'>
      <div className='mt-8 ml-8 sm:mt-0 sm:ml-0'>
        <p className='text-xl font-bold pb-6'>Payment Information</p>
      </div>
      <DefaultPayment />
      <OtherPayment />
    </div>
  );
};

export default PaymentInfo;
