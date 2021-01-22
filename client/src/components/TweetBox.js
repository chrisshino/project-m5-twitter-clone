import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

export const TweetBox = () => {
  const [userProfileData, setUserProfileData] = useState()
  const [loading, setLoading] = useState(true)
  console.log(userProfileData)
  useEffect(async() => {
    const responseHeaders = await fetch('/api/me/profile')
    const responseBody = await responseHeaders.json()
    setUserProfileData(responseBody)
  }, [])

  useEffect(() => {
    if (userProfileData) {
      setLoading(false)
    }
  }, [loading])
  if (loading) {
    return (
      // add loading spinners...
      <div>loading...</div>
    )
  }
  return (
    <TweetBoxDiv>
      <UserImageContainer>
        <UserImage src={userProfileData.profile.avatarSrc}/>
      </UserImageContainer>
      <ImageTextHolder>
        <UserInput placeholder={"What's happening?"}/>
      </ImageTextHolder>
    </TweetBoxDiv>
  )
}

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

const UserImageContainer = styled.div`

`;

const UserImage = styled.img`
  width: 50px;
  border-radius: 50%;
  align-self: center;
`;

const ImageTextHolder = styled.div`
  display: flex;
  width: 100%;
`;


const TweetBoxDiv = styled.div`
display: flex;
padding: 1rem;
border: 1px solid whitesmoke;
border-radius: 5px;
`;