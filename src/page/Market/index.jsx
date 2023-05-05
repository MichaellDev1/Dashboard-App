import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import ContentSection from '../../components/ContentSection/index'
import useMarket from '../../hooks/useMarket'

export default function Market () {
  const { coins, isLoading } = useMarket()
  return (
    <ContentSection>
      <div className='flex justify-center px-6 w-full h-min-[400px] relative'>
        {
        isLoading
          ? <div className='w-[100%] flex h-[70vh] justify-center items-center'><Spinner /></div>
          : <div className='sm:px-[20px] w-full'>
            <div className='flex justify-between mb-1 text-[#1a1a1a] bg-white py-2 px-5 shadow-sm rounded-lg text-lg font-semibold'>
              <h2>Coin</h2>
              <div className='flex'>
                <div className='w-[100px]  sm:block hidden'>
                  <span className='mr-[45px]'>
                    24h
                  </span>
                </div>
                <div className='w-[100px]'>
                  <span>
                    Price
                  </span>
                </div>
              </div>
            </div>
            <ul>
              {coins.map(coin => (
                <li key={coin.id} className='cursor-pointer  my-2 bg-white shadow-sm rounded-lg'>
                  <Link to={`/detail/${coin.id}`} className='flex items-center justify-between py-2 px-5'>
                    <div className='flex items-center'>
                      <div className='w-[35px] h-[35px] overflow-hidden mr-3 rounded-full'>
                        <img src={coin.image} alt={coin.name} className='w-full h-full object-cover' />
                      </div>
                      <div className='flex sm:items-center sm:flex-row flex-col'>
                        <h4 className='text-base font-semibold'>{coin.name}</h4>
                        <span className='sm:ml-[5px]  text-stone-600 font-normal text-sm'>{coin.symbol}</span>
                      </div>
                    </div>
                    <div className='font-medium flex'>
                      <div className='w-[100px] sm:block hidden'>
                        <span className={`${coin.price_change_24h.toString().includes('-') ? 'text-[#e22222]' : 'text-green-700'} mr-8`}>{(coin.price_change_24h).toFixed(3)}
                        </span>
                      </div>
                      <div className='w-[100px]'>
                        <span>${coin.current_price}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            </div>
      }
      </div>
    </ContentSection>
  )
}
