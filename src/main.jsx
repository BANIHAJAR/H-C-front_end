import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Components/navbar/Nav.jsx'
import App from './Components/Home/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App/>
  </StrictMode>,
)
