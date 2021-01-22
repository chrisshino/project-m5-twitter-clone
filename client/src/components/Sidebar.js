import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/logo.svg'
import  {COLORS}  from '../../src/constants'
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
function Sidebar() {
  return (
    <Wrapper>
      <Logo style={{width: '45px', height:'60px'}}/>
      <StyledNavLink to='/'>
        <Container>
          <FiHome style={{fontSize: '1.3rem'}}/>
          <Text>Home</Text>
        </Container>
      </StyledNavLink>


      <StyledNavLink to='/:profileId'>
        <Container>
          <FiUser style={{fontSize: '1.3rem'}}/>
          <Text>Profile</Text>
        </Container>
      </StyledNavLink>

      <StyledNavLink to='/notifications'>
        <Container>
          <FiBell style={{fontSize: '1.3rem'}}/>
          <Text>Notifications</Text>
        </Container>
      </StyledNavLink>

      <StyledNavLink to='/bookmarks'>
        <Container>
          <FiBookmark style={{fontSize: '1.3rem'}}/>
          <Text>Bookmarks</Text>
        </Container>
      </StyledNavLink>
    </Wrapper>
  )
}

const Container = styled.div`
  display: flex;
  padding: 0.5rem 0.8rem;
  align-items: center;
  
`;

const Text = styled.div`
  margin-left: 1rem;
  font-weight: bold;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  padding-right: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  margin-top: 0.5rem;
  color: black;
  font-family: sans-serif;
  &.active {
    color: ${COLORS.primary}
  }
  &:hover {
    background-color: #E9D3ff;
    border-radius: 25px;
    color: ${COLORS.primary};
  }
`;


export default Sidebar
