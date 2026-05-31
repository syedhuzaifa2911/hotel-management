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
    <div className="bg-white/80 p-6 rounded-xl shadow-md grid gap-4 md:grid-rows-2">

      {/* City */}
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded"
      />

      
      {/* Button */}
      <button
        onClick={handleSearch}
        className="bg-black text-white rounded h-10"
      >
        Search
      </button>
    </div>
  );
}

export default HeroSearch;