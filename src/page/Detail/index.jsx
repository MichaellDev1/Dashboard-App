import React from 'react'
import ChartLine from '../../components/ChartLine'
import Spinner from '../../components/Spinner/index'
import ContentSection from '../../components/ContentSection/index'
import useDetail from '../../hooks/useDetail'
import { useParams } from 'react-router-dom'
import FormBuyCoin from '../../components/FormBuyCoin'
import DetailCoin from '../../components/DetailCoin'
import SectionAddFavoriteCoin from '../../components/SectionAddFavoriteCoin'

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

export default function Detail () {
  const { keyword } = useParams()
  const { handleAddFavorite, handleAmountCoin, handleBuyCoin, isError, isFavorite, isLoading, user, data, amount, coin } = useDetail({ id: keyword })

  return user
    ? <ContentSection>
      <div className='sm:px-6 px-2 w-full pb-10 h-min-[400px] relative'>
        {isLoading
          ? <div className='w-[100%] flex h-[70vh] justify-center items-center'><Spinner /></div>
          : isError
            ? <div className='w-[100%] flex h-[70vh] justify-center items-center'><h3 className='text-lg font-semibold'>No se a encontrado resultados</h3></div>
            : coin
              ? <div className='w-full bg-white rounded-2xl p-5' style={{ boxShadow: '1px 1px 30px rgba(0 0 0 / 5%)' }}>
                <SectionAddFavoriteCoin coin={coin} handleAddFavorite={handleAddFavorite} isFavorite={isFavorite} />
                <div>
                  <div className='w-full min-h-[400px] max-h-[500px] max-w-[1600px] flex justify-center items-center'>
                    <ChartLine data={data} options={options} />
                  </div>
                </div>
                <DetailCoin coin={coin} />
                <FormBuyCoin amount={amount} handleAmountCoin={handleAmountCoin} handleBuyCoin={handleBuyCoin} />
                {amount ? <span className='font-semibold text-base text-neutral-700'>{(amount / coin.current_price.usd).toFixed(6)} {coin.symbol}</span> : null}
                </div>
              : null}
      </div>
      </ContentSection>
    : null
}
