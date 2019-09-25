import reducer from '../js/reducers/userReducers';

describe('Testing Reducers Action type SIGNUP', () => {
  test(' Reducer should be', () => {
    const action = { type: 'SIGN_UP_SUCCESS', payload: { } };
    expect(reducer({}, action)).toEqual({ item: {} });
  });

  test(' Reducer should not be', () => {
    const action = { type: 'SIGN_UP_FAILURE', payload: { } };
    expect(reducer({}, action)).toEqual({ error: {} });
  });
});

describe('Testing Reducers Action type DATA_LOADED', () => {
  test(' Reducer should be ', () => {
    const action = { type: 'DATA_LOADED_SUCCESS', payload: { } };
    expect(reducer({}, action)).toEqual({ items: {} });
  });

  test(' Reducer should not be ', () => {
    const action = { type: 'DATA_LOADED_FAILURE', payload: { } };
    expect(reducer({}, action)).toEqual({ error: {} });
  });
});

describe('Testing Reducers Action type LOGIN_DATA', () => {
  test(' Reducer should be', () => {
    const action = { type: 'LOGIN_SUCCESS', payload: { } };
    expect(reducer({}, action)).toEqual({ login: { } });
  });

  test(' Reducer should not be', () => {
    const action = { type: 'LOGIN_FAILURE', payload: { } };
    expect(reducer({}, action)).toEqual({ error: {} });
  });
});
