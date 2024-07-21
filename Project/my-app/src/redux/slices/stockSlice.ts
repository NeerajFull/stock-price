import { createSlice } from '@reduxjs/toolkit';


type sliceState = {
    stockList: [{
        symbol: string,
        price: number
    }]
};

const initialState: sliceState = {
    stockList: [{
        symbol: "",
        price: 0
    }]
};

export const stockSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        updateStockList: (state, action) => {
            state.stockList = action.payload;
        },

    },
});

export const { updateStockList } = stockSlice.actions;
export default stockSlice.reducer;
