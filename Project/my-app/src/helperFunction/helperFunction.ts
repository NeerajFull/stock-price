import axios from "axios";



export const getStocksList = async (symbol: string) => {
    try {
        const response = await axios.get(`http://localhost:5000/coins/${symbol}`);

        return response.data;
    } catch (error) {
        console.log("ERROR in getting stocks", error);
    }

}