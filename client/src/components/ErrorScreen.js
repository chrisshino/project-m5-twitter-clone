import React from "react";
import {Icon} from 'react-icons-kit'
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';

function ErrorScreen() {
  return (
    <div >
      <Icon size={60} icon={bomb}/>
      <div>An unknown error has occured.</div>
      <div>
        Please try refreshing the page, or contact support if the problem
        persists.
      </div>
    </div>
  );
}

export default ErrorScreen;
