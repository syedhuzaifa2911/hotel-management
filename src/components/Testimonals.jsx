import React from "react";

function Testimonals({ data }) {
  return (
    <div className="my-10 px-4">

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center mb-2">
        What Our Guests Say
      </h2>

      <p className="text-center text-gray-500 text-sm mb-10 max-w-md mx-auto">
        Real feedback from travelers who experienced our hotel services and hospitality.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {data.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition bg-white"
          >
            {/* Name */}
            <h3 className="text-lg font-semibold">{item.name}</h3>

            {/* Stars */}
            <div className="text-yellow-400 text-sm mt-1">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Testimonals;