import React from 'react';
import {shallow} from 'enzyme';
import ListOneProduct from '../listOneProduct';

describe('TEST component listOneProduct', () => {
    const props = {
        product: undefined,
    }

    it('TEST render to component', () => {
        const nextProps = {
            ...props, 
            product: {img: ''}
        }
        const wrapper = shallow(<ListOneProduct {...nextProps} />)
        expect(wrapper.find('.content').text()).toMatchSnapshot();
    })

    it('ListOneProduct component', () => {
        const nextProps = {
            ...props, 
            product: {img: ''}
        }
        const wrapper = shallow(<ListOneProduct {...nextProps} />)
        expect(wrapper.exists()).toBe(true) // Returns whether or not any nodes exist in the wrapper.
    })

    it('Count element to component', () =>  {
        const nextProps = {
            ...props, 
            product: [{img: ''}]
        }
        const wrapper = shallow(<ListOneProduct {...nextProps} />)
        expect(wrapper.find('.content-body')).toHaveLength(1)
    })
})