import {put, takeLatest} from 'redux-saga/effects';
import * as i from '../lists';

// actionsCreator
describe('TEST list actions', () => {
    it('fetchUsersRequest', () => {
        expect(i.fetchUsersRequest()).toEqual({
            type: i.FETCH_USERS_REQUEST,
        })
    })

    it('create', () => {
        const data = [{}, {}];
        const categoryActions = {
            type: i.LET_LIST,
            payload: data
        }

        expect(i.create(data)).toEqual(categoryActions)
    })

    it('category', () => {
        const data = 'new data';
        const categoryActions = {
            type: i.SET_CATEGORY,
            payload: data
        }

        expect(i.category(data)).toEqual(categoryActions)
    })

    it('search', () => {
        const data = 'new data'
        const categoryActions = {
            type: i.SEARCH_DATA,
            payload: data
        }

        expect(i.search(data)).toEqual(categoryActions)
    })

    it('pathname', () => {
        const data = {};
        const categoryActions = {
            type: i.PATHNAME_DATA,
            payload: data
        }
        
        expect(i.pathname(data)).toEqual(categoryActions)
    })
})

// reducers
describe('TEST lists reducers', () => {
    it('LET_LIST' , () => {
        const action = {
            type: i.LET_LIST,
            payload: [{}, {}]
        }

        expect(i.mainList(i.list, action)).toEqual({
            ...i.list,
            products: action.payload,
            firstRender: true,
            historySearch: '',
            loading: false,
            category: 'All category',
            search: ''
        }) 
    })

    it('SET_CATEGORY', () => {
        const action = {
            type: i.SET_CATEGORY,
            payload: 'event'
        }

        expect(i.mainList(i.list, action)).toEqual({
            ...i.list,
            products: [],
            firstRender: false,
            historySearch: '',
            loading: true,
            category: action.payload,
            search: ''
        })
    })

    it('SEARCH_DATA', () => {
        const action = {
            type: i.SEARCH_DATA,
            payload: 'search'
        }

        expect(i.mainList(i.list, action)).toEqual({
            ...i.list,
            products: [],
            firstRender: false,
            historySearch: '',
            loading: true,
            category: '',
            search: action.payload 
        })
    })

    it('PATHNAME_DATA', () => {
        const action = {
            type: i.PATHNAME_DATA,
            payload: {
                pathname: '',
                search: ''
            }

        }

        expect(i.mainList(i.list, action)).toEqual({
            ...i.list,
            products: [],
            firstRender: true,
            historySearch: action.payload.search,
            loading: true,
            category: action.payload.pathname,
            search: action.payload.search 
        })
    })
})

// SAGA
global.fetch = require ('jest-fetch-mock');

describe('TEST lists SAGA', () => {
    it('should dispatch action "FETCH_USERS_REQUEST" ', () => {
        const generator = i.GetProduct();
        expect(generator.next().value)
          .toEqual(takeLatest(i.FETCH_USERS_REQUEST, i.fetchProduct));
        expect(generator.next().done).toBeTruthy();
      })

    it('should dispatch action "create" with result from fetch Product API', () => {
      const mockResponse = {Products: 'Some content'}; 
      const generator = i.fetchProduct();
      
      expect(generator.next().value.type).toEqual("CALL");
      expect(generator.next(mockResponse).value).toEqual(put({type: i.LET_LIST, payload: undefined}))
      expect(generator.next().done).toBeTruthy()
    })
})
