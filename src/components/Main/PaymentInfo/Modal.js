import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalAction } from '../../redux/action';

const Modal = ({ children }) => {
  const { modal } = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalAction(false));
  };

  return (
    <div>
      {modal.isOpen && (
        <div className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full bottom-0 modal_wrapper grid items-center justify-center'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 modal_card mx-auto dark:border-gray-600 p-5'>
            <button
              onClick={closeModal}
              className='absolute right-2 top-1 cursor-pointer'
            >
              <i className='fa-solid fa-xmark text-lg'></i>
            </button>

            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
