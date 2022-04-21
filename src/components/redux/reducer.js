import { SET_CARD_TYPE, SET_MODAL_TYPE } from './constant';

const initialState = {
  card: [],
  modal: {
    isOpen: false,
  },
  menu: {
    isMenuOpen: false,
  },
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_TYPE:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_TYPE:
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    default:
      console.log(state);
      return state;
  }
};
