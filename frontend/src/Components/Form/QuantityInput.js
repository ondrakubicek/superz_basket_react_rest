import React, {Component} from 'react';
import styled from 'styled-components';

const QuantityInputWrap = styled.span`
   display: flex;
`;

const QuantityInputChangeButton = styled.button`
    cursor: pointer;
    background-color:${props => props.theme.colors.lightGrey};
    font-size: 25px;
    color: #888;
    border: none;
    display: block;
    height: 30px;
    width: 23px;
    text-align: center;
    line-height: 30px;
    &:focus {outline:0;}
`;

const QuantityInputText = styled.input.attrs({
    type: props => props.inputType,
    })`
    background-color: #f4f3f2;;
    text-align: center;
    border-radius: 0;
    border: none;
    width: 80px;
    height: 30px;
     @media screen and (max-width: 800px) {
        width: 100%;
    }
`;


class QuantityInput extends Component {

    quantityChangePlus = () =>  {
        let newQuantity = Number(this.props.quantity);
        newQuantity += 1;
        this.props.quantityUpdateHandler(newQuantity);
    }

    quantityChangeMinus = () =>  {
        let newQuantity = Number(this.props.quantity);
        newQuantity -= 1;
        this.props.quantityUpdateHandler(newQuantity);
    }

    render() {
        return (
            <QuantityInputWrap>
                <QuantityInputChangeButton onClick={() => this.quantityChangeMinus()}>-</QuantityInputChangeButton>
                <QuantityInputText type="text" onChange={(event) => this.props.countChangeHandler(event)} value={this.props.quantity} />
                <QuantityInputChangeButton onClick={() => this.quantityChangePlus()}>+</QuantityInputChangeButton>
            </QuantityInputWrap>
        )
    }

}

export default QuantityInput
