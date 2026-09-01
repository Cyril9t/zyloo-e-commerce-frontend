import { createRoot } from 'react-dom/client'


import { ThemeProvider } from './app/providers.tsx'
import './index.css'
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
  ,
)
