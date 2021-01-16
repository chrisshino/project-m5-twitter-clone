import React from 'react'
import styled from 'styled-components'
import HomeFeed from './components/HomeFeed'
import Notifications from './components/Notifications'
import Bookmarks from './components/Bookmarks'
import TweetDetails from './components/TweetDetails'
import Profile from './components/Profile'
// import Sidebar from '.components/Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Sidebar from './components/Sidebar'


function App() {
  return (
   <BrowserRouter>

    <Main>
      <Sidebar/>
      <Switch>
        <Route exact path='/'>
          <HomeFeed />
        </Route>
        <Route exact path='/notifications'>
          <Notifications/>
        </Route>
        <Route exact path ='/bookmarks'>
          <Bookmarks/>
        </Route>
        <Route exact path = '/tweet/:tweetId'>
          <TweetDetails/>
        </Route>
        <Route exact path='/:profileId'>
          <Profile/>
        </Route>
      </Switch>
    </Main>
   </BrowserRouter>
  );
}


const Main = styled.div`
  display: flex;

`;

export default App;
