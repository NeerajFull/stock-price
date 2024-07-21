import { configureStore } from '@reduxjs/toolkit'
import stockSlice from './slices/stockSlice'
import additionalSlice from './slices/additionalSlice'

const store = configureStore({
    reducer: {
        stocks: stockSlice,
        additionalStates: additionalSlice
    },
})

export default store