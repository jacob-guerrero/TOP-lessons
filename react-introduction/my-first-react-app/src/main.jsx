import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greeting.jsx'
import { FavoriteFoodTitle, FavoriteFood } from './FavoriteFood.jsx'
import Items from './Items.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greeting />
    <FavoriteFoodTitle />
    <FavoriteFood />
    <Items/>
  </React.StrictMode>,
)
