import 'babel-polyfill';
import axios from 'axios';
import {
  LOGIN_SUCCESS, LOGIN_FAILURE, DATA_LOADED_FAILURE, DATA_LOADED_SUCCESS, SIGN_UP
} from '../constants/action-types';

export const fetchUser = () => async (dispatch) => {
  try {
    const users = await axios.get('https://banka-apps.herokuapp.com/api/v1/auth/users');
    dispatch({ type: DATA_LOADED_SUCCESS, payload: users.data.data });
  } catch (error) {
    dispatch({ type: DATA_LOADED_FAILURE, payload: error.response.data.error });
  }
};


export const loginData = postLoginData => async (dispatch) => {
  try {
    const signin = await axios.post('https://banka-apps.herokuapp.com/api/v1/auth/signin', {
      postLoginData
    });
    dispatch({ type: LOGIN_SUCCESS, payload: signin.data.message });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error });
  }
};

export function signUp(signUpData) {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    return fetch('https://banka-apps.herokuapp.com/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        // 'access-token': token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(signUpData)
    })
      .then(response => response.json())
      .then((userInfo) => {
        // console.log('now what', userInfo.data);
        dispatch({ type: SIGN_UP, payload: userInfo });
      }).catch(error => console.log('error', error));
  };
}
