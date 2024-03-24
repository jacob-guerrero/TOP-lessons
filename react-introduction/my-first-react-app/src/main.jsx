import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greeting.jsx'
import { FavoriteFoodTitle, FavoriteFood } from './FavoriteFood.jsx'
import Items from './Items.jsx'
import Bio from './Bio.jsx'
import Expressions from './Expressions'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greeting />
    <FavoriteFoodTitle />
    <FavoriteFood />
    <Items />
    <Bio />
    <Expressions />
  </React.StrictMode>,
)
