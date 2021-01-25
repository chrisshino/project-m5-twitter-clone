import React, {useState, createContext, useEffect} from 'react'


export const CurrentUserContext = createContext({})
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, catchError] = useState(null)
  
  
  useEffect(async () => {
    try{
      const responseHeaders = await fetch('/api/me/profile')
      if (responseHeaders.status == 500) {
        throw new Error('Whoops!')
      }
      const responseBody = await responseHeaders.json()
      setStatus('idle')
      setCurrentUser(responseBody)
    }
    catch (error) {
      catchError(error.message)
    }
  }, [])

  return (
    <CurrentUserContext.Provider value={{ currentUser, status, error}}>
      {children}
    </CurrentUserContext.Provider>
  );
};