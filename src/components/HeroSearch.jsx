import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroSearch() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city) return;
    navigate("/hotels", { state: { city } });
  };

  return (
    <div className="bg-white/80 p-4 sm:p-6 rounded-xl shadow-md flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">

      {/* City */}
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded flex-1 text-sm"
      />

      {/* Button */}
      <button
        onClick={handleSearch}
        className="bg-black text-white rounded h-10 px-6 text-sm font-medium"
      >
        Search
      </button>
    </div>
  );
}

export default HeroSearch;