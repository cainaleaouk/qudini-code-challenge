import React from 'react';
import FilterInput from './FilterInput';
import RefreshButton from './RefreshButton';
import styled from 'styled-components';

const ControlsGroup = styled.div`
  width: 400px;
`;

const Button = styled.div`
	float: right;
	margin: -10%;
`

const Controls = (props) => {
	return (
		<ControlsGroup>
			<FilterInput />
			<Button>
      	<RefreshButton />	
      </Button>
		</ControlsGroup>
	);
}


export default Controls;