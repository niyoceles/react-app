import {
  ADD_USER, LOGIN_DATA, DATA_LOADED, CREATE_USER,
} from '../constants/action-types';

export const addUser = payload => ({ type: ADD_USER, payload });

export function fetchUser() {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    return fetch('https://banka-apps.herokuapp.com/api/v1/auth/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        // 'access-token': localStorage.getItem('token'),
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((users) => {
        // console.log('now what', users.data);
        dispatch({ type: DATA_LOADED, payload: users.data });
      }).catch(error => console.log('error', error));
  };
}


export function loginData(postLoginData) {
  const token = '';
  // eslint-disable-next-line func-names
  return function (dispatch) {
    return fetch('https://banka-apps.herokuapp.com/api/v1/auth/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'access-token': token,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postLoginData),
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({ type: LOGIN_DATA, payload: json });
      }).catch(error => console.log('error', error));
  };
}

export function createUser(createUserData) {
  // const token = localStorage.getItem('token');
  // eslint-disable-next-line func-names
  return function (dispatch) {
    return fetch('https://banka-apps.herokuapp.com/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        // 'access-token': token,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(createUserData),
    })
      .then(response => response.json())
      .then((userInfo) => {
        console.log('now what', userInfo.data);
        dispatch({ type: CREATE_USER, payload: userInfo });
      }).catch(error => console.log('error', error));
  };
}
