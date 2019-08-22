import {call, put, takeLatest} from 'redux-saga/effects';

import * as i from '../lists';

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
      // const url = '/data.json';
      // const response = () => {
      //   return fetch(url)
      //           .then(res => res.json())
      //   }

      // expect(generator.next().value).toEqual(call());
      // expect(generator.next().done).toBeTruthy()
      generator.next();
      expect(generator.next(mockResponse).value).toEqual(put({type: i.LET_LIST, payload: undefined}))
      expect(generator.next().done).toBeTruthy()
    })
})
