import { createContext, useContext } from "react";
import { hotels } from "../data/hotels";

const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  return (
    <HotelContext.Provider value={{ hotels }}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => useContext(HotelContext);