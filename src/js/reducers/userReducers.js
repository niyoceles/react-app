import {
  SIGN_UP_SUCCESS, SIGN_UP_FAILURE, DATA_LOADED_FAILURE, DATA_LOADED_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../constants/action-types';

const initialState = {
  items: [],
  item: [],
  login: [],
  error: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED_SUCCESS:
      return {
        ...state,
        items: action.payload
      };

    case DATA_LOADED_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        item: action.payload
        // item: state.items.concat(action.payload)
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
        // item: state.items.concat(action.payload)
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload
        // item: state.items.concat(action.payload)
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
        // item: state.items.concat(action.payload)
      };
    default:
      return state;
  }
}
