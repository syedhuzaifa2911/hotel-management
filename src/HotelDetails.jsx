import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHotel } from "./context/HotelContext";
import Checkbox from "./components/Checkbox";

function HotelDetails() {
  const { hotels } = useHotel();
  const { id } = useParams();

  const hotel = hotels.find((h) => h.id === Number(id));

  if (!hotel) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 my-24">
        <p className="text-xl">Hotel not found</p>
      </div>
    );
  }

  const [selectedRoom, setSelectedRoom] = useState(
    hotel.rooms[0]?.type || ""
  );

  const roomDetails = hotel.rooms.find(
    (room) => room.type === selectedRoom
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 my-24">
      {/* Hotel Info */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{hotel.name}</h1>

        <div className="flex items-center gap-4 mt-3 flex-wrap">
          <div className="flex text-yellow-500 text-lg">
            {Array.from({ length: hotel.stars }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <p className="text-gray-600">{hotel.locationTag}</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Main Image */}
        <div>
          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>

        {/* Side Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={hotel.images[1]}
            alt=""
            className="w-full h-[190px] object-cover rounded-2xl"
          />

          <img
            src={hotel.images[2]}
            alt=""
            className="w-full h-[190px] object-cover rounded-2xl"
          />

          <img
            src={hotel.images[3]}
            alt=""
            className="w-full h-[190px] object-cover rounded-2xl col-span-2"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-3">
          Experience Luxury Like Never Before
        </h2>

        <p className="text-gray-600 max-w-4xl leading-7">
          Enjoy premium comfort, elegant interiors, exceptional
          hospitality, and world-class amenities designed to make
          every moment of your stay memorable and relaxing.
        </p>

        <p className="mt-5 text-2xl font-bold">
          Starting from PKR {hotel.rooms[0].pricePerNight}
          <span className="text-base font-normal text-gray-500">
            {" "}
            / night
          </span>
        </p>
      </div>

      {/* Room Type Dropdown */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">
          Select Room Type
        </h3>

        <select
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          className="w-full md:w-80 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
        >
          {hotel.rooms.map((room) => (
            <option key={room.type} value={room.type}>
              {room.type}
            </option>
          ))}
        </select>
      </div>

      {/* Availability Box */}
      <div className="mt-8">
        <Checkbox />
      </div>

      {/* Room Details */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-5">
          Room Details
        </h3>

        <div className="bg-gray-100 rounded-2xl p-6">
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-500">Room Type</p>
              <p className="font-semibold text-lg">
                {roomDetails?.type}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-500">Bed Type</p>
              <p className="font-semibold text-lg">
                {roomDetails?.bedType}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Price Per Night
              </p>
              <p className="font-semibold text-lg">
                PKR {roomDetails?.pricePerNight}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-500">Max Guests</p>
              <p className="font-semibold text-lg">
                {roomDetails?.maxGuests}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Available Rooms
              </p>
              <p className="font-semibold text-lg">
                {roomDetails?.availableRooms}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;