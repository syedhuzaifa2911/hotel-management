import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroSearch() {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    if (!city) return;

    navigate("/hotels", {
      state: {
        city,
        checkIn,
        checkOut,
        guests,
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md grid gap-4 md:grid-cols-5">

      {/* City */}
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded"
      />

      {/* Checkin */}
      <input
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        className="border p-2 rounded"
      />

      {/* Checkout */}
      <input
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        className="border p-2 rounded"
      />

      {/* Guests */}
      <select
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        className="border p-2 rounded"
      >
        {[1, 2, 3, 4, 5].map((g) => (
          <option key={g} value={g}>
            {g} Guests
          </option>
        ))}
      </select>

      {/* Button */}
      <button
        onClick={handleSearch}
        className="bg-black text-white rounded"
      >
        Search
      </button>
    </div>
  );
}

export default HeroSearch;