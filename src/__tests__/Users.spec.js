import React from 'react';
import { shallow } from 'enzyme';
import {User} from '../js/components/Users'


describe('testing User component', () => {
    test('should render User component',()=> {
        const props = { getUsers:jest.fn(), remoteUsers:[]}
        const wrapper = shallow(<User {...props}/>)
        expect(wrapper).toMatchSnapshot()
        // expect(wrapper.find('.list-group-item')).toHaveLength(2)
    })
    // test('should simulate onClik to fetch more users',()=> {
    //     const props = { getUsers:jest.fn(), remoteUsers:[]}
    //     const button = wrapper.find('.fetch-more');
    //     button.simulate('click')
    //     expect(props.getUsers()).toHaveBeenCalledOnce()
    // })
})
