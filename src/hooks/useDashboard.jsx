import Context from '../context/userContext'
import { useState, useEffect, useContext } from 'react'
export default function useDashboard () {
  const { user, setUser } = useContext(Context)
  const [coinActivitie, setCoinActivitie] = useState([])

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')))
    const coins = JSON.parse(window.localStorage.getItem('lastCoin'))
    if (coins !== null) setCoinActivitie(coins)
  }, [])
  return { user, coinActivitie }
}
