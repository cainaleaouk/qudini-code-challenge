import reducer, { initialState } from "./reducer";

import { actions } from './actions';

describe(`the reducer module`, () => {
    it(`should have the following initialState`, () => {
        expect(initialState).toHaveProperty('customers');
        //expect(initialState.customers).toHaveProperty('size', 0);
        // Commentted it out for the same reason on line 2 from ./reducer.js
    });

    it(`should return the initialState on the default case`, () => {
        // Given
        const action = {
            type: 'TEST'
        };

        // When
        const result = reducer(undefined, action);

        // Then
        expect(result).toEqual(initialState)
    });

    describe('Customers', () => {
        it(`should set state correctly when making an API request.`, () => {

            const action = {
                type: actions.REQUEST_CUSTOMERS,
            }

            const result = reducer(undefined, action);

            expect(result).toEqual({
                ...initialState,
                isLoading: true,
            });
        });

        it(`should set state correctly when the API request succeeds.`, () => {

            const PAYLOAD = [1, 2, 3];
            const action = {
                type: actions.SUCCESS_CUSTOMERS,
                payload: PAYLOAD,
            }

            const result = reducer(undefined, action);

            expect(result).toHaveProperty('customers');
            expect(result.customers).toEqual(PAYLOAD);
            expect(result.isLoading).toEqual(false);
        });

        it(`should set state correctly when the API request fails.`, () => {

            const ERROR = new Error('No likey');
            const action = {
                type: actions.ERROR_CUSTOMERS,
                error: ERROR
            }

            const result = reducer(undefined, action);

            expect(result.isLoading).toEqual(false);
            expect(result.error).toEqual(ERROR);
        });
    });

    describe('Filter', () => {
         it(`should set state correctly when filter input is received.`, () => {

            const PAYLOAD = 'aaaa';
            const action = {
                type: actions.UPDATE_FILTER_INPUT_VALUE,
                payload: PAYLOAD,
            }

            const result = reducer(undefined, action);

            expect(result.filterInputValue).toEqual(PAYLOAD);
        });
    });

    describe('Refresh', () => {
         it(`should set state correctly when refresh is out of cooldown.`, () => {

            const action = {
                type: actions.ON_REFRESH_COOLDOWN_TIMEOUT,
            }

            const result = reducer(undefined, action);

            expect(result.refreshEnabled).toEqual(true);
        });
    });

});
