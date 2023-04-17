import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineRise } from 'react-icons/ai'
import { data, options } from '../../Db/GraficaHome'
import Context from '../../context/userContext'
import ChartLine from '../../components/ChartLine'
import './index.css'

export default function Dashboard () {
  const { user, setUser } = useContext(Context)
  const [coinActivitie, setCoinActivitie] = useState([])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    const coins = JSON.parse(localStorage.getItem('lastCoin'))
    if (coins !== null) setCoinActivitie(coins)
  }, [])

  return user
    ? <div className='px-6 w-full h-min-[400px] relative'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 w-full place-content-centeh-full'>
        <div className='min-h-[520px] col-span-2 flex flex-col gap-5'>
          <div
            className='w-full h-[300px] flex flex-col justify-center bg-white relative py-3 px-5 rounded-2xl'
            style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
          >
            <h2 className='font-semibold text-xl mb-3'>Your Target</h2>
            <div className='bg-[#28282e] rounded-xl relative text-white p-5 md:w-[300px] w-[270px] card-animation'>
              <div className='w-16 min-h-[30px] mb-7'>
                <img
                  src='https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png'
                  alt=''
                  className='w-[100%] h-[100%] object-cover'
                />
              </div>
              <div className='flex flex-col h-[62] gap-8'>
                <div className=''>
                  <h3 className='font-semibold text-xs'>CARD NUMBER</h3>
                  <span className='text-sm'>8493 **** **** ****</span>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col gap-[15px]'>
                    <h6 className='text-[10px]' style={{ lineHeight: '2px' }}>
                      CARD HOLDER NAME
                    </h6>
                    <span
                      className='font-semibold text-sm'
                      style={{ lineHeight: '2px' }}
                    >
                      {user.name}
                    </span>
                  </div>
                  <div className='flex flex-col gap-[15px]'>
                    <h6 className='text-[10px]' style={{ lineHeight: '2px' }}>
                      VALID THRU
                    </h6>
                    <span
                      className='font-semibold text-base'
                      style={{ lineHeight: '2px' }}
                    >
                      12/28
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='w-full h-[300px] flex flex-col justify-center items-center bg-white p-3 rounded-2xl'
            style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
          >
            <ChartLine data={data} options={options} />
          </div>
        </div>
        <div className='min-h-[520px] flex flex-col gap-5'>
          <div
            className='w-full h-[300px] flex flex-col justify-center items-center bg-white p-3 rounded-2xl'
            style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
          >
            <div className='w-28 h-28 relative  rounded-full  overflow-hidden'>
              <img
                src={user.image}
                className='w-full h-full object-cover'
                alt=''
              />
            </div>
            <div className='flex flex-col text-center mt-2'>
              <h4 className='text-lg font-semibold text-slate-950'>
                Total Balance
              </h4>
              <span className='text-2xl font-bold text-[#1a1a1a]'>
                ${user.balance}
              </span>
              <div className='flex gap-2 mt-2 justify-center'>
                <span className='text-sm font-bold py-1 px-3 text-white bg-[#4360ef] rounded-xl'>
                  {user.balancePercentege}%
                </span>
                <span className='text-lg font-bold py-1 px-3 text-white bg-[#4360ef] grid place-content-center rounded-xl'>
                  <AiOutlineRise />
                </span>
              </div>
            </div>
          </div>
          <div
            className='w-full overflow-y-scroll h-[300px] bg-white p-5 rounded-2xl'
            style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
          >
            <h3 className='text-[22px] text-slate-950 font-bold'>
              Recent Activities
            </h3>
            <div className='mt-5'>

              <ul className='flex flex-col gap-5'>
                {coinActivitie.length > 0
                  ? coinActivitie.map(coin => (
                    <li key={coin.id}>
                      <div className=' flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                          <div className='w-11 h-11  relative overflow-hidden rounded-2xl'>
                            <img
                              src={coin.image}
                              className='w-full h-full object-cover'
                              alt={coin.name}
                            />
                          </div>
                          <h5 className='text-base font-semibold'>{coin.name}</h5>
                        </div>
                        <div className='flex flex-col text-end text-[16px] font-semibold'>
                          <span className='text-[#e65d56]'>-${coin.amountUsd}</span>
                          <span className='text-[#4de2ce]'>+{(coin.amount).toFixed(5)}</span>
                        </div>
                      </div>
                    </li>
                  ))
                  : <h4 className='text-sm font-semibold text-[#8f8f8f]'>Ningun registro</h4>}
              </ul>

            </div>
          </div>
        </div>
      </div>
      </div>
    : null
}
