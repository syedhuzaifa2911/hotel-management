import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // lock background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h1
            className={`text-xl sm:text-2xl font-bold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            HotelBook
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {["/", "/mybookings", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "My Bookings", "About Us", "Contact Us"];

            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`font-medium transition ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  {labels[i]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Login */}
        <button
          className={`hidden md:block px-5 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-black text-black hover:bg-black hover:text-white"
              : "border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Login
        </button>

        {/* Mobile Icon */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} className={scrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu size={28} className={scrolled ? "text-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">

          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/mybookings" onClick={() => setMenuOpen(false)}>
              My Bookings
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;