import React from 'react';
import BasketItemList from "../Step1/BasketItemList";
import StepSwitcher from "../Components/StepSwitcher/StepSwitcher";
import TotalPriceBox from "../Step1/TotalPriceBox";

const Step1 = (props) => {
    return (<BasketItemList
        changeBasketEmptyHandler={(value) => props.changeBasketEmptyHandler(value)}
        changeStepHandler={(step) => props.changeStepHandler(step)}
        basket={props.basket}
        coupon={props.coupon}
        basketChangeHandler={(basket) => props.basketChangeHandler(basket)}
        couponChangeHandler={(coupon) => props.couponChangeHandler(coupon)}


    />);

};

export default Step1
