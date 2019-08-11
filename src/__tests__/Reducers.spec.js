import React from 'react';
import { shallow } from 'enzyme';
import reducer from '../js/reducers/userReducers';

describe('Testing Reducers Action type SIGNUP', () => {
  test(' Reducer should be', () => {
    const action = { type: 'SIGN_UP', payload: { user: { username: 'celestin' } } };
    expect(reducer({}, action)).toEqual({ item: { user: { username: 'celestin' } } });
  });
});

describe('Testing Reducers Action type DATA_LOADED', () => {
  test(' Reducer should be ', () => {
    const action = { type: 'DATA_LOADED', payload: { users: {} } };
    expect(reducer({}, action)).toEqual({ items: { users: { } } });
  });
});

describe('Testing Reducers Action type LOGIN_DATA', () => {
  test(' Reducer should be', () => {
    const action = { type: 'LOGIN_DATA', payload: { user: { username: 'celestin', password: 'Password@123' } } };
    expect(reducer({}, action)).toEqual({ login: { user: { username: 'celestin', password: 'Password@123' } } });
  });
});
