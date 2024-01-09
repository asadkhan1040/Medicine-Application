import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: "patient",
    initialState: {
        value: []
    },
    reducers: {

        newPatientReducer: (state, action) => {
            state.value = action.payload
        },
        listPatientReducer: (state, action) => {
            state.value = action.payload
        },
        patientStatusReducer: (state, action) => {
            state.value = action.payload
        },
        patientDeleteReducer: (state, action) => {
            state.value = action.payload
        },

    }
})
export const { newPatientReducer, listPatientReducer, patientStatusReducer, patientDeleteReducer } = slice.actions
export default slice.reducer
