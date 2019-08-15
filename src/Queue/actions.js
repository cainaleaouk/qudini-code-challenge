import API from '../controller/api';
import gravatar from 'gravatar';
import moment from 'moment';

const actions = {
	REQUEST_CUSTOMERS: 'REQUEST_CUSTOMERS',
	SUCCESS_CUSTOMERS: 'SUCCESS_CUSTOMERS',
	ERROR_CUSTOMERS: 'ERROR_CUSTOMERS',
	UPDATE_FILTER_INPUT_VALUE: 'UPDATE_FILTER_INPUT_VALUE',
	ON_REFRESH_COOLDOWN_TIMEOUT: 'ON_REFRESH_COOLDOWN_TIMEOUT',
};

const getCustomers = () => {
	return async (dispatch, getState) => {
		dispatch({
			type: actions.REQUEST_CUSTOMERS,
		});

		try {
			const customersJson = await API.get('gj9fs');

			// For this exercise I only need name, expectedTime and avatarUrl
			const customers = customersJson.queueData.queue.customersToday.map((booking) => {
				return {
					expectedTime: moment(booking.expectedTime).format('h:mm A'),
					name: booking.customer.name,
					avatarUrl: `http:${gravatar.url(booking.customer.emailAddress)}?s=290`,
				}
			});

			setTimeout(() => {
				dispatch({type: actions.ON_REFRESH_COOLDOWN_TIMEOUT});
			}, 30000);

			dispatch({
				payload: customers,
				type: actions.SUCCESS_CUSTOMERS,
			});
		} catch (error) {
			dispatch({
				type: actions.ERROR_CUSTOMERS,
				error
			});
		}
	};
};

const onFilterInputChange = (value) => {
	return {
		type: actions.UPDATE_FILTER_INPUT_VALUE,
		payload: value, 
	};
}


export {
	actions,
	getCustomers,
	onFilterInputChange,
}
