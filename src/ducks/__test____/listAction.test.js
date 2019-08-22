import * as i from '../lists';
// import {category} from '../lists';

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