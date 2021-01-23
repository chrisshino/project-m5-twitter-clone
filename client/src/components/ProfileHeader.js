import React, {useState, useEffect, useParams} from 'react'
import styled from 'styled-components'

function ProfileHeader() {
  const {profileId} = useParams()
  const [profileInfo, setProfileInfo] = useState()
  console.log(ProfileInfo)
  useEffect(async() => {
    const fetchedData = await fetch(`/api/${profileId}/profile`)
    setProfileInfo(fetchedData)
  }, [])

  if (!profileInfo) {
    return <div>loading...</div>
  }
  return (
    <div>
      <ProfileBanner src={profileInfo.profile.bannerSrc}/>
    </div>
  )
}

const ProfileBanner = styled.img`
  width: 100%;
`;



export default ProfileHeader