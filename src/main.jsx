import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HotelProvider } from './context/HotelContext.jsx'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import HotelDetails from './HotelDetails.jsx'
import { BookingProvider } from './context/BookingContext.jsx'
import MyBookings from './MyBooking.jsx'
import Hotels from './Hotels.jsx'
import AboutUs from './About.jsx'
import Contact from './Contact.jsx'

const routes=createBrowserRouter([
  {path:"/", element:<App/>, children:[
    {index:true, element:<Home/>},
    {path:"hotel/:id",element:<HotelDetails/>},
    {path:"/mybookings",element:<MyBookings/>},
    {path:"/hotels",element:<Hotels/>},
    {path:"/about",element:<AboutUs/>},
    {path:"/contact",element:<Contact/>},
  ]}
])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <HotelProvider>
      <BookingProvider>
        <RouterProvider router={routes}/>
      </BookingProvider>
    </HotelProvider>
  </StrictMode>,
)
