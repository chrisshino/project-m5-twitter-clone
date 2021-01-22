import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {TweetHolder} from './TweetHolder'
import {Header} from '../components/Header'
import {TweetBox} from '../components/TweetBox'

function HomeFeed() {
  const [homeInfo, setHomeInfo] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(async()=> {
    if (!homeInfo) {
      const responseHeaders = await fetch('/api/me/home-feed')
      const responseBody = await responseHeaders.json()
      setHomeInfo(responseBody)
    }
  }, [])

  useEffect(() => {
    if (homeInfo){
      setLoading(false)
    }
  },[homeInfo])
  if (loading) {
    // add loading spinner here...
    return (<div>loading...</div>)
  }
  return (
    <div>
      <Wrapper>
        <Header/>
        <TweetBox/>
        {homeInfo.tweetIds.map((tweetID) => {
          return <TweetHolder tweetId={tweetID} homeInfo={homeInfo}></TweetHolder>
        })}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
width: 85%;
`;


export default HomeFeed
