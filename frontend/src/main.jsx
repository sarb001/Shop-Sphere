import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {   BrowserRouter as  Router } from 'react-router-dom'
import reduxStore from './components/store.jsx';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {reduxStore}>
    <Router>
       <App />
    </Router>
  </Provider>
)
