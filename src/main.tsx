import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'
import MainlayoutPage from './Layout/MainlayoutPage.tsx'
import Navbar from './components/Navbar.tsx'
import HomePage from './Layout/HomePage.tsx'
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainlayoutPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        
        {
          path: '/Navbar',
          element: <Navbar />,
        },
      ],
    },
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
