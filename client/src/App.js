import React, {useContext} from 'react'
import styled from 'styled-components'
import HomeFeed from './components/HomeFeed'
import Notifications from './components/Notifications'
import Bookmarks from './components/Bookmarks'
import TweetDetails from './components/TweetDetails'
import Profile from './components/Profile'
import {CurrentUserContext} from './components/CurrentUserContext'
import {FiLoader} from 'react-icons/fi'
import Rotate from './components/Rotate'
import Bomb from './components/Bomb'

// import Sidebar from '.components/Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Sidebar from './components/Sidebar'
import ErrorScreen from './components/ErrorScreen'


function App() {
  const {currentUser, status, error} = useContext(CurrentUserContext)
  if (error) {
    return(
      <ErrorScreen></ErrorScreen>
    )
  }
  
  return (
   <BrowserRouter>
    {status == 'idle'  ?
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
        <Route path = '/tweet/:tweetId'>
          <TweetDetails/>
        </Route>
        <Route path='/:profileId'>
          <Profile/>
        </Route>
      </Switch>
    </Main> :
    <Rotate>
      <Bomb/>
    </Rotate>
    } 
   </BrowserRouter>
  );
}


const Main = styled.div`
  display: flex;

`;

export default App;
