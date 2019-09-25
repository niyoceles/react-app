import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from '../js/components/Auth';

const props = {
  loginData: jest.fn(),
  aaa: { login: { token: '' } },
  newUser: { item: '' },
  handleSubmitSignup: jest.fn(),
  signUp: jest.fn()
};

describe('testing Login component', () => {
  test('should render Login component', () => {
    const wrapper = shallow(<Auth {...props} />);
    expect(wrapper).toHaveLength(1);
  });


  it('renders Auth with toggleModalsignUp ', () => {
    const component = shallow(<Auth {...props} />);
    component.instance().toggleModalsignUp();
    expect(component).toHaveLength(1);
  });

  it('renders Auth with toggleModalsignIn ', () => {
    const component = shallow(<Auth {...props} />);
    component.instance().toggleModalsignIn();
    expect(component).toHaveLength(1);
  });

  it('renders Auth with handleSubmitSignup ', () => {
    const component = shallow(<Auth {...props} />);
    component.instance().handleSubmitSignup({ preventDefault: jest.fn() });
    expect(component).toHaveLength(1);
  });

  it('renders Auth with handleSubmit ', () => {
    const component = shallow(<Auth {...props} />);
    component.instance().handleSubmit({ preventDefault: jest.fn() });
    expect(component).toHaveLength(1);
  });
});
