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
import SinglePage from './Layout/SinglePage.tsx'
import PortfolioPage from './Left-side/Leftside-Pages/PortfolioPage.tsx'
import ContactPage from './Left-side/Leftside-Pages/ContactPage.tsx'
import FAQPage from './Left-side/Leftside-Pages/FqaPage.tsx'
import AboutPage from './Left-side/Leftside-Pages/AboutPage.tsx'
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
          path: '/product/:id',
          element: <SinglePage />,
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
        {
          path:'/PortfolioPage',
          element:<PortfolioPage/>
        },
        {
          path:'/contact',
          element:<ContactPage/>
        },
        {
          path:'/FAQPage',
          element:<FAQPage/>
        },
        {
          path:'/about',
          element:<AboutPage/>
        },

        
      ],
    },
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
