import React, { useContext, useEffect, useState } from 'react'
import getPriceCoin from '../../services/getPriceCoin'
import Context from '../../context/userContext'

export default function Market () {
  const [coins, setCoins] = useState([])
  const { user, setUser } = useContext(Context)
  useEffect(() => {

    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }

    getPriceCoin({ limit: 40, page: 1 }).then(res => {
      console.log(res)
      setCoins(res)
    })
  }, [])
  return (
    <div className='flex justify-center min-h-[85vh]'>
      <div>
        <table className='table-fixed w-full'>
          <thead className='w-full'>
            <tr className='flex gap-25'>
              <th>#</th>
              <th>Coin</th>
              <th className='pl-5'>Price</th>
              <th>24h Volume</th>
              <th>Mkt Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map(res => <tr key={res.id} className='flex gap-25 py-3'>
              <td>1</td>
              <td>{res.name}</td>
              <td className='pl-5'>{res.current_price}</td>
              <td>234</td>
              <td>{res.market_cap}</td>

            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
