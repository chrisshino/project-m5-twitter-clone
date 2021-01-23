import React, {useState, useEffect} from 'react'
import {Header} from './Header'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import {format} from 'date-fns'
import {FiMessageCircle, FiRepeat, FiHeart, FiDownload} from 'react-icons/fi'

function TweetDetails() {
  const {tweetId} = useParams()
  const [uniqueTweet, setUniqueTweet] = useState(null)
  const [tweetDate, setTweetDate] = useState(null)
  const tweetDateInfo = new Date(tweetDate)
  const formattedTweetDate = format(tweetDateInfo, 'h:mm a MMM d YYY')
  console.log(uniqueTweet)
  console.log(tweetDate)

  useEffect(async() => {
    const tweetHeader = await fetch(`/api/tweet/${tweetId}`)
    const tweetBody = await tweetHeader.json()
    setUniqueTweet(tweetBody)
    setTweetDate(tweetBody.tweet.timestamp)
  }, [])

  if (!uniqueTweet) {
    return <div>Loading...</div>
  }

  return (
    <SingleTweetContainer>
      <Header title={'Meow'}></Header>   
      <TweetWrapper>
        <UserInfoWrapper>
          <TweetProfileImg src={uniqueTweet.tweet.author.avatarSrc}/>
          <NameHandleWrapper>
            <TweetUsersName>{uniqueTweet.tweet.author.displayName}</TweetUsersName>
            <TweetUsersHandle>@{uniqueTweet.tweet.author.handle}</TweetUsersHandle>
          </NameHandleWrapper>
        </UserInfoWrapper>
        <TextHolder>
          {uniqueTweet.tweet.status}
        </TextHolder>
        {uniqueTweet.tweet.media.length > 0 ? <ImageHolder src={uniqueTweet.tweet.media[0].url}/> : null}
        <FullDateWrapper>
          {formattedTweetDate} Critter web app
        </FullDateWrapper>
        <TweetReactionBar>
          <FiMessageCircle/>
          <FiRepeat/>
          <FiHeart/>
          <FiDownload/>
        </TweetReactionBar>
      </TweetWrapper>

    </SingleTweetContainer>
  )
}

const TweetUsersName = styled.div`
  font-weight: bolder;
`;
const TweetUsersHandle = styled.div`
  color: grey;
  font-size: 0.9rem;
`;

const TweetWrapper = styled.div`
border: 1p solid whitesmoke;
font-family: sans-serif;
margin-top: 0.5rem;
padding: 0.5rem;
`;

const TweetProfileImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const UserInfoWrapper = styled.div`
display: flex;
`;
const NameHandleWrapper = styled.div`
  margin: 10px;
`;
const TextHolder = styled.div``;
const ImageHolder = styled.img`
 width: 100%;
 border-radius: 20px;
 max-height: 400px;
 margin-top: 0.5rem;
`;
const FullDateWrapper = styled.div`
display: flex;
padding-top: 10px;
padding-bottom: 10px;
color: grey;
font-size: 0.8rem;
`;
const TweetReactionBar = styled.div`
border-top: 1px solid whitesmoke;
padding: 1rem;
display: flex;
color: grey;
padding-right: 1rem;
justify-content: space-between;
`;

const SingleTweetContainer = styled.div`
  width: 100%;
  border: 1px solid whitesmoke;
`;


export default TweetDetails
