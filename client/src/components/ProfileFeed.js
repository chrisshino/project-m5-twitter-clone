import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { url } from "../assets/lordcat";
import { format } from "date-fns";

function ProfileFeed() {
  const { profileId } = useParams();
  const [tweetFeedInfo, setTweetFeedInfo] = useState({});
  const [tweetIds, setTweetIds] = useState([]);
  console.log(tweetFeedInfo);
  useEffect(async () => {
    const tweeterDataHeader = await fetch(`/api/${profileId}/feed`);
    const tweeterDataBody = await tweeterDataHeader.json();
    setTweetFeedInfo(tweeterDataBody);
    setTweetIds(tweeterDataBody.tweetIds);
  }, []);

  if (!tweetFeedInfo) {
    return <div>loading...</div>;
  }

  return (
    <FeedWrapper>
      {tweetIds.map((el) => {
        const dateTime = new Date(tweetFeedInfo.tweetsById[el].timestamp);
        const formattedDateTime = format(dateTime, "MMM-do");
        return (
          <EachTweetContainer>
            {tweetFeedInfo.tweetsById[el].retweetFrom ? (
              <RetweetedDiv>
                {tweetFeedInfo.tweetsById[el].retweetFrom.displayName} Remeowed
              </RetweetedDiv>
            ) : null}
            {/* {tweetFeedInfo.tweetsById[el]} */}
            <ProfileImageContentSplitContainer>
              {tweetFeedInfo.tweetsById[el].author.handle === "giantcat9" ? (
                <UsersProfilePic src={url} />
              ) : (
                <UsersProfilePic
                  src={tweetFeedInfo.tweetsById[el].author.avatarSrc}
                />
              )}
              <RestOfContentContainer>
                <UsersNameDateHandleContainer>
                  <UsersProfileName>
                    {tweetFeedInfo.tweetsById[el].author.displayName}
                  </UsersProfileName>
                  <UsersHandle>
                    @{tweetFeedInfo.tweetsById[el].author.handle}
                  </UsersHandle>
                  <UsersDatePosted>{formattedDateTime}</UsersDatePosted>
                </UsersNameDateHandleContainer>
                <UsersPostDescription>
                  {tweetFeedInfo.tweetsById[el].status}
                </UsersPostDescription>
                {tweetFeedInfo.tweetsById[el].media.length > 0 ? (
                  <UsersImagePosted
                    src={tweetFeedInfo.tweetsById[el].media[0].url}
                  />
                ) : null}
                {/* <UsersImagePosted src={tweetFeedInfo.tweetsById[el].media[0].url}/> */}
              </RestOfContentContainer>
            </ProfileImageContentSplitContainer>
          </EachTweetContainer>
        );
      })}
    </FeedWrapper>
  );
}

const RestOfContentContainer = styled.div``;

const ProfileImageContentSplitContainer = styled.div`
  display: flex;
`;

const EachTweetContainer = styled.div`
  padding: 1rem;
`;

const UsersProfilePic = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 1rem;
`;

const RetweetedDiv = styled.div`
  font-size: 0.8rem;
  color: grey;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
`;

const UsersProfileName = styled.div`
  margin-right: 0.5rem;
`;

const UsersHandle = styled.div`
  margin-right: 0.5rem;
  font-size: 0.8rem;
  color: grey;
`;

const UsersNameDateHandleContainer = styled.div`
  display: flex;
`;

const UsersDatePosted = styled.div`
  font-size: 0.8rem;
  color: grey;
`;

const UsersPostDescription = styled.div`
  margin-top: 0.5rem;
`;

const UsersImagePosted = styled.img`
  width: 100%;
  max-height: 500px;
  border-radius: 20px;
  margin-top: 0.5rem;
`;

const FeedWrapper = styled.div`
  border: 1px solid whitesmoke;
  font-family: sans-serif;
`;

export default ProfileFeed;
