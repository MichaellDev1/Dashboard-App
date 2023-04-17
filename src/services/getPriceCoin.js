import { MARKET_URL, URL_API } from './config'

function dataMarket (data) {
  console.log(data)
  const coins = data.map((singleIcon) => {
    const {
      id,
      name,
      current_price,
      image,
      total_volume,
      total_supply,
      sparkline_in_7d,
      circulating_supply,
      hight_24h,
      market_cap,
      price_change_24h,
      symbol
    } = singleIcon

    return {
      id,
      name,
      current_price,
      image,
      total_volume,
      total_supply,
      sparkline_in_7d,
      circulating_supply,
      hight_24h,
      market_cap,
      price_change_24h,
      symbol
    }
  })

  return coins
}

const getPriceCoin = ({ page = 1, limit = 20 }) => {
  return fetch(
    `${URL_API}${MARKET_URL}?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=${page}&sparkline=true&price_change_percentage=price_change_percentage&locale=en`
  )
    .then((res) => res.json())
    .then(dataMarket)
}

export default getPriceCoin
