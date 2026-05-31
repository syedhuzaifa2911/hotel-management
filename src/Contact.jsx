import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      setSuccess(
        "Your message has been sent successfully."
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="mt-16 md:mt-20">

      {/* HERO SECTION */}
      <section className="relative h-[280px] sm:h-[350px] md:h-[450px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto">
            Have questions about hotels, bookings, or support?
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-7 mb-8">
              Have questions about hotel availability,
              reservations, cancellations, or general
              support? Send us a message and our team
              will respond as soon as possible.
            </p>

            <div className="space-y-5">

              <div className="border rounded-2xl p-5 md:p-6">
                <h3 className="font-semibold text-lg">
                  Email
                </h3>

                <p className="text-gray-600 mt-2 break-all">
                  support@hotelbooking.com
                </p>
              </div>

              <div className="border rounded-2xl p-5 md:p-6">
                <h3 className="font-semibold text-lg">
                  Phone
                </h3>

                <p className="text-gray-600 mt-2">
                  +92 300 1234567
                </p>
              </div>

              <div className="border rounded-2xl p-5 md:p-6">
                <h3 className="font-semibold text-lg">
                  Address
                </h3>

                <p className="text-gray-600 mt-2">
                  Karachi, Pakistan
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border rounded-3xl shadow-sm p-5 sm:p-6 md:p-8">

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>
                <label className="block mb-2 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />

                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-black"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* SUCCESS */}
              {success && (
                <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl">
                  {success}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;