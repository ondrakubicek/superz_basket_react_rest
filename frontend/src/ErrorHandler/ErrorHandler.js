import React, {Component} from 'react';
import ErrorMessage from "../Components/ErrorMessage";


class ErrorHandler extends Component {
    constructor(props) {
        super(props)
        this.state = { errorOccurred: false }
    }

    componentDidCatch(error, info) {
        this.setState({ errorOccurred: true })
    }

    render() {
        return this.state.errorOccurred ? <ErrorMessage><h1>Something went wrong!</h1></ErrorMessage> : this.props.children
    }
}

export  default ErrorHandler
