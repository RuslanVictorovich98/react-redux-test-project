import React from 'react';
import {shallow} from 'enzyme';
import ConnectedHeader, { Header }  from '../Header';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import { mainList } from '../../ducks/lists';

const initialState = {One: 'one'}
const mockStore = configureStore();
const mockFetchData = jest.fn();
const getHistory = jest.fn();

let store, wrapper, props;

beforeEach(()=>{
    store = mockStore(initialState);
    props = {
        pathname: mockFetchData,
        handleSubmit: getHistory,
        mainList: [{category: ''}],
        search: mockFetchData
    }
    wrapper = shallow(<Header store={store}  {...props} onClickFunction={mockFetchData}/>)
})


    describe('TEST component Header', () => {

        it('TEST spapshot to component', () => {
            // expect(wrapper.find('header').text()).toMatchSnapshot();
            expect(toJson(wrapper)).toMatchSnapshot();
        })

        it('Header component', () => {
            expect(wrapper.exists()).toBe(true) // Returns whether or not any nodes exist in the wrapper.
        })

        it('render initial', () => { 
            expect(wrapper.find('h3')).toHaveLength(1)
            expect(wrapper.find('input')).toHaveLength(1) 
        })

        it('dispatches the `getHistory()` function it receives from props', () => {
            expect(mockFetchData).toHaveBeenCalled() // ожидание с нужным ассертом
        })

        it('should call mockFetchData on input change', () => {
           
            wrapper.find('input').simulate('change', {
                      target: { //1
                        value: ''
                    }});
            expect(mockFetchData).toHaveBeenCalled();
            wrapper.unmount();
          });
    })

    
