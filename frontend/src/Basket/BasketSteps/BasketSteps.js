import React from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import StepSwitcher from "../Components/StepSwitcher/StepSwitcher";
import BasketItemList from "../Step1/BasketItemList";

const BasketSteps = (props) => {
    switch (props.step) {
        case 1:
            return <Step1
                changeStepHandler={(step) => props.changeStepHandler(step)}
                basket={props.basket}
                coupon={props.coupon}
                basketChangeHandler={(basket) => props.basketChangeHandler(basket)}
                couponChangeHandler={(coupon) => props.couponChangeHandler(coupon)}
                loadingChangeHandler={(loading) => props.loadingChangeHandler(loading)}
            />;
        case 2:
            return <Step2
                loadingChangeHandler={(loading) => props.loadingChangeHandler(loading)}
                deliveryList={props.deliveryList}
                deliveryListChangeHandler={(loading) => props.deliveryListChangeHandler(loading)}
            />;
        default:
            return <h2>Empty</h2>;
    }
};

export default BasketSteps
