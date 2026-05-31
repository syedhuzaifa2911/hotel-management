import { StrictMode } from 'react'
import { ClerkProvider, SignIn } from "@clerk/clerk-react";
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
import SignUpPage from './SignUpPage.jsx';
import SignInPage from './SignInPage.jsx';
const clerkPubKey =
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const routes=createBrowserRouter([
  {path:"/", element:<App/>, children:[
    {index:true, element:<Home/>},
    {path:"hotel/:id",element:<HotelDetails/>},
    {path:"/mybookings",element:<MyBookings/>},
    {path:"/hotels",element:<Hotels/>},
    {path:"/about",element:<AboutUs/>},
    {path:"/contact",element:<Contact/>},
    {
  path: "/sign-in",
  element: <SignInPage/>,
},
{
  path: "/sign-up",
  element: <SignUpPage/>,
}
  ]}
])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <HotelProvider>
      <BookingProvider>
        <RouterProvider router={routes}/>
      </BookingProvider>
    </HotelProvider>
    </ClerkProvider>
  </StrictMode>,
)
