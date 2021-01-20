import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {TweetHolder} from './TweetHolder'

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
    return (<div>loading...</div>)
  }
  return (
    <div>
      <Wrapper>
        {homeInfo.tweetIds.map((tweetID) => {
          return <TweetHolder tweetId={tweetID} homeInfo={homeInfo}></TweetHolder>
        })}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`

`;


export default HomeFeed
