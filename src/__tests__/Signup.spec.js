import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../js/components/Signup';


describe('testing Create user component', () => {
  test('should render create user component', () => {
    const props = { signUp: jest.fn(), newUser: { item: '' } };
    const wrapper = shallow(<SignUp {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
