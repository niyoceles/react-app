import moxios from 'moxios';
import store from '../__mocks__/store';
import { fetchUser, loginData } from '../js/actions/index';
import {
  SIGN_UP_FAILURE, SIGN_UP_SUCCESS, DATA_LOADED_SUCCESS, DATA_LOADED_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../js/constants/action-types';


describe('Actions Test', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  describe('Actions for fetchUser', () => {
    it('should get all users', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: { message: 'successful get all users' }
        });
      });

      return store.dispatch(fetchUser()).then(() => {
        expect(store.getActions()).toEqual([
          {
            type: DATA_LOADED_SUCCESS,
            payload: undefined
          }
        ]);
      });
    });

    it('should not get all users', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: { message: 'error' }
        });
      });
      return store.dispatch(fetchUser()).then(() => {
        expect(store.getActions()).toEqual([
          {
            type: DATA_LOADED_FAILURE,
            payload: undefined
          }
        ]);
      });
    });
  });

  describe('Actions for loginData', () => {
    it('should login success', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: { message: 'successful login' }
        });
      });

      return store.dispatch(loginData()).then(() => {
        expect(store.getActions()).toEqual([
          {
            type: LOGIN_SUCCESS,
            payload: 'successful login'
          }
        ]);
      });
    });

    it('should not not login', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: { message: 'error' }
        });
      });
      return store.dispatch(loginData()).then(() => {
        expect(store.getActions()).toEqual([
          {
            type: LOGIN_FAILURE,
            payload: undefined
          }
        ]);
      });
    });
  });
});
