import { useEffect, useContext, useState } from 'react'
import Context from '../context/userContext'
import getSingleCoin from '../services/getSingleIcon'
let labels, data

export default function useDetail ({ id }) {
  const [coin, setCoin] = useState()
  const [isLoading, setLoading] = useState(false)
  const { user, setUser } = useContext(Context)
  const [amount, setAmount] = useState(0)
  const [isError, setError] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')))
  }, [])

  useEffect(() => {
    const localStorageFavorite = JSON.parse(window.localStorage.getItem('favorites'))
    setLoading(true)
    getSingleCoin({ id }).then(response => {
      setCoin(response)
      setError(false)
      setLoading(false)
      if (localStorageFavorite) {
        const inx = localStorageFavorite.findIndex(({ id }) => id === response.id)
        if (inx === -1) setIsFavorite(false)
        else setIsFavorite(true)
      }
      labels = response.sparkline_7d.price.map(res => '$' + Math.round(res))
      data = {
        labels,
        datasets: [
          {
            label: 'Balance Coin 7d',
            data: response.sparkline_7d.price.map(res => res),
            borderColor: '#e22222',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          }
        ]
      }
    }).catch(e => {
      setError(true)
      setLoading(false)
    })
  }, [id])

  const handleBuyCoin = (e) => {
    e.preventDefault()
    if (amount <= 0) return

    const newCoin = {
      id: coin.id,
      name: coin.name,
      image: coin.large,
      amount: (amount / coin.current_price.usd),
      amountUsd: amount,
      symbol: coin.symbol
    }

    if (user.balance > amount) {
      user.balance = user.balance - amount
    } else {
      return window.alert('No tienes el suficiente saldo')
    }
    const repeatCoin = user.coins.findIndex(res => res.id === newCoin.id)

    if (repeatCoin === -1) {
      user.coins.unshift(newCoin)
    } else {
      user.coins[repeatCoin].amount += amount / coin.current_price.usd
      user.coins[repeatCoin].amountUsd += amount
    }

    window.localStorage.setItem('user', JSON.stringify(user))
    setUser({ ...user })

    const lastCoins = JSON.parse(window.localStorage.getItem('lastCoin', newCoin))

    if (lastCoins === null) {
      window.localStorage.setItem('lastCoin', JSON.stringify([newCoin]))
    } else {
      window.localStorage.setItem('lastCoin', JSON.stringify([newCoin, ...lastCoins]))
    }

    setAmount(0)
  }

  const handleAmountCoin = (e) => {
    if (e.target.value < 0) e.target.value = 0
    setAmount(parseInt(e.target.value))
  }

  const handleAddFavorite = () => {
    const favorites = JSON.parse(window.localStorage.getItem('favorites'))
    const fav = {
      id: coin.id,
      name: coin.name,
      image: coin.large,
      amount: (amount / coin.current_price.usd),
      amountUsd: amount,
      symbol: coin.symbol
    }

    if (favorites !== null) {
      const isFavoriteIcon = favorites.findIndex(res => res.id === coin.id)
      if (isFavoriteIcon === -1) {
        window.localStorage.setItem('favorites', JSON.stringify([fav, ...favorites]))
        setIsFavorite(true)
      } else {
        const deletefav = favorites.filter(res => res.id !== coin.id)
        window.localStorage.setItem('favorites', JSON.stringify(deletefav))
        setIsFavorite(false)
      }
    } else {
      window.localStorage.setItem('favorites', JSON.stringify([fav]))
      setIsFavorite(true)
    }

    (JSON.parse(window.localStorage.getItem('favorites')))
  }

  return { handleAddFavorite, handleAmountCoin, handleBuyCoin, isError, isFavorite, isLoading, user, labels, data, amount, coin }
}
