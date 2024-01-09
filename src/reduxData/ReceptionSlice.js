import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: "recp",
    initialState: {
        value: []
    },
    reducers: {

        newRecpReducer: (state, action) => {
            state.value = action.payload
        },
        listRecpReducer: (state, action) => {
            state.value = action.payload
        }

    }
})
export const { newRecpReducer, listRecpReducer } = slice.actions
export default slice.reducer
