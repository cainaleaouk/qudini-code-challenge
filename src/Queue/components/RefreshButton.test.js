import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import reducer, { initialState } from '../reducer';
import configureStore from 'redux-mock-store'

import RefreshButton from './RefreshButton';

import { actions } from '../actions';

configure({adapter: new Adapter()});

const mockStore = configureStore();

let reducerMock = { queue: initialState };

let store = mockStore(reducerMock);

beforeEach(() => {
  store = mockStore({ queue: initialState });
  store.subscribe(updateMock);
});

describe(`the refresh button component`, () => {
    it(`should have all props coming from redux`, () => {
        const wrapper = shallow(<RefreshButton store={store} />);

        expect(wrapper.find('RefreshButton').props()).toHaveProperty('buttonEnabled');
        expect(wrapper.find('RefreshButton').props()).toHaveProperty('getCustomers');
    });

    it(`should have buttonEnabled set to true out of cooldown`, () => {
        store.dispatch({type: actions.ON_REFRESH_COOLDOWN_TIMEOUT});

        const wrapper = shallow(<RefreshButton store={store} />);

        expect(wrapper.find('RefreshButton').prop('buttonEnabled')).toEqual(true);
    });

    it(`should have buttonEnabled set to false after getCustomers is called`, () => {
        store.dispatch({type: actions.REQUEST_CUSTOMERS});

        const wrapper = shallow(<RefreshButton store={store} />);

        expect(wrapper.find('RefreshButton').prop('buttonEnabled')).toEqual(false);
    });
});

const updateMock = () => {
    reducerMock.queue = reducer(initialState, store.getActions()[0]);
    store = mockStore(reducerMock);
}