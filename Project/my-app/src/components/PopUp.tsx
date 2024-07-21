import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPopupOpen, setSelectedCode } from "../redux/slices/additionalSlice";
import { getStocksList } from "../helperFunction/helperFunction";
import { updateStockList } from "../redux/slices/stockSlice";

const PopUp = () => {

    const isPopupOpen = useSelector((state: any) => state.additionalStates.isPopupOpen);
    const dispatch = useDispatch();

    const [symbol, setSymbol] = useState("");

    const stocks = [{
        name: "Bitcoin",
        code: "BTC",
        symbol: "₿"
    }, {
        name: "Ethereum",
        code: "ETH",
        symbol: "Ξ"
    }, {
        name: "XRP",
        code: "XRP",
        symbol: "XRP"
    }, {
        name: "Aptos",
        code: "APT",
        symbol: "APT"
    }, {
        name: "BNB",
        code: "BNB",
        symbol: "BNB"
    }]

    const handleChange = (e: any) => {
        setSymbol(e.target.value);
    }

    const handleUpdate = async () => {
        try {
            const response = await getStocksList(symbol);

            dispatch(setSelectedCode(symbol));

            dispatch(updateStockList(response));

            dispatch(setIsPopupOpen(false));

        } catch (error) {
            console.log("ERROR", error);
        }

    }

    const handleClose = () => {
        dispatch(setIsPopupOpen(false));
    }

    return <>

        <div className={`${!isPopupOpen && "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full m-auto top-1/4">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Update Symbols
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClose}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4">
                        {
                            stocks.map((stock: { name: string, code: string, symbol: string }, index) => {
                                return <>
                                    <div className="flex items-center mb-4" key={index}>
                                        <input id={stock.name} type="radio" value={stock.code} name="stock" className="w-4 h-4 text-blue-600 bg-gray-100" onChange={handleChange} />
                                        <label htmlFor={stock.name} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{stock.name} - {stock.code}</label>
                                    </div>
                                </>
                            })
                        }

                    </div>

                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button className="py-2.5 px-5 rounded-2xl p-2 text-white bg-blue-700 hover:bg-blue-800" onClick={handleUpdate}>Update</button>
                        <button className="py-2.5 px-5 ms-3 rounded-2xl p-2 bg-dark-700 text-white border border-gray-200 hover:bg-blend-darken" onClick={handleClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default PopUp;