import React from 'react';
import styled, {keyframes} from 'styled-components';


const ErrorMessageStyled = styled.div`
   margin-top: 30px;
   width: 100%;
   background-color: rgba(205, 92, 92, 0.5);
   padding: 20px 0;
   display: flex;
   span {
        flex: 9;
        margin-left: 20px;
   }
`;

const StyledButton = styled.button`
   padding: 10px 5px;
   color: #fff;   
   background: indianred;
   border: none;
   margin-right: 20px;
`;

const ErrorMessage = (props) => {

    let button = "";
    if (props.button) {
        button = <StyledButton onClick={() => props.button}>{props.buttonText}</StyledButton>
    }
    return (
        <ErrorMessageStyled>
            <span>{props.children}</span>
            {button}
        </ErrorMessageStyled>);
}

export default ErrorMessage;
