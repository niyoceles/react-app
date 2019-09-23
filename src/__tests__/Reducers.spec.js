import React from 'react';
import { shallow } from 'enzyme';
import reducer from '../js/reducers/userReducers';

describe('Testing Reducers Action type SIGNUP', () => {
  test(' Reducer should be', () => {
    const action = { type: 'SIGN_UP', payload: { } };
    expect(reducer({}, action)).toEqual({ });
  });
});

describe('Testing Reducers Action type DATA_LOADED', () => {
  test(' Reducer should be ', () => {
    const action = { type: 'DATA_LOADED', payload: { } };
    expect(reducer({}, action)).toEqual({ });
  });
});

describe('Testing Reducers Action type LOGIN_DATA', () => {
  test(' Reducer should be', () => {
    const action = { type: 'LOGIN_DATA', payload: { } };
    expect(reducer({}, action)).toEqual({ });
  });
});
