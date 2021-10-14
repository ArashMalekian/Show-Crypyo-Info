import axios from "axios"

const URL ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false"

export const getApi = async () => {
    const response = await axios.get(URL);
    return response.data
    
}