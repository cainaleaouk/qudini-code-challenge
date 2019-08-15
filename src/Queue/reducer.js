// import { List } from 'immutable';
// Never used immutable before, had a serialisation error when trying to create a new `List.of()` chose to comment out to be able to do the rest with the time I had

import { actions } from './actions';

export const initialState = {
    customers: [],
    isLoading: false,
    error: null,
    filterInputValue: '',
    refreshEnabled: false,
};

export default (state = initialState, action) => {
    switch(action.type) {
    		case actions.REQUEST_CUSTOMERS: 
    			return { ...state, isLoading: true, refreshEnabled: false };

    		case actions.SUCCESS_CUSTOMERS:
    			return { ...state, customers: action.payload, isLoading: false };

    		case actions.ERROR_CUSTOMERS:
    			return { ...state, error: action.error, isLoading: false };

    		case actions.UPDATE_FILTER_INPUT_VALUE:
    			return { ...state, filterInputValue: action.payload};

    		case actions.ON_REFRESH_COOLDOWN_TIMEOUT:
    			return { ...state, refreshEnabled: true}

        default:
            return state;
    }
}
