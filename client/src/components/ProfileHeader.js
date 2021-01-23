import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {COLORS} from '../constants'

function ProfileHeader() {
  const {profileId} = useParams()
  const [profileInfo, setProfileInfo] = useState()
  console.log(profileInfo)
  const [load, setLoad] = useState(true)
  useEffect(async() => {
    const fetchedDataHeader = await fetch(`/api/${profileId}/profile`)
    const responseDataBody = await fetchedDataHeader.json()
    setProfileInfo(responseDataBody)
    setLoad(false)
  }, [])

  if (load == true) {
    return <div>loading...</div>
  }
  return (
    <div>
      <ProfileBanner src={profileInfo.profile.bannerSrc}/>
      <ProfileImageAndButtonContainer>
        <ProfileImageLarge src={profileInfo.profile.avatarSrc}/>
        <FollowingButton>Following</FollowingButton>
      </ProfileImageAndButtonContainer>
    </div>
  )
}

const ProfileImageLarge = styled.img`
  border-radius: 50%;
  width: 20%;
  outline: 1px solid white;
`;

const FollowingButton = styled.button`
  align-self: bottom;
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: ${COLORS.primary};
  color: white;
`;

const ProfileImageAndButtonContainer = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
`;

const ProfileBanner = styled.img`
  width: 100%;
`;



export default ProfileHeader