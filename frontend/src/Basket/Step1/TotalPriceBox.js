import React from 'react';
import styled from 'styled-components';
import StepSwitcher from "../Components/StepSwitcher/StepSwitcher";
import CouponeBox from "./CouponeBox";

const StyledTotalPriceBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 300px;
    float: right;
    background: ${props => props.theme.colors.lightGrey};
    padding: 20px;
    margin-left: 30px;
    
    @media screen and (max-width: 800px) {
        width: 100%;
        float: none;
        display: block;
        padding: 10px;
        margin: -10px;
        border-radius: 0;
        margin-bottom: 100px;
    }
`;

const StyledTotalAmount = styled.span`
   display: flex;
   border-bottom: 1px solid #ccc;
   padding-bottom: 10px;
`;
const StyledTotalAmountValue = styled.span`
    text-align: right;
    flex: 1;
    font-size: 2em;
`;
const StyledTotalAmountWithoutVat = styled.span`
   display: flex;
   padding-top: 10px;
`;
const StyledTotalAmountWithoutVatValue = styled.span`
    flex: 1;
   text-align: right;
    font-size: 1em;
`;
const NextStepButton = styled.button`
      color: #fff;
      font-weigh: bold;
      background: darkseagreen;
      font-size: 1em;
      margin: 1em;
      border-radius: 3px;
      width: 100%;
      border: 2px solid darkseagreen;
      margin: 50px 0 0 0 ;
      padding: 10px 0;
`;

const discountValue = (coupon, totalAmount) => {
    let discountValue = 0;
    if (coupon.type === "p") {
        discountValue = (totalAmount / 100) * coupon.value;
    } else if(coupon.value) {
        discountValue = coupon.value;
    }
    return Math.floor(discountValue);
}

const CouponeDiscountBoxStyle = styled.div`
    padding-bottom: 20px;
`;

const RemoveCouponeButton = styled.div`
    width: 20px;
    height: 20px;
    position: relative;
    text-align: center;
    border-radius: 5px;
    background-color: indianred;
    line-height: 20px;
    cursor: pointer;
    float: right;
    &:after {
        content: 'x';
        display:block;
        color: #fff;
    }
`;

const CouponeDiscountBox = (props) => {
    return (
        <CouponeDiscountBoxStyle>
            <div>Kupon:</div>
            <div><b>{props.coupon.code}</b><RemoveCouponeButton onClick={()=>props.couponChangeHandler([])}/></div>
            <div>Celková cena: {props.totalAmount}</div>
            <div>Sleva: -{discountValue(props.coupon, props.totalAmount)}</div>
        </CouponeDiscountBoxStyle>
    )
}

const TotalPriceBox = (props) => {
    let couponeDiscountBox = "";
    if(props.coupon && props.coupon.code){
        couponeDiscountBox = <CouponeDiscountBox coupon={props.coupon} totalAmount={props.totalAmount} couponChangeHandler={(coupon) => props.couponChangeHandler(coupon)}  />;
    }

    return (
        <StyledTotalPriceBox>
            <CouponeBox coupon={props.coupon} couponChangeHandler={(coupon) => props.couponChangeHandler(coupon)} />
            {couponeDiscountBox}
            <StyledTotalAmount><b>Celková cena:</b> <StyledTotalAmountValue>{props.totalAmount - discountValue(props.coupon,props.totalAmount)}</StyledTotalAmountValue></StyledTotalAmount>
            <StyledTotalAmountWithoutVat><b>Celková cena bez dph:</b><StyledTotalAmountWithoutVatValue>{props.totalAmountWithoutVat - discountValue(props.coupon,props.totalAmountWithoutVat)}</StyledTotalAmountWithoutVatValue></StyledTotalAmountWithoutVat>
            <NextStepButton onClick={() => props.changeStepHandler(2)}>Next Step</NextStepButton>
        </StyledTotalPriceBox>
    );
};
export default TotalPriceBox
