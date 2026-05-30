import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className={`text-2xl font-bold ${scrolled ? "text-black" : "text-white"}`}>
          HotelBook
        </h1>

        <ul className="hidden md:flex items-center gap-8">
          {["Home", "Hotels", "My Bookings", "About", "Dashboard"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer font-medium transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          className={`px-5 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-black text-black hover:bg-black hover:text-white"
              : "border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Login
        </button>

      </div>
    </nav>
  );
};

export default Navbar;