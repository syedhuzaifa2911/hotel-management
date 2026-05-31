import { useBooking } from "./context/BookingContext";
import { useNavigate } from "react-router-dom";

function MyBookings() {
  const { bookings, removeBooking } = useBooking();
  const navigate = useNavigate();

  if (bookings.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 my-24 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          No bookings found
        </h2>
        <p className="text-gray-500 mb-5">
          You haven’t booked any hotel yet.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Browse Hotels
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 my-24">
      <h1 className="text-3xl font-bold mb-8">
        My Bookings
      </h1>

      <div className="grid gap-6">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="flex flex-col md:flex-row gap-4 border rounded-2xl p-4 shadow-sm"
          >
            {/* Image */}
            <img
              src={b.image}
              alt={b.hotelName}
              className="w-full md:w-48 h-40 object-cover rounded-xl"
            />

            {/* Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold">
                {b.hotelName}
              </h2>

              <p className="text-gray-600">
                Room: {b.roomType}
              </p>

              <p className="text-gray-600">
                Guests: {b.guests}
              </p>

              <p className="text-gray-600">
                {b.checkIn} → {b.checkOut}
              </p>

              <p className="font-semibold mt-2">
                PKR {b.pricePerNight} / night
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col justify-center gap-2">
              <button
                onClick={() => removeBooking(b.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;