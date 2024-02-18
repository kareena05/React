import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "fetchStatus",
  initialState: [],
  reducers: {
     addToBag: (state,action) => {
      state.push(action.payload) ;
    },
    removeFromBag: (state,action) => {
     return state.filter( x => x != action.payload);
    },
    
  },
});

export default BagSlice;
export const BagActions = BagSlice.actions;
