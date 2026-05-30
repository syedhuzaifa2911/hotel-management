import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HotelProvider } from './context/HotelContext.jsx'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import HotelDetails from './HotelDetails.jsx'

const routes=createBrowserRouter([
  {path:"/", element:<App/>, children:[
    {index:true, element:<Home/>},
    {path:"hotel/:id",element:<HotelDetails/>}
  ]}
])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <HotelProvider>
      <RouterProvider router={routes}/>
    </HotelProvider>
  </StrictMode>,
)
