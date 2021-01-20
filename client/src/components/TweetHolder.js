import React, {useState} from 'react'
import styled from 'styled-components'

export const TweetHolder = ({tweetId, homeInfo}) => {
  
  console.log(homeInfo.tweetsById[tweetId])
  // const tweetInfo = homeInfo.tweetsById[tweet]
  return (
    <div>
      {homeInfo.tweetsById[tweetId].author.handle}
    </div>
  )
}


const ProfilePic = styled.div`
  
`;