import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from './components/theme/theme-provider.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
