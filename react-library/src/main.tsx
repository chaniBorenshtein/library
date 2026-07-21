
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes'
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Routes} />
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
