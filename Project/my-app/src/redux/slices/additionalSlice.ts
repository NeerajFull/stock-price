import { createSlice } from '@reduxjs/toolkit';


type sliceState = {
    isPopupOpen: boolean,
    selectedCode: string
};

const initialState: sliceState = {
    isPopupOpen: false,
    selectedCode: "BTC"
};

export const additionalSlice = createSlice({
    name: 'additionalStates',
    initialState,
    reducers: {
        setIsPopupOpen: (state, action) => {
            state.isPopupOpen = action.payload;
        },
        setSelectedCode: (state, action) => {
            state.selectedCode = action.payload;
        }
    },
});

export const { setIsPopupOpen, setSelectedCode } = additionalSlice.actions;
export default additionalSlice.reducer;
