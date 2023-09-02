import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/index.scss'
import App from './app'

const DOM = ReactDOM.createRoot(document.getElementById('root')as HTMLElement)
DOM.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)