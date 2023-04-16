import { MARKET_URL, SINGLE_COIN, URL_API } from "./config";

function dataMarket(data) {
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
    description,
  } = data;

  const { thumb } = image;

  return {
    id,
    name,
    current_price,
    total_volume,
    total_supply,
    sparkline_in_7d,
    circulating_supply,
    hight_24h,
    market_cap,
    thumb,
    description
  };
}

const getSingleCoin = ({ id }) => {
  return fetch(`${URL_API}${SINGLE_COIN}${id}?market_data=true&sparkline=true

  `)
    .then((res) => res.json())
    .then(dataMarket);
};

export default getSingleCoin;
