import { ADD_USER, DATA_LOADED, LOGIN_DATA } from '../constants/action-types';

const initialState = {
  items: [],
  item: [],
  login: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        item: action.payload,
        // item: state.items.concat(action.payload)
      };

    case LOGIN_DATA:
      return {
        ...state,
        login: action.payload,
        // item: state.items.concat(action.payload)
      };
    default:
      return state;
  }
}