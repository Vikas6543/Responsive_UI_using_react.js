import React from 'react';
import visa from '../../../assets/visa.png';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { modalAction, cardAction } from '../../redux/action';
import master from '../../../assets/master.png';
import { months } from './Data';

const DefaultPayment = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [month, setMonth] = React.useState('January');
  const [year, setYear] = React.useState('2021');
  const [cardType, setCardType] = React.useState('visa');
  const [makeDefaultCard, setMakeDefaultCard] = React.useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(modalAction(true));
  };

  const closeModal = () => {
    dispatch(modalAction(false));
  };

  const saveModal = (e) => {
    e.preventDefault();
    const card = {
      firstName,
      lastName,
      cardNumber,
      month,
      year,
      cardType,
      makeDefaultCard,
    };
    dispatch(cardAction(card));
    dispatch(modalAction(false));
  };

  return (
    <div>
      <Modal>
        <div className='border-b mt-3'>
          <p className='pb-1 font-bold'>Add New Card</p>
        </div>

        <div className='mt-4'>
          <form>
            <div>
              <div className='flex w-80 items-center  sm:justify-between pb-1'>
                <label class='block text-xs' htmlFor='number'>
                  Card Number *
                </label>
                <div className='ml-10 xs:ml-24 :ml-0'>
                  <div className='flex'>
                    <img src={master} alt='master' width='30' />
                    <img src={visa} alt='master' width='40' />
                  </div>
                </div>
              </div>
              <input
                className='shadow appearance-none border rounded py-2 px-3 sm:w-80 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='number'
                type='number'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            <div className='my-6'>
              <label className='block pb-2 text-xs' htmlFor='date'>
                Expire Date *
              </label>
              <select
                className='shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:w-40 w-full'
                id='date'
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                {months.map((month) => (
                  <option key={month.id} value={month.name}>
                    {month.name}
                  </option>
                ))}
              </select>
              <select
                className='shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:w-40 w-full mt-3 sm:mt-0 sm:mx-4'
                id='date'
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type='number'
                defaultValue='2021'
              >
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
              </select>
              <label className='block mt-6 pb-2 text-xs' htmlFor='card_type'>
                Card Type *
              </label>
              <select
                className='shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-40'
                id='card_type'
                type='text'
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
              >
                <option value='visa'>visa</option>
                <option value='master'>master</option>
              </select>
            </div>

            <div>
              <label className='block pb-2 text-xs' htmlFor='name'>
                Name on Card *
              </label>
              <input
                className='shadow appearance-none border rounded py-2 px-3 w-full sm:w-40 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className='shadow appearance-none border rounded py-2 px-3 sm:ml-4 mt-3 sm:mt-0 sm:w-40 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className='mt-6 border-b pb-6 flex items-center'>
              <input
                type='checkbox'
                value={makeDefaultCard}
                onChange={(e) => setMakeDefaultCard(!makeDefaultCard)}
              />
              <label
                className='block pl-1 text-xs font-bold'
                htmlFor='checkbox'
              >
                Make this as my default payment card
              </label>
            </div>

            <div className='flex justify-end items-center pt-6'>
              <div className='mr-4 rounded border px-4 py-2 cursor-pointer'>
                <button onClick={closeModal}>Cancel</button>
              </div>
              <div className='save_card_btn px-4 py-2 rounded'>
                <button type='submit' onClick={saveModal}>
                  Save Card
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>

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

        <section className='deafultPayment_card p-2 rounded w-60 sm:mt-6 my-10 ml-8 sm:ml-0'>
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
