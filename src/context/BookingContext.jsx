import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings((prev) => [
      ...prev,
      { ...booking, id: Date.now() },
    ]);
  };

  const removeBooking = (id) => {
    setBookings((prev) =>
      prev.filter((b) => b.id !== id)
    );
  };

  return (
    <BookingContext.Provider
      value={{ bookings, addBooking, removeBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);