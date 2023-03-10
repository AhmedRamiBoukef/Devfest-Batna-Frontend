import Head from 'next/head'
import { Dashboard } from '../components/Dashboard/Dashboard'
import Landing from './landing'
import { useContext, useEffect } from 'react';
import { UserContext } from '../components/Layout';
import  Router  from 'next/router';

export default function Home() {
  const {user,setUser }= useContext(UserContext);
  useEffect(() => {
   if (user) Router.push({
    pathname: '/main',
})
    
  }, [user])
  return (
    <>
    {user==null && <div>
      <Head>
        <title>3afini Ai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <Landing />
      
    </div>}
    </>
  )
}
