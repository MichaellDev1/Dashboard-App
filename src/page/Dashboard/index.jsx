import React from 'react'
import { AiOutlineRise } from 'react-icons/ai'
import { userConfig } from '../../Db/user'
import './index.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { data, options } from '../../Db/GraficaHome/index'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)
export default function Dashboard () {
  return (
    <div className='px-6 w-full h-min-[400px] relative'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 w-full place-content-centeh-full'>
        <div className='min-h-[520px] col-span-2 flex flex-col gap-5'>
          <div
            className='w-full h-[300px] flex flex-col justify-center bg-white py-3 px-5 rounded-2xl'
            style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
          >
            <h2 className='font-semibold text-xl mb-3'>Your Target</h2>
            <div className='bg-[#28282e] rounded-xl h-[200px] relative text-white p-4 card-animation'>
              <div className='w-16 mb-7'>
                <img
                  src='https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png'
                  alt=''
                  className='w-[100%] h-[100%] object-cover'
                />
              </div>
              <div className='flex flex-col h-[62] gap-8'>
                <div className=''>
                  <h3 className='font-semibold text-sm'>CARD NUMBER</h3>
                  <span>8493 **** **** ****</span>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col gap-[15px]'>
                    <h6 className='text-[10px]' style={{ lineHeight: '2px' }}>
                      CARD HOLDER NAME
                    </h6>
                    <span
                      className='font-semibold text-base'
                      style={{ lineHeight: '2px' }}
                    >
                      Michael Santucho
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
            <Line data={data} options={options} />
          </div>
        </div>
        <div className='min-h-[520px] flex flex-col gap-5'>
          <div
            className='w-full h-[300px] flex flex-col justify-center items-center bg-white p-3 rounded-2xl'
            style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
          >
            <div className='w-28 h-28 relative  rounded-full  overflow-hidden'>
              <img
                src={userConfig.image}
                className='w-full h-full object-cover'
                alt=''
              />
            </div>
            <div className='flex flex-col text-center mt-2'>
              <h4 className='text-lg font-semibold text-slate-950'>
                Total Balance
              </h4>
              <span className='text-2xl font-bold text-[#1a1a1a]'>
                $19.989.457
              </span>
              <div className='flex gap-2 mt-2 justify-center'>
                <span className='text-sm font-bold py-1 px-3 text-white bg-[#4360ef] rounded-xl'>
                  +13,54%
                </span>
                <span className='text-lg font-bold py-1 px-3 text-white bg-[#4360ef] grid place-content-center rounded-xl'>
                  <AiOutlineRise />
                </span>
              </div>
            </div>
          </div>
          <div
            className='w-full h-[300px] bg-white p-5 rounded-2xl'
            style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}
          >
            <h3 className='text-[22px] text-slate-950 font-bold'>
              Recent Activities
            </h3>
            <div className='mt-5'>
              <ul className='flex flex-col gap-5'>
                <li>
                  <div className=' flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className='w-11 h-11  relative overflow-hidden rounded-2xl'>
                        <img
                          src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                          className='w-full h-full object-cover'
                          alt='bitcoin'
                        />
                      </div>
                      <h5 className='text-base font-semibold'> Bitcoin</h5>
                    </div>
                    <div className='flex flex-col text-end text-[16px] font-semibold'>
                      <span className='text-[#e65d56]'>-982USD</span>
                      <span className='text-[#4de2ce]'>+00.00234</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className=' flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className='w-11 h-11  relative overflow-hidden rounded-2xl'>
                        <img
                          src='https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'
                          className='w-full h-full object-cover'
                          alt='bitcoin'
                        />
                      </div>
                      <h5 className='text-base font-semibold'>Ethereum</h5>
                    </div>
                    <div className='flex flex-col text-end text-[16px] font-semibold'>
                      <span className='text-[#e65d56]'>-1382USD</span>
                      <span className='text-[#4de2ce]'>+0.07234</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
