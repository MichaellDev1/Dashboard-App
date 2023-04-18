import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getSingleCoin from '../../services/getSingleIcon'
import Context from '../../context/userContext'
import { RxStar, RxStarFilled } from 'react-icons/rx'
import ChartLine from '../../components/ChartLine'
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart'
    // }
  }
}
let labels, data

export default function Detail () {
  const { keyword } = useParams()
  const [coin, setCoin] = useState()
  const [isLoading, setLoading] = useState(false)
  const { user, setUser } = useContext(Context)
  const [amount, setAmount] = useState(0)
  const [isError, setError] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const localStorageFavorite = JSON.parse(localStorage.getItem('favorites'))
    setLoading(true)
    getSingleCoin({ id: keyword }).then(response => {
      setCoin(response)
      setError(false)
      setLoading(false)
      console.log(response)
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
  }, [keyword])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  const handleBuyCoin = () => {
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
      return alert('No te alcanza pobre')
    }
    const repeatCoin = user.coins.findIndex(res => res.id === newCoin.id)

    if (repeatCoin == -1) {
      user.coins.unshift(newCoin)
    } else {
      user.coins[repeatCoin].amount += amount / coin.current_price.usd
      user.coins[repeatCoin].amountUsd += amount
    }

    localStorage.setItem('user', JSON.stringify(user))
    setUser({ ...user })

    const lastCoins = JSON.parse(localStorage.getItem('lastCoin', newCoin))

    if (lastCoins === null) {
      localStorage.setItem('lastCoin', JSON.stringify([newCoin]))
    } else {
      localStorage.setItem('lastCoin', JSON.stringify([newCoin, ...lastCoins]))
    }
  }

  const handleAmountCoin = (e) => {
    if (e.target.value < 0) e.target.value = 0
    setAmount(parseInt(e.target.value))
  }

  const handleAddFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
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
        localStorage.setItem('favorites', JSON.stringify([fav, ...favorites]))
        setIsFavorite(true)
      } else {
        const deletefav = favorites.filter(res => res.id !== coin.id)
        localStorage.setItem('favorites', JSON.stringify(deletefav))
        setIsFavorite(false)
      }
    } else {
      localStorage.setItem('favorites', JSON.stringify([fav]))
      setIsFavorite(true)
    }

    (JSON.parse(localStorage.getItem('favorites')))
  }

  return user
    ? <div className='px-6 w-full h-min-[400px] relative'>
      {isLoading
        ? <h3 className='text-lg font-semibold'>Cargando...</h3>
        : isError
          ? <h3 className='text-lg font-semibold'>No se a encontrado resultados</h3>
          : coin
            ? <div className=''>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                  <div className='flex items-center mb-3'>
                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden mr-2 relative'>
                      <img src={coin.large} alt='' className='w-full object-cover h-full' />
                    </div>
                    <h1 className='text-3xl font-semibold'>{coin.name}</h1>
                  </div>
                  <span className='text-stone-800 text-2xl font-medium'>${coin.current_price.usd}</span>
                  <span className={` ${coin.market_data.price_change_24h_in_currency.usd.toString().includes('-') ? 'text-[#e22222]' : 'text-green-700'} text-base font-medium`}>{coin.market_data.price_change_24h_in_currency.usd}</span>
                </div>
                <div>
                  <button className='text-2xl' onClick={handleAddFavorite}>
                    {isFavorite ? <span className='text-yellow-400'><RxStarFilled /></span> : <RxStar />}
                  </button>
                </div>
              </div>
              <div>
                <div className='w-full min-h-[400px] max-h-[500px] max-w-[1600px] flex justify-center items-center'>
                  <ChartLine data={data} options={options} />
                </div>
              </div>
              <div className='flex justify-between my-5'>
                <div className='flex flex-col'>
                  <h6 className='text-lg font-semibold'>Circulating Supply</h6>
                  <span className='text-sm font-medium text-[#8f8f8f]'>{coin.circulating_supply}</span>
                </div>
                <div className='flex flex-col'>
                  <h6 className='text-lg font-semibold'>Low 24H</h6>
                  <span className='text-sm font-medium text-[#8f8f8f]'>${coin.low_24h.usd}</span>
                </div>
                <div className='flex flex-col'>
                  <h6 className='text-lg font-semibold'>High_24H</h6>
                  <span className='text-sm font-medium text-[#8f8f8f]'>${coin.high_24h.usd}</span>
                </div>
              </div>
              <div className='flex flex-col items-start'>
                <div>
                  <input type='number' name='number' id='number' onChange={handleAmountCoin} />
                  {amount ? <span>{(amount / coin.current_price.usd).toFixed(6)}</span> : null}
                </div>
                <button onClick={handleBuyCoin} className='bg-[#4360EF] text-white font-semibold text-base rounded-lg py-1 px-5'>Buy</button>
              </div>
            </div>
            : null}
    </div>
    : null
}
