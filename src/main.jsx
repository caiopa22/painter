import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DrawingApp from './DrawingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DrawingApp />
  </StrictMode>,
)
