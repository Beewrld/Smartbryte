import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted variable fonts: no external font requests, no layout surprises.
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/dm-sans'
import './styles.css'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
