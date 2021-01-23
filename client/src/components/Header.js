import React from 'react'
import styled from 'styled-components'

export const Header = ({title}) => {
  return (
    <DivContainer>
    <DivHeader>
      {title}
    </DivHeader>
    </DivContainer>
  )
}

const DivHeader = styled.div`
 font-size: 1.2rem;
 font-weight: bolder;
 font-family: sans-serif;
 
`;

const DivContainer = styled.div`
  border: 1px solid whitesmoke;
  border-radius: 10px;
  padding: 1rem;
`;