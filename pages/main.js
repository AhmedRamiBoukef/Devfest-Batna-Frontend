import React, { useContext, useEffect } from 'react'
import { Dashboard } from '../components/Dashboard/Dashboard'
import Router from 'next/router';
import { UserContext } from '../components/Layout';

function Main() {
    const {user,setUser }= useContext(UserContext);
    useEffect(() => {
      if (!localStorage.getItem('hospital')) Router.push({
        pathname:"/login",

      })

    }, [user])
    
  return (
    <>
        {user && <Dashboard />}
    </>
  )
}

export default Main