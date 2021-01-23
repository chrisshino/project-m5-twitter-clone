import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {COLORS} from '../constants'
import {format} from 'date-fns'

function ProfileHeader() {
  const {profileId} = useParams()
  const [profileInfo, setProfileInfo] = useState({})
  const [dateInfo, setDateInfo] = useState('')
  const [load, setLoad] = useState(true)
  useEffect(async() => {
    const fetchedDataHeader = await fetch(`/api/${profileId}/profile`)
    const responseDataBody = await fetchedDataHeader.json()
    setProfileInfo(responseDataBody)
    const formattedDateInfo = new Date(responseDataBody.profile.joined)
    const formattedJoinDate = format(formattedDateInfo, 'MMMM-YYY')
    setDateInfo(formattedJoinDate)
    setLoad(false)
  }, [])

  if (load == true) {
    return <div>loading...</div>
  }
  return (
    <FullContainer>
      <BannerProfileButtonContainer>
        <ProfileBanner src={profileInfo.profile.bannerSrc}/>
        <ProfileImageLarge src={profileInfo.profile.avatarSrc}/>
        <ButtonContainer>
          <FollowingButton>Following</FollowingButton>
        </ButtonContainer>
      </BannerProfileButtonContainer>
      <UserInfoContainer>
        <DisplayName>{profileInfo.profile.displayName}</DisplayName>
        <HandleNameContainer>
          <UserHandleName>@{profileInfo.profile.handle}</UserHandleName>
          <FollowingYouContainer>Follows You</FollowingYouContainer>
        </HandleNameContainer>
        <p>{profileInfo.profile.bio}</p>
        <CityAreaContainer>
          <CityContainer>{profileInfo.profile.location}</CityContainer>
          <JoinedDate>Joined {dateInfo}</JoinedDate>
        </CityAreaContainer>
        <FollowerContainer>
          <Following>{profileInfo.profile.numFollowing} Following</Following>
          <Followers>{profileInfo.profile.numFollowers} Followers</Followers>
        </FollowerContainer>
      </UserInfoContainer>
      <TweetsMediaLikesContainer>
        <MiniNav>Tweets</MiniNav>
        <MiniNav>Media</MiniNav>
        <MiniNav>Likes</MiniNav>
      </TweetsMediaLikesContainer>
    </FullContainer>
  )
}

const MiniNav = styled.div`
  padding: 1.5rem;
  color: ${COLORS.primary};
  font-size: 1rem;
  font-weight: bolder;
  font-family: sans-serif;

`;

const TweetsMediaLikesContainer = styled.div`
  display:flex;
  justify-content: space-around;
`;

const FullContainer = styled.div`
border: 1px solid whitesmoke;
`;

const Following = styled.div`
  /* color: grey; */
  font-size: 0.8rem;
  margin-right: 1rem;
`;

const Followers = styled.div`
  /* color: grey; */
  font-size: 0.8rem;
`;

const FollowerContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;


const JoinedDate = styled.div`
  font-size: 0.8rem;
  color: grey;
`;
const CityContainer = styled.div`
  font-size: 0.8rem;
  color: grey;
  margin-right: 1rem;
`;

const CityAreaContainer = styled.div`
  display: flex;
`;

const FollowingYouContainer = styled.div`
  color: grey;
  font-size: 0.8rem;
  background-color: whitesmoke;
  border-radius: 5px;
`;

const HandleNameContainer = styled.div`
  display: flex;
  margin: none;
`;

const UserHandleName = styled.div`
  color: grey;
  font-size: 0.8rem;
  margin-right: 10px;
`;

const DisplayName = styled.div`
  font-weight: bolder;
  font-size: 1rem;
  margin: none;
`;

const UserInfoContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: sans-serif;
`;

const BannerProfileButtonContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

const ProfileImageLarge = styled.img`
  border-radius: 50%;
  width: 20%;
  border: 3px solid white;
  position: absolute;
  top: 60%;
  left: 3%;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
padding-top: 1rem;
padding-right: 1rem;
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

const ProfileBanner = styled.img`
  width: 100%;
  position: relative;
`;



export default ProfileHeader