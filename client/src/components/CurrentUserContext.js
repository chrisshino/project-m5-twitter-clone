import React, {useState, createContext, useEffect} from 'react'


export const CurrentUserContext = createContext({})
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(async () => {
      const responseHeaders = await fetch('/api/me/profile')
      const responseBody = await responseHeaders.json()
      setStatus('idle')
      setCurrentUser(responseBody)
  }, [])

  return (
    <CurrentUserContext.Provider value={{ currentUser, status, }}>
      {children}
    </CurrentUserContext.Provider>
  );
};