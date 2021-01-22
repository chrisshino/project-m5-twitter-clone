import React, { useEffect } from "react";
import styled from "styled-components";
import {format } from "date-fns";
import {url} from '../assets/lordcat'
import {FiMessageCircle, FiRepeat, FiHeart, FiDownload} from 'react-icons/fi'


export function TweetHolder({ tweetId, homeInfo }) {
  // console.log(homeInfo.tweetsById[tweetId]);
  const tweetInfo = homeInfo.tweetsById[tweetId];
  const dateInfo = new Date(tweetInfo.timestamp);
  const formattedDate = format(dateInfo, "MMM-do");
  const status = tweetInfo.status;
  

  return (
    <>
    <TweetContainer>
      {tweetInfo.author.handle === 'giantcat9' ?
       <ProfilePic src={url}/> : <ProfilePic src={tweetInfo.author.avatarSrc} />
      }
      <RightSideContainer>
      <NameUserDate>
        <AvatarName>{tweetInfo.author.displayName}</AvatarName>
        <AvatarUserHandle>@{tweetInfo.author.handle}</AvatarUserHandle>
        <DateComponent>- {formattedDate}</DateComponent>
      </NameUserDate>
      <UsernameTweetContainer>
        <Status>{status}</Status>
      {tweetInfo.media.length > 0 ? <PostImage src={tweetInfo.media[0].url}/> : ''}
      </UsernameTweetContainer>
      <ReactionBar>
        <FiMessageCircle/>
        <FiRepeat/>
        <FiHeart/>
        <FiDownload/>
      </ReactionBar>
        
        </RightSideContainer>
    </TweetContainer>
    </>
  );
}

const RightSideContainer = styled.div`
  
`;

const ReactionBar = styled.div`
display: flex;
margin-top: 0.5rem;
margin-bottom: 0.2rem;
font-size: 1.3rem;
padding-right: 1rem;
justify-content: space-between;
`;

const PostImage = styled.img`
  display: block;
  border-radius: 10px;
  width: 100%;
  max-height:600px;
`;

const UsernameTweetContainer = styled.div`
  display: block;
`;

const Status = styled.div`
  margin-bottom: 0.5rem;
`;

const TweetContainer = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid whitesmoke;
  border-radius: 5px;
`;

const DateComponent = styled.div`
  margin: 0;
  font-size: 0.8rem;
`;

const AvatarName = styled.h4`
  margin: 0;
  margin-right: 5px;
`;

const AvatarUserHandle = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-right: 5px;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const NameUserDate = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;
