import React from 'react';
import styled, { keyframes } from 'styled-components';


const rotateKeyframe = keyframes`
 /* 100% keyframe for  clockwise. 
     use 0% instead for anticlockwise */
  100% {
    -webkit-transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  height: 0;
  width: 0;
  padding: 15px;
  border: 4px solid #ccc;
  border-right-color: #888;
  border-radius: 18px;
  -webkit-animation: ${rotateKeyframe} 1s infinite linear;
  /* left, top and position just for the demo! */
  position: absolute;
  left: 50%;
  top: 50%;
  display: ${ props => props.show ? "block": "none"};
`;




const Loader = (props) => {
     return(<StyledLoader show={props.show} />);
}

export default Loader;
