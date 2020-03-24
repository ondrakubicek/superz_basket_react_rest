import React from 'react';
import styled from 'styled-components';

const StyledStepLink = styled.a`
	text-align: center;
	height: 50px;
	line-height: 48px;
	width: 50px;
	font-size: 24px;
	font-weight: 700;
	border-radius: 50%;
	color: ${props => props.selected ? "white" : props.theme.colors.brown};
	border: 1px solid ${props => props.theme.colors.lightBrown};
	text-decoration: none;
	background: ${props => props.selected ? props.theme.colors.lightBrown : "white"};

}
`;

class Step extends React.Component {
	static defaultProps() {
		order: 1;
		selected: false;
	}

	render() {
		return (
			<StyledStepLink href="#" selected={this.props.selected}>
				{this.props.order}
			</StyledStepLink>
		);
	}
}

export default Step;
