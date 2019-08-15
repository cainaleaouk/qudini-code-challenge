import React from 'react';
import { connect } from 'react-redux';
import { onFilterInputChange } from '../actions';

const FilterInput = (props) => {
	
	return (
		<div>
			<label htmlFor="filter">Filter</label>
			<br/>
			<input 
				id='filter'
				type="text" 
				name="filter" 
				value={props.filterInputValue}
				onChange={(evt) => {
					props.onFilterInputChange(evt.target.value);
				}}
			/>
		</div>
	);
}

const mapStateToProps = (state) => {
  return {
    filterInputValue: state.queue.filterInputValue,
  };
}

const mapDispatchToProps = { 
   onFilterInputChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput);