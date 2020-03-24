import React, {Component} from 'react';
import BasketItem from "./BasketItem";
import TotalPriceBox from "./TotalPriceBox";
import styled from "styled-components";
import BasketListHeader from "./BasketListHeader";


const BasketListWrapper = styled.div`
    display: flex;
    margin-top: 30px;
   
   @media screen and (max-width: 800px) {
      flex-direction: column;
    }  
`;
const StyledBasketItemList = styled.ul`
    padding: 0;
    margin:0;
    flex: 5;     
    
   @media screen and (max-width: 800px) {
      flex-direction: column;
    }   
`;

let path = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
const APIBASKET = path + '/api/basket/';

class BasketItemList extends Component {

    constructor(props) {
        super(props);
    }


    deleteHandler = id => {
        this.quantityUpdateHandler(id, 0);
        fetch(APIBASKET + "/" + id + "/", {
            method: 'DELETE',
        });
    };

    quantityUpdateHandler = (id, quantity) => {
        // throw new Error('this should be caught');

        const basketIndex = this.props.basket.findIndex(p => p.basket_id === id);
        const basketItem = {...this.props.basket[basketIndex]};
        const oneItemPriceWithoutVat = basketItem.price.bezna_bez_dph / basketItem.quantity;
        const oneItemPriceWitVat = basketItem.price.bezna_s_dph / basketItem.quantity;

        basketItem.quantity = Number(quantity);
        basketItem.price.bezna_bez_dph = oneItemPriceWithoutVat * quantity;
        basketItem.price.bezna_s_dph = oneItemPriceWitVat * quantity;

        const basket = [...this.props.basket];
        basket[basketIndex] = basketItem;
        this.props.basketChangeHandler(basket);

        fetch(APIBASKET + "/" + id + "/", {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content
            },
            body: JSON.stringify(basketItem) // We send data in JSON format
        });
    }

    countChangeHandler = (event, id) => {
        this.quantityUpdateHandler(id, event.target.value);
    };

    basketList = () => {
        return (
            this.props.basket.map((basketItem) => {
                if(basketItem.quantity > 0) {
                    return (
                        <BasketItem
                            id={basketItem.id}
                            name={basketItem.nazev}
                            price={Math.floor(basketItem.beznacena)}
                            totalPrice={Math.floor(basketItem.price.bezna_s_dph)}
                            quantity={basketItem.quantity}
                            deleteHandler={() => this.deleteHandler(basketItem.basket_id)}
                            countChangeHandler={(event) => this.countChangeHandler(event, basketItem.basket_id)}
                            quantityUpdateHandler={(quantity) => this.quantityUpdateHandler(basketItem.basket_id, quantity)}
                            expedition={basketItem.expedice_desc}
                            hide = {basketItem.quantity > 0 ? 0 : 1}
                        />)
                }
            })
        );
    }

    totalAmount = () => {
        return this.props.basket.reduce((total, item) => total + (parseInt(item.price.bezna_s_dph, 10)), 0);
    }

    totalAmountWithoutVat = () => {
        return this.props.basket.reduce((total, item) => total + (parseInt(item.price.bezna_bez_dph, 10)), 0);
    }

    render() {
        let output = <div><h2>Váš košík je prázdný</h2></div>;
        if(this.props.basket.length) {
            output = (
                <BasketListWrapper>
                    <StyledBasketItemList>
                        <BasketListHeader/>
                        {this.basketList()}
                    </StyledBasketItemList>
                    <TotalPriceBox
                        totalAmount={this.totalAmount()}
                        totalAmountWithoutVat={this.totalAmountWithoutVat()}
                        changeStepHandler={(step) => this.props.changeStepHandler(step)}
                        couponChangeHandler={(coupon) => this.props.couponChangeHandler(coupon)}
                        coupon = {this.props.coupon}
                    />
                </BasketListWrapper>
            )
        }
        return (
            output
        );
    }
};

export default BasketItemList
