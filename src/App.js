import React, { useEffect, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { checkIfOnline } from './utils/network';
import IsOnlineFallback from './components/IsOnlineFallback'

export default function App() {

  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const checkIfOnlineInterval = setInterval(() => {
      setIsOnline(checkIfOnline())
    }, 3000)
    return () => {
      clearInterval(checkIfOnlineInterval)
    }
  }, [])
  
  return (
    <>
      {
        isOnline?  <Home /> : <IsOnlineFallback />
      }
    </>
  );
}