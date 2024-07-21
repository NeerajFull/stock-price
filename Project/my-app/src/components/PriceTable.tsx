
import { useDispatch, useSelector } from "react-redux";
import { setIsPopupOpen } from "../redux/slices/additionalSlice";
import { useEffect } from "react";
import { getStocksList } from "../helperFunction/helperFunction";
import { updateStockList } from "../redux/slices/stockSlice";


const PriceTable = () => {

    const dispatch = useDispatch();
    const stocks = useSelector((state: any) => state.stocks.stockList);
    const selectedCode = useSelector((state: any) => state.additionalStates.selectedCode);


    const handleChangeSymbol = () => {
        dispatch(setIsPopupOpen(true));
    }

    const getStocks = async () => {
        const response = await getStocksList(selectedCode);
        dispatch(updateStockList(response));
    }

    useEffect(() => {
        const interval = setInterval(getStocks, 5000);

        return () => clearInterval(interval);
    }, [selectedCode]);

    useEffect(() => {
        getStocks();
    })
    

    return <>

        <div className="flex justify-between p-5">
            <h1 className="text-2xl font-bold">Real-time Stock Prices</h1>
            <button className="border rounded-2xl text-white bg-black hover:bg-slate-700 py-2.5 px-5" onClick={handleChangeSymbol}>Change Symbol</button>
        </div>

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            S. No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Coin - Symbol
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (stocks && stocks.data && stocks.data.length > 0) ? (stocks.data.map((stock: any, index: number) => {
                            return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    {index + 1}
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {stock.symbol}
                                </th>

                                <td className="px-6 py-4">
                                    {stock.price}
                                </td>
                            </tr>

                        })) : <td colSpan={2} className="px-6 py-4 text-center">
                            No data available
                        </td>
                    }

                </tbody>
            </table>
        </div>

    </>
}


export default PriceTable;