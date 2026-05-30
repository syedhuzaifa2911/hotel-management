import React, { useState } from "react";

function Checkbox() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  return (
    <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-5">
        Check Availability
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Check In */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Check In
          </label>

          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Check Out */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Check Out
          </label>

          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Guests
          </label>

          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          >
            {[1, 2, 3, 4, 5, 6].map((guest) => (
              <option key={guest} value={guest}>
                {guest} Guest{guest > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Check Availability
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkbox;