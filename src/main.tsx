import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import { ThemeProvider } from './app/providers.tsx'
import './index.css'
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
  ,
)
