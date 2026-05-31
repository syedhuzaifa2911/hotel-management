import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useHotel } from "./context/HotelContext";
import { useBooking } from "./context/BookingContext";
import Checkbox from "./components/Checkbox";
import { useUser } from "@clerk/clerk-react";

function HotelDetails() {
  const { isSignedIn } = useUser();

  const [currentImage, setCurrentImage] = useState(0);
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
      if (!isSignedIn) {
    navigate("/sign-in");
    return;
  }

  // 2. DOUBLE SAFETY CHECK (optional but good)
  if (!isAvailable) {
    setMessage("Check availability first");
    return;
  }
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
      {/* HOTEL GALLERY */}
<div className="mt-8">

  {/* Mobile Carousel */}
  <div className="lg:hidden">
    <div className="relative">

      <img
        src={hotel.images[currentImage]}
        alt={hotel.name}
        className="w-full h-72 sm:h-96 object-cover rounded-2xl"
      />

      <button
        onClick={() =>
          setCurrentImage(
            currentImage === 0
              ? hotel.images.length - 1
              : currentImage - 1
          )
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ❮
      </button>

      <button
        onClick={() =>
          setCurrentImage(
            currentImage === hotel.images.length - 1
              ? 0
              : currentImage + 1
          )
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ❯
      </button>
    </div>

    <div className="flex justify-center gap-2 mt-4">
      {hotel.images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className={`w-3 h-3 rounded-full transition ${
            currentImage === index
              ? "bg-black"
              : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Desktop Gallery */}
  <div className="hidden lg:grid grid-cols-2 gap-4">

    <div>
      <img
        src={hotel.images[0]}
        alt={hotel.name}
        className="w-full h-[500px] object-cover rounded-3xl"
      />
    </div>

    <div className="grid grid-cols-2 gap-4">

      <img
        src={hotel.images[1]}
        alt=""
        className="w-full h-[240px] object-cover rounded-2xl hover:scale-105 transition"
      />

      <img
        src={hotel.images[2]}
        alt=""
        className="w-full h-[240px] object-cover rounded-2xl hover:scale-105 transition"
      />

      <img
        src={hotel.images[3]}
        alt=""
        className="col-span-2 w-full h-[240px] object-cover rounded-2xl hover:scale-105 transition"
      />

    </div>

  </div>

</div>

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