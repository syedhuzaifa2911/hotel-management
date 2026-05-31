function AboutUs() {
  return (
    <div className="bg-white text-gray-800 mt-16">

      {/* Hero Section */}
      <section className="relative h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About Us
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200">
            Making hotel booking simple, reliable, and affordable
            for travelers across Pakistan.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-7 md:leading-8 mb-4">
              We created this platform to help travelers discover
              and book hotels quickly without complicated processes.
              Whether you're planning a family vacation, business
              trip, or weekend getaway, we provide a smooth and
              secure booking experience.
            </p>

            <p className="text-gray-600 leading-7 md:leading-8">
              Our goal is to connect guests with quality hotels
              while ensuring transparency, comfort, and convenience
              at every step of the journey.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
              alt="Our Story"
              className="w-full h-64 sm:h-80 md:h-[420px] rounded-3xl object-cover shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl sm:text-4xl font-bold">
                10+
              </h3>
              <p className="mt-2 text-gray-500">
                Hotels Listed
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl sm:text-4xl font-bold">
                5K+
              </h3>
              <p className="mt-2 text-gray-500">
                Happy Guests
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl sm:text-4xl font-bold">
                20+
              </h3>
              <p className="mt-2 text-gray-500">
                Cities Covered
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl sm:text-4xl font-bold">
                24/7
              </h3>
              <p className="mt-2 text-gray-500">
                Customer Support
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">

        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for a stress-free and enjoyable
            hotel booking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="border rounded-2xl p-6 md:p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Best Hotel Selection
            </h3>

            <p className="text-gray-600 leading-7">
              Browse quality hotels with verified information,
              modern facilities, and trusted guest experiences.
            </p>
          </div>

          <div className="border rounded-2xl p-6 md:p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Easy Booking Process
            </h3>

            <p className="text-gray-600 leading-7">
              Search, compare, and reserve rooms quickly through
              a simple and user-friendly booking system.
            </p>
          </div>

          <div className="border rounded-2xl p-6 md:p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Trusted Support
            </h3>

            <p className="text-gray-600 leading-7">
              Our support team is available whenever you need help
              before, during, or after your booking.
            </p>
          </div>

        </div>

      </section>

      {/* Mission Section */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-8">
            To make hotel discovery and booking effortless,
            transparent, and accessible for everyone by providing
            a reliable platform that travelers can trust.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready To Find Your Perfect Stay?
          </h2>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our collection of hotels and discover the
            perfect destination for your next trip.
          </p>

          <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition">
            Explore Hotels
          </button>

        </div>
      </section>

    </div>
  );
}

export default AboutUs;