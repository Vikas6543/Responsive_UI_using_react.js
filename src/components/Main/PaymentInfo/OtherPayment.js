import React from 'react';
import visa from '../../../assets/visa.png';
import master from '../../../assets/master.png';
import { useSelector } from 'react-redux';

const OtherPayment = () => {
  const [card, setCard] = React.useState([]);
  const result = useSelector((state) => state.card);

  React.useEffect(() => {
    setCard(result.card);
  }, [result]);

  return (
    <div className='mt-12 ml-8 sm:ml-0'>
      <section className='otherPayment_title sm:flex sm:items-center sm:justify-between pb-1'>
        <div className='pb-1 deafultPayment_title_text'>
          Other Payment Method
        </div>
      </section>
      <div className='grid grid-cols-12'>
        {card.length > 0 &&
          card.map((item, index) => (
            <section
              key={index}
              className='deafultPayment_card p-2 rounded w-60 my-4 col-span-12 md:col-span-6'
            >
              <div className='border-b pb-1'>
                {item.cardType === 'visa' ? (
                  <img src={visa} alt='visa' width='30' className='mr-2' />
                ) : (
                  <img src={master} alt='master' width='30' className='mr-2' />
                )}
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
                  {item.makeDefaultCard ? (
                    <div>
                      <i class='fa-solid fa-square-check'></i> Default
                    </div>
                  ) : (
                    <div>
                      <i class='fa-regular fa-square-check'></i> Default
                    </div>
                  )}
                </div>
                <div className='text-xs'>
                  <p>Edit | Remove</p>
                </div>
              </div>
            </section>
          ))}
      </div>
    </div>
  );
};

export default OtherPayment;
