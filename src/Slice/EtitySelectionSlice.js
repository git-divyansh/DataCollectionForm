import {createSlice} from "@reduxjs/toolkit";

const storedData = localStorage.getItem('reduxState');

const initialState = storedData ? JSON.parse(storedData) :{
   entity : "",
   currentFieldType : null,
   STUDENT : [],
   SELFEMPLOYED : [],
   BUISSNESS : []
}

export const EtitySelectionSlice = createSlice({
    name : "entity",
    initialState,
    reducers : {
        changeEntity : (state, action) => {
            state.entity = action.payload;

            // Save the changes to persist the data
            localStorage.setItem('reduxState', JSON.stringify(state));
        },
        changeFieldType : (state, action) => {
            state.currentFieldType = action.payload;

            // Save the changes to persist the data
            localStorage.setItem('reduxState', JSON.stringify(state));
        },
        changeEntityObject : (state, action) => {
            if(state[state.entity].length === 4){
                alert("Cannot enter more Fields");
                return;
            }
            state[state.entity] = [...state[state.entity], action.payload];

            // Save the changes to persist the data
            localStorage.setItem('reduxState', JSON.stringify(state));
        },
        updateEtittyObject : (state, action) => {
            state[state.entity] = action.payload;

            // Save the changes to persist the data
            localStorage.setItem('reduxState', JSON.stringify(state));
        },
        resetObject : (state, action) => {
            if (confirm('Are you sure?')) {
                state[state.entity] = action.payload;
                
                // Save the changes to persist the data
                localStorage.setItem('reduxState', JSON.stringify(state));
            } else {
                return;
            }
        }
    }
})

export const {changeEntity, changeFieldType, changeEntityObject, resetObject, updateEtittyObject} = EtitySelectionSlice.actions;

export default EtitySelectionSlice.reducer;