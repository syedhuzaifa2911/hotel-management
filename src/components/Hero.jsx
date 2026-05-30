import React from "react";
import Booking from "./Booking";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 lg:px-24  gap-6 sm:gap-8 max-w-3xl">
        
        <button className="bg-blue-400/60 px-4 py-2 rounded-xl text-sm sm:text-base w-fit">
          The Ultimate Hotel Experience
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          Discover and book premium hotels worldwide with seamless search,
          comparison, and instant booking experience.
        </p>
      <Booking/>
      </div>
    </section>
  );
}

export default Hero;