import { MARKET_URL, SINGLE_COIN, URL_API } from './config'

function dataMarket (data) {
  console.log(data)
  const { id, name, image, market_data, description, total_volume, symbol } = data

  const { thumb, large } = image
  const {
    current_price,
    low_24h,
    high_24h,
    circulating_supply,
    sparkline_7d
  } = market_data

  return {
    id,
    name,
    thumb,
    market_data,
    symbol,
    description,
    current_price,
    total_volume,
    low_24h,
    circulating_supply,
    high_24h,
    large,
    sparkline_7d
  }
}

const getSingleCoin = ({ id }) => {
  return fetch(`${URL_API}${SINGLE_COIN}${id}?market_data=true&sparkline=true

  `)
    .then((res) => res.json())
    .then(dataMarket)
}

export default getSingleCoin
