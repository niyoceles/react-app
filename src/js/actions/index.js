import { ADD_USER, LOGIN_DATA, DATA_LOADED } from "../constants/action-types";

export const addUser = (payload) => {
  return { type: ADD_USER, payload };
}

export const fetchTask = () => dispatch =>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => 
      dispatch({
          type:DATA_LOADED,
          payload: posts
      })
      );
};

export const createPost = (post)=> dispatch =>{
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        // 'access-token': token,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
    .then(res => res.json())
    .then((post) => dispatch({
      type: "NEW_TASK",
      payload: post
  }));
};

export function getUsers() {
  // let token = '';
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'access-token': localStorage.getItem('token'),
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(user => {
        dispatch({ 
          type: DATA_LOADED, 
          payload: user 
        });
      });
  };
}

export function loginData(postLoginData) {
  let token = '';
  return function(dispatch) {
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
      .then(json => {
        dispatch({ type: LOGIN_DATA, payload: json });
      });
  };
}
