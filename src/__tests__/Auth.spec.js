import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from '../js/components/Auth';


describe('testing Login component', () => {
  test('should render Login component', () => {
    const props = { loginData: jest.fn(), aaa: { login: { token: '' } }, newUser: { item: '' } };
    const wrapper = shallow(<Auth {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
