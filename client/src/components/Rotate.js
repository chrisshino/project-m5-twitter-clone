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
  animation: ${rotateLoadingIcon} 2s infinite;
  width: 5px;
  height: 5px;
`;

function Rotate({children}) {
  return <AnimateLoadingIcon>{children}</AnimateLoadingIcon>;
}

export default Rotate;
