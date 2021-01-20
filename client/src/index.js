import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CurrentUserProvider} from '../src/components/CurrentUserContext'


ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

