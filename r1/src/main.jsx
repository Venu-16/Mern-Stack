import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactFoundations from './components/Reactfoundations.jsx'
import Counter from './components/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ReactFoundations  name ="venu"/>
    <Counter />
  </StrictMode>,
)
