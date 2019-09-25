import React from 'react';
import { shallow } from 'enzyme';
import { Users } from '../js/components/Users';


describe('testing Users component', () => {
  test('should render Users component', () => {
    const props = { fetchUser: jest.fn(), remoteUsers: [] };
    const wrapper = shallow(<Users {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
