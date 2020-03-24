import React from 'react';
import BasketItemList from "../Step1/BasketItemList";
import DeliveryList from "../Step2/DeliveryList";
import Step1 from "./Step1";
import BasketSteps from "./BasketSteps";

const Step2 = (props) => {
    return (<DeliveryList
        loadingChangeHandler={(loading) => props.loadingChangeHandler(loading)}
        deliveryList={props.deliveryList}
        deliveryListChangeHandler={(loading) => props.deliveryListChangeHandler(loading)}

    />);

};

export default Step2
