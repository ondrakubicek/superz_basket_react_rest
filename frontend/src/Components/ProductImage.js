import React, {Component} from 'react';
import styled from 'styled-components';




let path = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
const APIIMAGE = path + '/api/image/';



class ProductImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: {
                url : ""
            },
        };
    }

    componentDidMount() {
        const url = APIIMAGE + "/mini_product/" + this.props.productId + "/";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({img: data}));
    }

    render() {
        return (
            <img src={this.state.img.url} />
        )
    }

}

export default ProductImage
