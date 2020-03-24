import React from 'react';
import styled from 'styled-components';

const BasketHeaderLi = styled.li`
    background-color:  ${props => props.theme.colors.lightGrey};
    list-style: none;
    padding: 20px 0px;
    display: flex;
    flex-basis: 0;
    @media screen and (max-width: 800px) {
        display:none;
    }
`;

const BasketHeaderCol = styled.span`
    flex: ${props => props.flex ? props.flex : 1};
    padding-left: 10px;
    padding-right: 10px;
`;

const BasketListHeader = (props) => {
    return (
        <BasketHeaderLi>
            <BasketHeaderCol />
            <BasketHeaderCol flex={4}>Vaše zboží v košíku</BasketHeaderCol>
            <BasketHeaderCol>Zvolte{'\u00A0'}množství</BasketHeaderCol>
            <BasketHeaderCol flex={2}>Dostupnost</BasketHeaderCol>
            <BasketHeaderCol>Cena{'\u00A0'}za{'\u00A0'}kus</BasketHeaderCol>
            <BasketHeaderCol>Cena{'\u00A0'}celkem</BasketHeaderCol>
            <BasketHeaderCol></BasketHeaderCol>
        </BasketHeaderLi>
    );
};

export default BasketListHeader
