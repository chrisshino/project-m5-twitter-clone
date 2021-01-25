import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { url } from "../assets/lordcat";
import { FiMessageCircle, FiRepeat, FiHeart, FiDownload } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

export function TweetHolder({ tweetId, homeInfo }) {
  // console.log(homeInfo.tweetsById[tweetId]);
  const tweetInfo = homeInfo.tweetsById[tweetId];
  const dateInfo = new Date(tweetInfo.timestamp);
  const formattedDate = format(dateInfo, "MMM-do");
  const status = tweetInfo.status;
  const [isLikedButton, setIsLikedButton] = useState();
  let history = useHistory();

  const onEnterDownForProfile = (ev) => {
    if (ev.key == "Enter") {
      console.log("ahaswerve");
      tweetInfoOnClick();
    }
  };

  const addHomeLike = (event) => {
    event.stopPropagation();
    fetch(`/api/tweet/${tweetId}/like`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ like: !isLikedButton }),
    })
      .then((res) => res.json())
      .then(() => {
        setIsLikedButton(!isLikedButton);
      });
  };

  const onEnterDownForTweet = (event) => {
    if (event.key == "Enter") {
      event.stopPropagation();
      history.push(`/${tweetInfo.author.handle}`);
    }
  };

  function tweetInfoOnClick() {
    history.push(`/tweet/${tweetId}`);
  }

  const profileOnClick = (event) => {
    event.stopPropagation();
    history.push(`/${tweetInfo.author.handle}`);
  };

  return (
    <>
      <TweetContainer
        tabIndex={0}
        onClick={tweetInfoOnClick}
        onKeyDown={onEnterDownForProfile}
      >
        {tweetInfo.author.handle === "giantcat9" ? (
          <ProfilePic src={url} />
        ) : (
          <ProfilePic src={tweetInfo.author.avatarSrc} />
        )}
        <RightSideContainer>
          <NameUserDate
            onClick={profileOnClick}
            onKeyDown={onEnterDownForTweet}
            tabIndex={0}
          >
            <AvatarName>{tweetInfo.author.displayName}</AvatarName>
            <AvatarUserHandle>@{tweetInfo.author.handle}</AvatarUserHandle>
            <DateComponent>- {formattedDate}</DateComponent>
          </NameUserDate>
          <UsernameTweetContainer>
            <Status>{status}</Status>
            {tweetInfo.media.length > 0 ? (
              <PostImage src={tweetInfo.media[0].url} />
            ) : (
              ""
            )}
          </UsernameTweetContainer>
          <ReactionBar>
            <FiMessageCircle tabIndex={0} />
            <FiRepeat tabIndex={0} />
            <HomeLikeButton onClick={addHomeLike} tabIndex={0}>
              <FiHeart />
              {isLikedButton == true ? <div>1</div> : null}
            </HomeLikeButton>
            <FiDownload tabIndex={0} />
          </ReactionBar>
        </RightSideContainer>
      </TweetContainer>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const HomeLikeButton = styled.button``;

const RightSideContainer = styled.div`
  width: 100%;
`;

const ReactionBar = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
  font-size: 1.3rem;
  padding-right: 1rem;
  justify-content: space-between;
  color: grey;
`;

const PostImage = styled.img`
  display: block;
  border-radius: 10px;
  width: 100%;
  max-height: 600px;
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
  &:hover {
    cursor: pointer;
  }
`;
