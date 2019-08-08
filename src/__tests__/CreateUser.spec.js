import React from 'react';
import { shallow } from 'enzyme';
import { CreateUser } from '../js/components/CreateUser';


describe('testing Create user component', () => {
  test('should render create user component', () => {
    const props = { createUser: jest.fn() };
    const wrapper = shallow(<CreateUser {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
