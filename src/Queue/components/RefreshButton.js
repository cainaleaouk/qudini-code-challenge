import React from 'react';
import { connect } from 'react-redux';
import { getCustomers } from '../actions';

const RefreshButton = (props) => {
	return (
		<button 
			disabled={!props.buttonEnabled}
			onClick={(evt) => {
				props.getCustomers();
			}}
		>
			Refresh
		</button>
	);
}

const mapStateToProps = (state) => {
  return {
    buttonEnabled: state.queue.refreshEnabled,
  };
}

const mapDispatchToProps = { getCustomers }

export default connect(mapStateToProps, mapDispatchToProps)(RefreshButton);