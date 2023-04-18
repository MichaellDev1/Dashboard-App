import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineRise } from 'react-icons/ai'
import { data, options } from '../../Db/GraficaHome'
import { SiVisa } from 'react-icons/si'
import { RiMastercardFill } from 'react-icons/ri'
import Context from '../../context/userContext'
import ChartLine from '../../components/ChartLine'
import './index.css'
const cards = [
  {
    type: 'mastercard',
    number: '0000 0000 0000 1300',
    bkgnPrimary: '#516ae7',
    bkgnSecondary: '#60b2e9',
    icon: <RiMastercardFill />,
    balance: '10,370.730'
  },
  {
    type: 'visa',
    number: '0000 0000 0000 1500',
    bkgnPrimary: '#eb35eb',
    bkgnSecondary: '#ee5dee',
    icon: <SiVisa />,
    balance: '6,823.120'
  }
]

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
            className='w-full mi-h-[300px] justify-center bg-white relative  py-3 px-5 rounded-2xl'
            style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
          >
            <h2 className='font-semibold text-xl mb-3'>Your Target</h2>

            <div className='flex justify-center items-center sm:flex-row flex-col'>
              {
                cards.map(({ bkgnPrimary, bkgnSecondary, type, number, icon, balance }) => (
                  <div key={type} className='rounded-xl relative m-2 text-white shadow-lg py-4 px-5 sm:w-[300px] w-[300px] card-animation' style={{ background: `linear-gradient(30deg,${bkgnPrimary},${bkgnSecondary})` }}>
                    <div className='flex justify-end w-full min-h-[30px] text-[40px]'>
                      {icon}
                    </div>
                    <div className='flex flex-col'>
                      <h5 className='text-sm font-semibold'>Name</h5>
                      <h5 className='font-normal text-sm'>{user.name}</h5>
                      <span className='font-normal mt-2'>{number}</span>
                      <h5 className='text-sm mt-2 font-semibold'>Balance</h5>
                      <h5 className='font-normal  text-sm'>${balance}</h5>
                    </div>
                  </div>
                ))
              }
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
            <h2 className='font-semibold text-xl mb-3'>Recent Activities</h2>

            <div className='mt-5'>

              <ul className='flex flex-col'>
                {coinActivitie.length > 0
                  ? coinActivitie.map(coin => (
                    <li key={coin.id} className='my-2'>
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
