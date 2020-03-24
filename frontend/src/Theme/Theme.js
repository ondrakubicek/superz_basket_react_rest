import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		brown: '#4b3e2e',
		lightBrown: '#b49158',
		lightGrey: '#e2e2e2',
	}
};

class Theme extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
		);
	}
}

export default Theme;
