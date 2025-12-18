import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactFoundations from './components/Reactfoundations.jsx'
import Counter from './components/Counter.jsx'
import useEffect1 from './components/useEffect1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ReactFoundations  name ="venu"/>
    <Counter />
    <useEffect1 />
  </StrictMode>,
)
