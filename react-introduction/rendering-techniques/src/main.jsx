import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppProps from './AppProps.jsx'
import ConditionalElements from './ConditionalElements.jsx'
import Recipes from './Recipes.jsx'
import Gallery from './Scientists.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppProps />
    <ConditionalElements />
    <Recipes />
    <Gallery />
  </React.StrictMode>,
)
