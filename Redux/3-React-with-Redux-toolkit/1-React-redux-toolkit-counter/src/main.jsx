import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import MainStore from './store/MainStore.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={MainStore}>
    <App />
    </Provider>
   
  </React.StrictMode>,
)
