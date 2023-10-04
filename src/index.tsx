import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import Start from './Start'

const DOM = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
DOM.render (
    <React.StrictMode>
        <Start />
    </React.StrictMode>
)