import React from "react";
import styled, { keyframes } from "styled-components";

const rotateLoadingIcon = keyframes`
    from {
      transform: rotate(0deg) 
    }
    to {
      transform: rotate(360deg) 
    }
  `;
const AnimateLoadingIcon = styled.div`
  top: 25%;
  left: 50%;
  position:absolute;
  animation: ${rotateLoadingIcon} 2s infinite;
  /* width: 1px;
  height: 1px; */
`;

function Rotate({ children }) {
  return <AnimateLoadingIcon>{children}</AnimateLoadingIcon>;
}

export default Rotate;
