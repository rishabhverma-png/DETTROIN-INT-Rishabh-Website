import { Link } from "react-router-dom";
function AboutSection() {
  return (
    <section className="bg-[#f8f4ec] pt-36 pb-24">
      <div className="max-w-7xl mx-auto  px-6">
        {/* Story */}

        <div className="grid lg:grid-cols-1 gap-10 items-center">
          <img
            src="https://static.vasantvalley.org/wp-content/uploads/2021/04/about-image.jpg"
            className="rounded-xl shadow-xl w-full h-[500px] object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold text-red-600">
              Building Future Leaders
            </h2>

            <div className="w-24 h-1  bg-yellow-500 mt-4 mb-8"></div>

            <p className="text-gray-700 leading-7 text-lg">
              Vasant Valley School began with a vision to create an institution
              where academic excellence meets creativity, innovation and
              character-building.
            </p>

            <p className="text-gray-700 leading-7 text-lg mt-6">
              Our students are encouraged to become independent thinkers,
              responsible citizens and compassionate leaders who contribute
              positively to society.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <span className="text-yellow-500 text-2xl">✔</span>

                <p className="text-lg font-medium">
                  25+ Years of Educational Excellence
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-yellow-500 text-2xl">✔</span>

                <p className="text-lg font-medium">5000+ Successful Students</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-yellow-500 text-2xl">✔</span>

                <p className="text-lg font-medium">Modern Smart Campus</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-yellow-500 text-2xl">✔</span>

                <p className="text-lg font-medium">
                  Highly Experienced Faculty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      {/* ================= Mission & Vision ================= */}

      {/* ================= Mission & Vision ================= */}

      <div className="max-w-7xl mx-auto px-6 mt-40">
        {/* Heading */}

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
            Our Philosophy
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">
            Mission & Vision
          </h2>
        </div>

        {/* Cards */}
        <div className="h-10"></div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Mission */}

          <div className="group h-full bg-white rounded-3xl p-6 md:p-10 shadow-xl hover:-translate-y-2 transition duration-300 border-l-8 border-yellow-500">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-yellow-100 flex items-center justify-center text-2xl md:text-3xl">
              🎯
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-600 leading-7 md:leading-8 text-base md:text-lg">
              To provide an inspiring learning environment where every child
              develops intellectually, emotionally and socially while
              encouraging creativity, innovation and leadership.
            </p>
          </div>

          {/* Vision */}

          <div className="group h-full bg-white rounded-3xl p-6 md:p-10 shadow-xl hover:-translate-y-2 transition duration-300 border-l-8 border-yellow-500">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-100 flex items-center justify-center text-2xl md:text-3xl">
              🌟
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-600 leading-7 md:leading-8 text-base md:text-lg">
              To nurture responsible global citizens with confidence, compassion
              and values who can create a positive impact on society.
            </p>
          </div>
        </div>
        <div className="h-10"></div>
        {/* ================= STATS ================= */}

        <div className="grid md:grid-cols-4 gap-8 mt-28">
          <div className="bg-white rounded-xl shadow-lg py-10 text-center">
            <h2 className="text-5xl font-bold text-yellow-500">25+</h2>
            <p className="mt-3 font-semibold text-gray-700">Years</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg py-10 text-center">
            <h2 className="text-5xl font-bold text-yellow-500">5000+</h2>
            <p className="mt-3 font-semibold text-gray-700">Students</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg py-10 text-center">
            <h2 className="text-5xl font-bold text-yellow-500">300+</h2>
            <p className="mt-3 font-semibold text-gray-700">Faculty</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg py-10 text-center">
            <h2 className="text-5xl font-bold text-yellow-500">100%</h2>
            <p className="mt-3 font-semibold text-gray-700">Success Rate</p>
          </div>
        </div>
      </div>
      <div className="h-15"></div>
      {/* ================= LEADERS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-32">
        <div className="mt-32 text-center">
          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
            Leadership
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Meet Our Visionaries
          </h2>
        </div>
        <div className="h-10"></div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mt-12 md:mt-16">
          {/* Rekha */}

          <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://static.vasantvalley.org/wp-content/uploads/2021/04/14104110/Rekha-Purie-1.jpg"
              alt="Rekha Purie"
              className="w-full h-72 sm:h-80 md:h-96 object-cover object-top"
            />

            <div className="p-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Mrs. Rekha Purie
              </h2>

              <p className="text-yellow-600 font-semibold mt-2">Chairperson</p>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://static.vasantvalley.org/wp-content/uploads/2021/04/14104201/Aroon-Purie-2.jpg"
              alt="Aroon Purie"
              className="w-full h-72 sm:h-80 md:h-96 object-cover object-top"
            />

            <div className="p-5 md:p-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Mr. Aroon Purie
              </h2>

              <p className="text-yellow-600 font-semibold mt-2">Founder</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-5"></div>
      <div className="max-w-7xl mx-auto  px-4 sm:px-9  lg:px-10 mt-10 md:mt-14 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Mr. & Mrs. Purie
        </h2>

        <p className="text-yellow-600 font-semibold mt-2 text-base md:text-lg">
          Founder & Chairperson
        </p>

        <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
          Mr. and Mrs. Purie envisioned a learning experience in which the Arts
          and Sports are as important as academic learning and wanted to create
          a paradigm where being a good citizen was more important than being a
          good student. Vasant Valley School aims to nurture independent minds
          and create a space where students are encouraged to actualise their
          innate and unique potential.
        </p>
      </div>
      <div className="h-15"></div>
      {/* ================= Staff & Alumni ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
        <div className="flex flex-col lg:flex-row gap-7">
          {/* Staff */}
          <div className="flex-1">
            <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
              Our Team
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4">Staff</h2>

            <div className="w-24 h-1 bg-yellow-500 mt-5 rounded-full"></div>

            <div className="mt-8 space-y-6">
              <p className="text-gray-700 text-base md:text-lg leading-8 text-justify">
                Our staff is a diverse group of individuals with a strong sense
                of commitment and a passion for learning. There are more than
                150 teachers, all highly qualified in their respective domains.
              </p>

              <p className="text-gray-700 text-base md:text-lg leading-8 text-justify">
                "Learning never stops" has been the guiding principle for all
                staff members. The Teacher Enrichment Programme helps teachers
                enhance both their professional and personal growth.
              </p>

              <p className="text-gray-700 text-base md:text-lg leading-8 text-justify">
                Staff members regularly attend workshops and training
                programmes, helping them stay updated with modern teaching
                practices.
              </p>
            </div>
          </div>

          {/* Alumni */}
          <div className="flex-1">
            <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
              Our Community
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4">Alumni</h2>

            <div className="w-24 h-1 bg-yellow-500 mt-5 rounded-full"></div>

            <div className="mt-8 space-y-6">
              <p className="text-gray-700 text-base md:text-lg leading-8 text-justify">
                Since 1999, over 2000 students have graduated from the school
                and have found their calling across the world.
              </p>

              <p className="text-gray-700 text-base md:text-lg leading-8 text-justify">
                Many of our alumni have become parents, and the second
                generation is already a part of our student community.
              </p>

              <p className="text-gray-700 text-base md:text-lg leading-8">
                <span className="font-semibold text-red-600">
                  Alumni Contact:
                </span>{" "}
                alumni@vasantvalley.edu.in
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-15"></div>
      {/* ================= FOOTER ================= */}

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
    </section>
  );
}

export default AboutSection;
