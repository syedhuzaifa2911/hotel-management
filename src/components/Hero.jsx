import React from "react";
import HeroSearch from "./HeroSearch";

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mt-5 hidden">
              <span className="inline-block bg-blue-500/70 text-white px-4 py-2 rounded-full text-xs sm:text-sm md:text-base backdrop-blur-sm">
                The Ultimate Hotel Experience
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Your Perfect Gateway Destination
            </h1>

            {/* Description */}
            <p className="mt-5 text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Discover and book premium hotels worldwide with seamless
              search, comparison, and instant booking experience.
            </p>

            {/* Search Box */}
            <div className="mt-8 sm:mt-10">
              <HeroSearch />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;