import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import {url} from '../assets/lordcat'

function ProfileFeed() {
  const { profileId } = useParams();
  const [tweetFeedInfo, setTweetFeedInfo] = useState({});
  const [tweetIds, setTweetIds] = useState([])
  console.log(tweetFeedInfo)
  useEffect(async () => {
    const tweeterDataHeader = await fetch(`/api/${profileId}/feed`);
    const tweeterDataBody = await tweeterDataHeader.json();
    setTweetFeedInfo(tweeterDataBody);
    setTweetIds(tweeterDataBody.tweetIds)
  }, []);

  if (!tweetFeedInfo) {
    return <div>loading...</div>
  }

  return (
  <FeedWrapper>
    {tweetIds.map(el => {
      console.log(el)
      return(
        <EachTweetContainer>
          {tweetFeedInfo.tweetsById[el].retweetFrom ? <RetweetedDiv>{tweetFeedInfo.tweetsById[el].retweetFrom.displayName} Remeowed</RetweetedDiv> : null }
          {/* {tweetFeedInfo.tweetsById[el]} */}
          <ProfileImageContentSplitContainer>
            {tweetFeedInfo.tweetsById[el].author.handle === 'giantcat9' ? <UsersProfilePic src={url}/> : <UsersProfilePic src={tweetFeedInfo.tweetsById[el].author.avatarSrc}/>}
          </ProfileImageContentSplitContainer>
        </EachTweetContainer>
      )
    })}
  </FeedWrapper>
  )
}

const ProfileImageContentSplitContainer = styled.div`
  display: flex;
`;

const EachTweetContainer = styled.div`

`;

const UsersProfilePic = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;

`;

const RetweetedDiv = styled.div``;

const UsersProfileName = styled.div``;

const UsersHandle = styled.div``;

const UsersNameDateHandleContainer = styled.div`
  display: flex;
`;

const UsersDatePosted = styled.div``;

const UsersPostDescription = styled.div``;

const UsersImagePosted = styled.img``;


const FeedWrapper = styled.div`
  border: 1px solid whitesmoke;
  font-family: sans-serif;
`;

export default ProfileFeed;
