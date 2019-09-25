import 'babel-polyfill';
import axios from 'axios';
import {
  LOGIN_SUCCESS, LOGIN_FAILURE, DATA_LOADED_FAILURE, DATA_LOADED_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS
} from '../constants/action-types';

export const fetchUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.replace('/');
  }
  try {
    const headers = {
      'Content-Type': 'application/json',
      'access-token': token
    };
    const users = await axios.get('https://banka-apps.herokuapp.com/api/v1/auth/users', {
      headers
    });
    dispatch({ type: DATA_LOADED_SUCCESS, payload: users.data.data });
  } catch (error) {
    dispatch({ type: DATA_LOADED_FAILURE, payload: error.response.data.error });
  }
};


export const loginData = postLoginData => async (dispatch) => {
  try {
    const signin = await axios.post('https://banka-apps.herokuapp.com/api/v1/auth/signin', {
      ...postLoginData
    });

    if (signin.status === 200) {
      window.location.replace('/users');
    }
    localStorage.setItem('token', signin.data.token);
    localStorage.setItem('userDetails', JSON.stringify(signin.data));
    dispatch({ type: LOGIN_SUCCESS, payload: signin.data.message });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error });
  }
};


export const signUp = signUpData => async (dispatch) => {
  try {
    const { data } = await axios.post('https://banka-apps.herokuapp.com/api/v1/auth/signup', {
      ...signUpData
    });
    if (data.status === 201) {
      window.location.replace('/users');
    }
    localStorage.setItem('token', data.token);
    localStorage.setItem('userDetails', JSON.stringify(data));
    localStorage.setItem('isloggedIn', true);
    dispatch({ type: SIGN_UP_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILURE, payload: error.response.data.error });
  }
};

export function logout() {
  localStorage.clear();
  window.history.pushState({ title: 'Banka' }, 'Banka', '/');
  window.location.reload(true);
}
