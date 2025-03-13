import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'
import MainlayoutPage from './Layout/MainlayoutPage.tsx'
import Navbar from './components/Navbar.tsx'
import HomePage from './Layout/HomePage.tsx'
import Services from './Left-side/Leftside-Pages/Services.tsx'
import BusinessCards from './Left-side/Leftside-Pages/BusinessCards.tsx'
import FlyersBrochures from './Left-side/Leftside-Pages/Flers&Brochures.tsx'
import PostereBanners from './Left-side/Leftside-Pages/PostereBanners.tsx'
import LogoDesign from './Left-side/Leftside-Pages/LogoDesign.tsx'
import FlexBanner from './Left-side/Leftside-Pages/FlexBanner.tsx'
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
        {
          path:'/services',
          element:<Services/>
        },
        {
          path:'/businesscards',
          element:<BusinessCards/>
        },
        {
          path:'/flersbrochures',
          element:<FlyersBrochures/>
        },
        {
          path:'/posterebanners',
          element:<PostereBanners/>
        },
        {
          path:'/logodesign',
          element:<LogoDesign/>
        },
        {
          path:'/flexbanner',
          element:<FlexBanner/>
        },
        
      ],
    },
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
