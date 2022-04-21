import { SET_CARD_TYPE, SET_MODAL_TYPE } from './constant';

export const modalAction = (isOpen) => {
  return {
    type: SET_MODAL_TYPE,
    payload: isOpen,
  };
};

export const cardAction = (card) => {
  return {
    type: SET_CARD_TYPE,
    payload: card,
  };
};
