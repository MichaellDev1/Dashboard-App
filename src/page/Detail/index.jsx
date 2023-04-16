import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getSingleCoin from '../../services/getSingleIcon'
import Context from '../../context/userContext'

export default function Detail () {
  const { keyword } = useParams()
  const [coin, setCoin] = useState()

  const { user, setUser } = useContext(Context)
  useEffect(() => {
    getSingleCoin({ id: keyword }).then(response => {
      setCoin(response)
    })
  }, [keyword])

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])

  return user
    ? <div>
      <h3>Console.log()</h3>
    </div>
    : null
}
