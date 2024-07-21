import axios from 'axios';
import StocksModel from './models';



export const getStocksBulkData = async () => {
    try {

        const response = await axios.post('https://api.livecoinwatch.com/coins/map', {
            codes: ['BTC', 'ETH', 'BNB', "XRP", "APT"],
            currency: "USD",
            sort: "rank",
            order: "ascending",
            offset: 0,
            limit: 100,
            meta: true,
        }, {
            headers: {
                'content-type': 'application/json',
                'x-api-key': process.env.API_KEY,
            }
        });
        response.data.forEach(async (data: { symbol: string, rate: number, name: string, code: string }) => {

            const stockPrice = new StocksModel({ symbol: data.symbol || data.name, price: data.rate, name: data.code });
            await stockPrice.save();
        })

    } catch (error) {
        console.error('Error fetching stocks data:', error);
    }
};
