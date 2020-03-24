import React from 'react';
import styled from 'styled-components';

const DeliveryLi = styled.li`
    list-style: none;
    padding: 10px 0px;
`;

const DeliveryListItem = (props) => {
    return (
        <DeliveryLi>
            <label>
                <input type="radio" name="delivery" value={props.id}/>
                <span>{props.name}</span>
                <span>{props.price}</span>
            </label>
        </DeliveryLi>
    );
};

export default DeliveryListItem
