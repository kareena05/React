import {createSlice} from "@reduxjs/toolkit";
import DEFAULT_ITEMS from '../data/DEFAULT_ITEMS';

const itemSlice = createSlice({
    name:"items",
    initialState:DEFAULT_ITEMS,
    reducers:{
        addInitialItems:(state,action)=>{
            console.log(state,action);
            state = action.payload
            return state;
            

        }
    }
});

export default itemSlice;
export const itemActions = itemSlice.actions;


