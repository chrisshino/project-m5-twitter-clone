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
  console.log(tweetInfo)

  return (
    <>
    <TweetContainer>
      {tweetInfo.author.handle === 'giantcat9' ?
       <ProfilePic src={url}/> : <ProfilePic src={tweetInfo.author.avatarSrc} />
      }
      {/* <ProfilePic src={tweetInfo.author.avatarSrc} /> */}
      <NameUserDate>
        <AvatarName>{tweetInfo.author.displayName}</AvatarName>
        <AvatarUserHandle>@{tweetInfo.author.handle}</AvatarUserHandle>
        <DateComponent>- {formattedDate}</DateComponent>
      </NameUserDate>
    </TweetContainer>
      <UsernameTweetContainer>
        <Status>{status}</Status>
      {tweetInfo.media.length > 0 ? <PostImage src={tweetInfo.media[0].url}/> : ''}
      </UsernameTweetContainer>
      <ReactionBar>
        {FiMessageCircle}
      </ReactionBar>
    </>
  );
}

const ReactionBar = styled.div`
display: flex;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
`;

const PostImage = styled.img`
  display: block;
`;

const UsernameTweetContainer = styled.div`
  display: block;
`;

const Status = styled.div``;

const TweetContainer = styled.div`
  display: flex;
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
`;
