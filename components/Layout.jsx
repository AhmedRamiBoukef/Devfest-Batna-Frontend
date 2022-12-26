import React, { createContext, useContext, useEffect, useState } from 'react'
import { Header } from './Dashboard/components/Header'


export const UserContext = createContext();


export const Layout = ({children}) => {
  const [user,setUser] = useState(null)
  const [accept,setAccept] = useState(true)
  useEffect(() => {
    // Perform localStorage action
    setUser(localStorage.getItem('hospital')) 
    
  }, [])
  return (
    <UserContext.Provider value={{user,setUser,accept,setAccept}}>
        <div className="w-[100vw] min-h-[100vh] bg-[#f2f7ff]">
            <Header />
            {children}
        </div>
    </UserContext.Provider>
  )
}
