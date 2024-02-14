import { configureStore } from "@reduxjs/toolkit";
import counterSlicer from "./counterSlicer";
import privacySlicer from "./privacySlicer";







const MainStore = configureStore({
  reducer: {
    counter: counterSlicer.reducer,
    privacy: privacySlicer.reducer,
  },
});

export default MainStore;
