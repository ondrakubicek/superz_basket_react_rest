import React from 'react';
import styled from 'styled-components';
import Step from './Step';

const StyledSwitchetList = styled("ul")`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
	width: 760px;
	padding: 0;
	margin: 0 auto;
`;

const StyledSwitcherListItem = styled("li")`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
`;

const StyledProgressBar = styled("div")`
	position: absolute;
	
`;
const switcherSelected = (order,step) => {
	return step == order;
}



class StepSwitcher extends React.Component {
	render() {
		return (
			<StyledSwitchetList>
				<StyledProgressBar />
				<StyledSwitcherListItem onClick={() => this.props.changeStepHandler(1)}>
					<Step order={1} selected={switcherSelected(1,this.props.step)}/>
				</StyledSwitcherListItem>
				<StyledSwitcherListItem onClick={() => this.props.changeStepHandler(2)}>
					<Step order={2}  selected={switcherSelected(2,this.props.step)}/>
				</StyledSwitcherListItem>
				<StyledSwitcherListItem>
					<Step order={3}  selected={switcherSelected(3,this.props.step)}/>
				</StyledSwitcherListItem>
				<StyledSwitcherListItem>
					<Step order={4}  selected={switcherSelected(4,this.props.step)}/>
				</StyledSwitcherListItem>
			</StyledSwitchetList>
		);
	}
}

export default StepSwitcher;
