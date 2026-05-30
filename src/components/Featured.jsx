import React from 'react'
import { useNavigate } from 'react-router-dom'

function Featured({data,heading,desc}) {
    const navigate=useNavigate()
  return (
  <div className="my-5 mx-4 py-10 px-4 bg-gray-100/30 rounded-lg">

  <h2 className="text-4xl font-semibold text-center mb-2">
    {heading}
  </h2>

  <p className="text-center text-gray-500 text-sm mb-8 max-w-md mx-auto">
    {desc}
  </p>

  {/* IMPORTANT FIX */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
  {data.map((hotel) => (
    <div
    onClick={()=>navigate(`/hotel/${hotel.id}`)}
      key={hotel.id}
      className="cursor-pointer w-full max-w-xs rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition"
    >
      <img
        src={hotel.images?.[0]}
        className="w-full h-40 object-cover"
        alt={hotel.name}
      />

      <div className="p-3">
        <h3 className="text-lg font-semibold">{hotel.name}</h3>
        <p className="text-gray-500 text-sm">{hotel.city}</p>
        <p className="mt-2 font-medium">
          PKR {hotel.rooms?.[0]?.pricePerNight}
          <span className="text-gray-400 text-xs"> Per Night</span>
        </p>
      </div>
    </div>
  ))}
</div>
</div>
  )
}

export default Featured