import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DrawingApp from './DrawingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DrawingApp />
  </StrictMode>,
)
