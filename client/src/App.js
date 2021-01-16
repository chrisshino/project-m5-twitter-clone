import React from 'react'
import HomeFeed from './components/HomeFeed'
import Notifications from './components/Notifications'
import Bookmarks from './components/Bookmarks'
import TweetDetails from './components/TweetDetails'
import Profile from './components/Profile'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <HomeFeed />
      </Route>
      <Route exact path='/notifications'>
        <Notifications/>
      </Route>
      <Route exact path ='bookmarks'>
        <Bookmarks/>
      </Route>
      <Route exact path = '/tweet/:tweetId'>
        <TweetDetails/>
      </Route>
      <Route exact path='/:profileId'>
        <Profile/>
      </Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
