import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContext from './context.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
    <ToastContainer position='top-center' autoClose={2000}/>
    <App />
    </AppContext>
  </StrictMode>,
)
