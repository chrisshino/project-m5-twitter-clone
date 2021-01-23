import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

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
    </div>
  )
}



const ProfileBanner = styled.img`
  width: 100%;
`;



export default ProfileHeader