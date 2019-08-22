import * as i from '../lists';

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

