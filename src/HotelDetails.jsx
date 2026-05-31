import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useHotel } from "./context/HotelContext";
import { useBooking } from "./context/BookingContext";
import Checkbox from "./components/Checkbox";

function HotelDetails() {
  const { hotels } = useHotel();
  const { addBooking } = useBooking();
  const navigate = useNavigate();

  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === Number(id));

  const [selectedRoom, setSelectedRoom] = useState(
    hotel?.rooms[0]?.type || ""
  );

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const [message, setMessage] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  if (!hotel) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 my-24">
        <p className="text-xl">Hotel not found</p>
      </div>
    );
  }

  const roomDetails = hotel.rooms.find(
    (room) => room.type === selectedRoom
  );

  // ---------------- CHECK AVAILABILITY ----------------
  const checkAvailability = () => {
    if (!checkIn || !checkOut) {
      setMessage("Select dates first");
      setIsAvailable(false);
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);

    if (inDate < today) {
      setMessage("You cannot book past dates");
      setIsAvailable(false);
      return;
    }

    if (inDate >= outDate) {
      setMessage("Invalid date range");
      setIsAvailable(false);
      return;
    }

    const hotelStart = new Date(hotel.availableFrom);
    const hotelEnd = new Date(hotel.availableTo);

    if (inDate < hotelStart || outDate > hotelEnd) {
      setMessage("Not available for selected dates");
      setIsAvailable(false);
      return;
    }

    if (guests > roomDetails.maxGuests) {
      setMessage(`Max ${roomDetails.maxGuests} guests allowed`);
      setIsAvailable(false);
      return;
    }

    if (roomDetails.availableRooms <= 0) {
      setMessage("No rooms available");
      setIsAvailable(false);
      return;
    }

    setMessage("Room is available");
    setIsAvailable(true);
  };

  // ---------------- BOOKING ----------------
  const handleBooking = () => {
    const booking = {
      id: Date.now(),
      hotelId: hotel.id,
      hotelName: hotel.name,
      roomType: roomDetails.type,
      checkIn,
      checkOut,
      guests,
      pricePerNight: roomDetails.pricePerNight,
      image: hotel.images[0],
    };

    addBooking(booking);

    setMessage("Booking Successful");

    // optional redirect
    setTimeout(() => {
      navigate("/mybookings");
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 my-24">

      {/* HOTEL INFO */}
      <h1 className="text-4xl font-bold">{hotel.name}</h1>

      <p className="text-gray-600 mt-2">{hotel.locationTag}</p>

      {/* ROOM SELECT */}
      <div className="mt-10">
        <select
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          className="border p-3 rounded-xl"
        >
          {hotel.rooms.map((room) => (
            <option key={room.type} value={room.type}>
              {room.type}
            </option>
          ))}
        </select>
      </div>

      {/* CHECKBOX */}
      <div className="mt-8">
        <Checkbox
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          guests={guests}
          setGuests={setGuests}
          checkAvailability={checkAvailability}
        />
      </div>

      {/* MESSAGE */}
      {message && (
        <p
          className={`mt-6 ${
            isAvailable ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      {/* BOOK NOW */}
      {isAvailable && (
        <button
          onClick={handleBooking}
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Book Now
        </button>
      )}

      {/* ROOM DETAILS */}
      <div className="mt-10 bg-gray-100 p-6 rounded-xl">
        <p>Room: {roomDetails?.type}</p>
        <p>Price: {roomDetails?.pricePerNight}</p>
        <p>Max Guests: {roomDetails?.maxGuests}</p>
        <p>Available Rooms: {roomDetails?.availableRooms}</p>
      </div>
    </div>
  );
}

export default HotelDetails;