import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 14;
const textSlice = createSlice({

    name: "textSize",
    initialState: { value: initialStateValue },
    reducers: {
        increaseTextSize: (state, action) => {
            state.value = state.value + action.payload;
        },
        decreaseTextSize: (state, action) => {
            state.value = state.value - action.payload;
        }
        
    }
})

export const {increaseTextSize, decreaseTextSize} = textSlice.actions

export default textSlice.reducer