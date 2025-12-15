import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactFoundations from './components/React Foundations/Reactfoundations.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ReactFoundations  name ="venu"/>
    
  </StrictMode>,
)
