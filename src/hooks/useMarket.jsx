import { useContext, useEffect, useState } from 'react'
import Context from '../context/userContext'
import getPriceCoin from '../services/getPriceCoin'

export default function useMarket () {
  const { setUser } = useContext(Context)

  const [coins, setCoins] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem('user')) {
      setUser(JSON.parse(window.localStorage.getItem('user')))
    }
    setLoading(true)

    getPriceCoin({ limit: 20, page: 1 }).then((res) => {
      setCoins(res)
      setLoading(false)
    })
  }, [])
  return { coins, isLoading }
}
