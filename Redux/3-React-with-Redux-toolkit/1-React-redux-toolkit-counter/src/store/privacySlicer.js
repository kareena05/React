import { createSlice } from "@reduxjs/toolkit";

const privacySlicer = createSlice({
    name: "privacyname",
    initialState: false,
    reducers: {
      toggle: (state) => {
          console.log(state);
       return state = !state;
      },
    },
  });

export const privacyActions = privacySlicer.actions;
export default privacySlicer;