import React from 'react'
import Hero from './components/Hero'
import { useHotel } from './context/HotelContext'
import { testimonals } from "./data/testimonals";
import Featured from './components/Featured'
import Testimonals from './components/Testimonals';
import Inspired from './components/Inspired';

function Home() {
    const {hotels}=useHotel()
    const recommended=hotels.slice(0,4)
    const featured=hotels.slice(2,6)
    const testimonials=testimonals.slice(0,3)
  return (
    <div>
        <Hero/>
        <Featured data={recommended} heading={"Recommended Hotels"} desc={"Discover top rated hotels with best comfort, pricing, and guest experiences for your next stay."}/>
        <Featured data={featured} heading={"Featured Destination"} desc={"Explore handpicked destinations with best hotels, affordable pricing, and exceptional hospitality for your perfect stay."}/>
        <Testimonals data={testimonials}/>
        <Inspired/>
    </div>
  )
}

export default Home