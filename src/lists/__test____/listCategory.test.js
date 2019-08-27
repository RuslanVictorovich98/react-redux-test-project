import React from 'react';
import {shallow} from 'enzyme';
import ConnectedListCategory, { ListCategory }  from '../listCategory';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

const initialState = {One: 'one'}
const mockStore = configureStore();
const mockFetchData = jest.fn();
const renderCategory = jest.fn();
let store, wrapper;

const props = {
    mainList: {products: [{bsr_category: 'Home & Kitchen'}], },
    category: mockFetchData,
    
}

beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ListCategory store={store} {...props} renderCategory={renderCategory} />)
})

describe('TEST component ListCategory', () => {

    it('TEST spapshot to component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('ListCategory component', () => {
        expect(wrapper.exists()).toBe(true) // Returns whether or not any nodes exist in the wrapper.
    })

    it('TEST current loading first category', () => {
        const propsNew = {
            mainList: {products: ['Home & Kitchen']},
            category: mockFetchData,
            
        }
        wrapper = shallow(<ListCategory store={store} {...propsNew}/>)
        expect(wrapper.find('Link').first()).toHaveLength(1)
    })


    it('should call mockFetchData on category click and call `category` function', () => {
           
        wrapper.find('.data-value').simulate('click', {
                  currentTarget: { //1
                    innertText: ''
                }});
        expect(mockFetchData).toHaveBeenCalled();
        expect(wrapper.find('category')).toEqual({});
        
        wrapper.unmount();
      });
})

