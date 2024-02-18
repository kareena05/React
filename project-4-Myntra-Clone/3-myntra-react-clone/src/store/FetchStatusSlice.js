import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, //false:"PENDING"  true:"COMPLETED"
    isFetching: false,
  },
  reducers: {
    setFetchDone: (state) => {
      state.fetchDone = true;
    },
    setFetchingStarted: (state) => {
      state.isFetching = true;
    },
    setFetchingFinished: (state) => {
       state.isFetching = false;
    },
  },
});

export default FetchStatusSlice;
export const FetchStatusActions = FetchStatusSlice.actions;
