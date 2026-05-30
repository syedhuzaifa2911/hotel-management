import React from 'react'

function Booking() {
  return (
    <div className="bg-white/90 rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-5 gap-4 w-[70vw] ">
  
  {/* Location */}
  <div>
    <label className="block text-sm font-medium mb-2">
      Location
    </label>
    <input
      type="text"
      placeholder="Where are you going?"
      className="w-full border rounded-lg px-3 py-2"
    />
  </div>

  {/* Check In */}
  <div>
    <label className="block text-sm font-medium mb-2">
      Check In
    </label>
    <input
      type="date"
      className="w-full border rounded-lg px-3 py-2"
    />
  </div>

  {/* Check Out */}
  <div>
    <label className="block text-sm font-medium mb-2">
      Check Out
    </label>
    <input
      type="date"
      className="w-full border rounded-lg px-3 py-2"
    />
  </div>

  {/* Guests */}
  <div>
    <label className="block text-sm font-medium mb-2">
      Guests
    </label>
    <input
      type="number"
      min="1"
      defaultValue="1"
      className="w-full border rounded-lg px-3 py-2"
    />
  </div>

  {/* Button */}
  <div className="flex items-end">
    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
      Check
    </button>
  </div>

</div>
  )
}

export default Booking