import React from 'react';
import {shallow} from 'enzyme';
import ConnectedApp, { App }  from '../App';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';


const initialState = {One: 'one'}
const mockStore = configureStore();
const mockFetchData = jest.fn();
let store, wrapper;

const props = {
    fetchUsersRequest: mockFetchData
}


beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<App store={store} {...props}/>)
})

describe('TEST component ListCategory', () => {

    it('TEST spapshot to component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('TEST check call function `fetchUsersRequest()`', () => {
        expect(mockFetchData).toHaveBeenCalled();
    })


})

