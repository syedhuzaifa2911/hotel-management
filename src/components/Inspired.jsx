import React, { useState } from "react";

function Inspired() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <div className="my-12 px-4 py-10 bg-gray-100/40 rounded-lg">

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center mb-3">
        Stay Inspired
      </h2>

      {/* Description */}
      <p className="text-center text-gray-500 text-sm mb-8 max-w-md mx-auto">
        Discover amazing travel destinations, exclusive hotel deals, and tips to make your next journey unforgettable.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          onClick={handleSubscribe}
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Subscribe
        </button>

      </div>
    </div>
  );
}

export default Inspired;