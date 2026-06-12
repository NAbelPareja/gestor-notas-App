import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TareasApp } from './TareasApp'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <TareasApp></TareasApp>
    </StrictMode>,
  </BrowserRouter>
)
