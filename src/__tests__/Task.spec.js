import React from 'react';
import { shallow } from 'enzyme';
import {Posts} from '../js/components/Posts'


describe('testing Posts component', () => {
    test('should render Posts component',()=> {
        const props = { fetchTask:jest.fn(), remoteUsers:[],}
        const wrapper = shallow(<Posts {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })
})