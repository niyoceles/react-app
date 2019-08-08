import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../js/components/Login';


describe('testing Login component', () => {
  test('should render Login component', () => {
    const props = { loginData: jest.fn(), newLogin: { login: { token: 'helo' } } };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
