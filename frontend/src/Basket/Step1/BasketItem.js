import React from 'react';
import styled from 'styled-components';
import QuantityInput from "../../Components/Form/QuantityInput";
import ProductImage from "../../Components/ProductImage";

const BasketLi = styled.li`
    list-style: none;
    padding: 20px 0px;
    display: flex;
    flex-basis: 0;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
    transition: all 150ms linear;
    opacity: ${props => props.hide ? 0 : 1};
`;

const Expedition = styled.span`
    font-size: 0.8em;
`;
const BasketItemCol = styled.span`
    flex: ${props => props.flex ? props.flex : 1};
    padding-left: 10px;
    padding-right: 10px;
     @media screen and (max-width: 800px) {
        width: 100%;
        display: block;
        padding-bottom: 10px;
    }
`;

const DeleteButton = styled.button`
      color: white;
      background-color: indianred;
      font-size: 1em;
      padding: 0.25em 1em;
      border: 2px solid indianred;
      border-radius: 3px;
      margin-left: 10px;
      float: right;
`;

const BasketItem = (props) => {
    return (
        <BasketLi>
            <BasketItemCol><ProductImage productId={props.id} /></BasketItemCol>
            <BasketItemCol flex={4}>{props.name}</BasketItemCol>
            <BasketItemCol><QuantityInput countChangeHandler={(event) => props.countChangeHandler(event)} quantity={props.quantity} quantityUpdateHandler={(quantity) => props.quantityUpdateHandler(quantity)} /></BasketItemCol>
            <BasketItemCol flex={2}><Expedition>{props.expedition}</Expedition></BasketItemCol>
            <BasketItemCol>{props.price}</BasketItemCol>
            <BasketItemCol>{props.totalPrice}</BasketItemCol>
            <BasketItemCol><DeleteButton onClick={props.deleteHandler}>odebrat</DeleteButton></BasketItemCol>
        </BasketLi>
    );
};

export default BasketItem
