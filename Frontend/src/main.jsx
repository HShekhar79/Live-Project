import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import DarkModeButton from './components/DarkModeButton.jsx'
import App from './App.jsx'
import AuthProvider from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <AuthProvider>
    <ThemeProvider>
      < DarkModeButton />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
    </AuthProvider>
)
