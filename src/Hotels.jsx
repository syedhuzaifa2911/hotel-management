import { useLocation, useNavigate } from "react-router-dom";
import { useHotel } from "./context/HotelContext";

function Hotels() {
  const { hotels } = useHotel();
  const location = useLocation();
  const navigate = useNavigate();

  const search = location.state;

  const filteredHotels = search?.city
    ? hotels.filter(
        (h) =>
          h.city.toLowerCase() === search.city.toLowerCase()
      )
    : hotels;

  return (
    <div className="max-w-6xl mx-auto p-6 my-24">
      <h1 className="text-2xl font-bold mb-6">
        Hotels in {search?.city || "All Cities"}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            onClick={() => navigate(`/hotel/${hotel.id}`)}
            className="cursor-pointer border rounded-xl overflow-hidden hover:shadow-lg"
          >
            <img
              src={hotel.images[0]}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold">
                {hotel.name}
              </h2>
              <p className="text-gray-500">
                {hotel.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;