import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
     <div className=" py-16 sm:py-20 lg:py-28">
      <section className="relative h-[250px] sm:h-[350px] lg:h-[450px] w-full rounded-3xl overflow-hidden">
        <img
          src="https://www.vasantvalley.org/wp-content/uploads/2021/04/contact-banner.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-5">
          <div className="text-center text-white">
            <p className="uppercase tracking-[4px] sm:tracking-[6px] text-yellow-400 font-semibold text-sm sm:text-base">
              We'd Love To Hear From You
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-5">
              Contact Us
            </h1>

            <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto mt-6"></div>

            <p className="mt-6 text-base sm:text-lg">
              Home
              <span className="mx-2">/</span>
              Contact
            </p>
          </div>
        </div>
      </section>
      </div>

      {/* ================= CONTACT INFO ================= */}

      <section className="bg-[#f8f4ec] py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
              Get In Touch
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5">
              We'd Love To Hear From You
            </h2>

            <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-6"></div>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Address */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
              <div className="text-5xl">📍</div>

              <h3 className="text-2xl font-bold mt-5">Address</h3>

              <p className="text-gray-600 leading-7 mt-4">
                Vasant Valley School
                <br />
                Vasant Kunj
                <br />
                New Delhi - 110070
              </p>
            </div>

            {/* Phone */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
              <div className="text-5xl">📞</div>

              <h3 className="text-2xl font-bold mt-5">Phone</h3>

              <p className="text-gray-600 mt-4">+91 98765 43210</p>

              <p className="text-gray-600 mt-2">+91 98765 43211</p>
            </div>

            {/* Email */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
              <div className="text-5xl">✉️</div>

              <h3 className="text-2xl font-bold mt-5">Email</h3>

              <p className="text-gray-600 mt-4">info@vasantvalley.edu.in</p>

              <p className="text-gray-600 mt-2">
                admission@vasantvalley.edu.in
              </p>
            </div>

            {/* Time */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
              <div className="text-5xl">🕒</div>

              <h3 className="text-2xl font-bold mt-5">Office Hours</h3>

              <p className="text-gray-600 mt-4">Monday - Friday</p>

              <p className="text-gray-600 mt-2">8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-15"></div>
      {/* ================= CONTACT FORM ================= */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2  items-center">
            {/* Left Image */}

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                alt="Contact"
                className="w-full max-w-[550px] h-[200px] sm:h-[300px] lg:h-[400px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Right Form */}

            <div className="bg-[#f8f4ec] rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 min-h-[500px]">
              <p className="uppercase tracking-[4px] text-yellow-600 font-semibold">
                Send Message
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-slate-900">
                Let's Start A Conversation
              </h2>

              <div className="w-20 h-1 bg-yellow-500 rounded-full mt-5 mb-8"></div>

              <form className="space-y-10">
                {/* Name & Email */}
                <div className="h-5"></div>
                <div className="flex gap-3 mt-10">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border h-10 border-gray-300 rounded-xl px-10 py-4  outline-none focus:border-yellow-500"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-xl px-10 py-4  outline-none focus:border-yellow-500"
                  />
                </div>

                {/* Phone & Subject */}
                 <div className="h-5"></div>
                <div className="flex mt-10 gap-3">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border h-10 border-gray-300 rounded-xl px-10 py-4  outline-none focus:border-yellow-500"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border border-gray-300 rounded-xl px-10 py-4  outline-none focus:border-yellow-500"
                  />
                </div>

                {/* Message */}
                <div className="h-5"></div>

                <textarea
                  rows="8"
                  placeholder="Write your message"
                  className="w-full border border-gray-300 rounded-xl px-5 py-5 outline-none resize-none focus:border-yellow-500"
                ></textarea>

                {/* Button */}

                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-xl font-semibold duration-300 w-full sm:w-auto"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="h-3"></div>
      <footer className="w-full bg-[#111827] h-50 text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* School Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Vasant Valley School
              </h2>

              <div className="w-20 h-1 bg-yellow-500 mt-4 mb-6 rounded-full"></div>

              <p className="text-gray-300 text-sm md:text-base leading-7">
                Empowering young minds through academic excellence, creativity,
                innovation and values for over 25 years.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Quick Links</h3>

              <div className="w-16 h-1 bg-yellow-500 mt-4 mb-6 rounded-full"></div>

              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/academics"
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    Academics
                  </Link>
                </li>

                <li>
                  <Link
                    to="/admission"
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    Admissions
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Contact</h3>

              <div className="w-16 h-1 bg-yellow-500 mt-4 mb-6 rounded-full"></div>

              <div className="space-y-3 text-gray-300 text-sm md:text-base">
                <p>📍 New Delhi, India</p>
                <p>📞 +91 98765 43210</p>
                <p>✉ info@vasantvalley.edu.in</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-xs sm:text-sm">
            © 2026 Vasant Valley School. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
