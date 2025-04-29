import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)
