import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../constants";
import {FiLoader} from 'react-icons/fi'
import Rotate from './Rotate'

export const TweetBox = ({getHomeFeed}) => {
  const [userProfileData, setUserProfileData] = useState();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('')
  const { status, currentUser } = useContext(CurrentUserContext);
  const [postLoading, setPostLoading] = useState(false)
  

  useEffect(async () => {
    setUserProfileData(currentUser);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (userProfileData) {
      setLoading(false);
    }
  }, [loading]);
  if (loading) {
    return (
      // add loading spinners...
      <Rotate>
        <FiLoader/>
      </Rotate>
    );
  }
  return (
    <TweetBoxDiv>
      <UserImageContainer>
        <UserImage src={userProfileData.profile.avatarSrc} />
      </UserImageContainer>
      <ImageTextHolder onSubmit={(ev) => {
        ev.preventDefault()
        setPostLoading(true)
        fetch('/api/tweet', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({"status": value})
        }).then(() => {
          setPostLoading(false)
          getHomeFeed()
        })
      }}>
        <UserInput value={value} 
        onChange={(e) => {
          setValue(e.target.value)
          }}
          placeholder={"What's happening?"} />
        <MeowButtonContainer>
          {value.length <= 280 ? <CharacterCounter value={value}>{280 - value.length}</CharacterCounter> : <NoMoreCounter>{280 - value.length}</NoMoreCounter>}
          <MeowButton type={'submit'} disabled={postLoading ? true : false || value.length > 280 ? true : false}>Meow</MeowButton>
        </MeowButtonContainer>
      </ImageTextHolder>
    </TweetBoxDiv>
  );
};

const NoMoreCounter = styled.div`
  margin-right: 0.5rem;
  color: red;
`;

const CharacterCounter = styled.div`
  margin-right: 0.5rem;
  color: ${props => props.value.length > 235 ? '#E1AD01' : 'black'};

  
`;

const MeowButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MeowButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  padding: 0.5rem;
  border-radius: 20px;
  width: 100px;
  &:hover {
    background-color: hsl(258deg, 80%, 40%);
    cursor: pointer;
  }
  &:disabled {
    background-color: hsl(258deg, 40%, 90%);
    color: red;
    cursor: none;
    }
`;

const UserInput = styled.textarea`
  border: none;
  outline: none;
  padding-left: 1rem;
  color: grey;
  font-family: sans-serif;
  font-size: 1.1rem;
  width: 100%;
  height: 200px;
`;

const UserImageContainer = styled.div``;

const UserImage = styled.img`
  width: 50px;
  border-radius: 50%;
  align-self: center;
`;

const ImageTextHolder = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TweetBoxDiv = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid whitesmoke;
  border-radius: 5px;
`;
