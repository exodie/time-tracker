import './index.css'
import { routes } from './routes'
import { ThemeProvider } from './shared/lib'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>
)
