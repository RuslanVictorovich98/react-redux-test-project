import React from 'react';
import {shallow} from 'enzyme';
import ConnectedListProducts, { ListProducts }  from '../listProducts';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';


const initialState = {One: 'one'}
const mockStore = configureStore();
let store, wrapper;

const props = {
    mainList: {
        products: [{bsr_category: 'sda'}],
        loading: true,
        category: '',
        firstRender: true,
        search: ''
    }
}

beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ListProducts store={store} {...props}/>)
})

describe('TEST component ListCategory', () => {

    it('TEST spapshot to component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('TEST viev `div` - loading correct', () => {
        expect(wrapper.find('.content-loading').text()).toEqual('loading...')
    })

    it('TEST render component in loading = false', () => {
        const newProps = {
            ...props,
            mainList: {
                products: [{bsr_category: 'all-category'}],
                loading: false,
                category: 'all-category',
                firstRender: false,
                search: ''
            },

        }
        wrapper =  shallow(<ListProducts store={store} {...newProps}/>)
        expect(wrapper.find('ListOneProduct')).toHaveLength(1)
        
    })

    it('TEST component renter when search it have value', () => {
        const newProps = {
            ...props,
            mainList: {
                products: [{name: 'a3', bsr_category: 'Home & Kitchen'}],
                loading: false,
                category: 'Home & Kitchen',
                firstRender: false,
                search: 'a3'
            },
        }
        wrapper =  shallow(<ListProducts store={store} {...newProps}/>)
        expect(wrapper.find('ListOneProduct')).toHaveLength(1)
    })

  
})

