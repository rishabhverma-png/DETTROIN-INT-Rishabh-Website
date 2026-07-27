import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Academics() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

       <div className=" py-16 sm:py-20 lg:py-28">
        <section className="relative h-[250px] sm:h-[350px] lg:h-[450px] w-full rounded-3xl overflow-hidden">
          <img
            src="https://www.vasantvalley.org/wp-content/uploads/2026/01/image-vv-4-1.jpg"
            alt="Academics"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <p className="uppercase tracking-[4px] text-yellow-400 font-semibold text-sm">
                Excellence In Learning
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-4">
                Academics
              </h1>

              <div className="w-20 h-1 bg-yellow-400 mx-auto mt-5"></div>

              <p className="mt-6 text-sm sm:text-lg">Home / Academics</p>
            </div>
          </div>
        </section>
      </div>
      <div className="h-5"></div>
      <section className="bg-white py-8 sm:py-10 lg:py-14 overflow-hidden">
        <div className="slider">
          <div className="slide-track">
            <img
              src="https://www.vasantvalley.org/wp-content/uploads/2026/01/image-vv-2.jpg"
              alt=""
              className="slide-img"
            />
            <img
              src="https://www.vasantvalley.org/wp-content/uploads/2026/01/image-vv-4.jpg"
              alt=""
              className="slide-img"
            />
            <img
              src="https://www.vasantvalley.org/wp-content/uploads/2026/02/image-vv-5_image_.jpg"
              alt=""
              className="slide-img"
            />
            <img
              src="https://www.vasantvalley.org/wp-content/uploads/2026/01/image-vv-7.jpg"
              alt=""
              className="slide-img"
            />
            <img
              src="https://www.vasantvalley.org/wp-content/uploads/2026/01/image-vv-8.jpg"
              alt=""
              className="slide-img"
            />
            <img
              src="https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=1024x1024&w=is&k=20&c=xzs6VdSTc8PnbadofjuP8oZQLLZ2SusZFRbaBWCuM3o="
              alt=""
              className="slide-img"
            />

            {/* Duplicate Images */}
            <img
              src="https://media.gettyimages.com/id/2186780950/photo/software-engineers-collaborating-on-a-project-analyzing-code-on-computer-monitors-in-office.jpg?s=612x612&w=0&k=20&c=IjEpYeHTtR_RV7P0OJrgHF-2dIyRkxBu2xcPw9OsP2c="
              alt=""
              className="slide-img"
            />
            <img
              src="https://static.vasantvalley.org/wp-content/uploads/2021/04/intra-new.jpg"
              alt=""
              className="slide-img"
            />
            <img
              src="https://static.vasantvalley.org/wp-content/uploads/2021/04/inter.jpg"
              alt=""
              className="slide-img"
            />
          </div>
        </div>
      </section>
      <div className="h-20"></div>
      {/* Content */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Image */}

          <div className="flex justify-center order-1">
            <img
              src="https://media.gettyimages.com/id/2172874650/photo/fun-happy-and-excited-teacher-talking-to-students-in-school-classroom-with-group-of-learning.jpg?s=1024x1024&w=gi&k=20&c=N8qm1bvi3pAM31UXr-Pp5dChkl0Tp5sP93G5OYZOllo="
              alt="Curriculum"
              className="
          w-[70%]
          max-w-[300px]
          sm:max-w-[400px]
          lg:max-w-[500px]
          h-[200px]
          sm:h-[300px]
          lg:h-[400px]
          object-cover
          rounded-3xl
          shadow-2xl
          hover:scale-105
          duration-500
        "
            />
          </div>

          {/* Right Content */}

          <div className="w-full  lg:w-[100%] order-1">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Our Curriculum
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mt-5">
              Inspiring Curiosity,
              <br />
              Creativity &
              <br />
              Leadership
            </h2>

            <div className="w-20 h-1 bg-yellow-500 rounded-full mt-5"></div>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mt-6">
              Every student experiences a balanced curriculum that combines
              academics, technology, sports, arts and life skills. Our learning
              environment encourages curiosity, collaboration and independent
              thinking.
            </p>

            <div className="space-y-5 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                  📚
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Academic Excellence</h3>

                  <p className="text-gray-500 text-sm sm:text-base">
                    Strong conceptual learning with modern teaching.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                  💻
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Digital Learning</h3>

                  <p className="text-gray-500 text-sm sm:text-base">
                    Smart classrooms with interactive technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                  🌍
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Global Exposure</h3>

                  <p className="text-gray-500 text-sm sm:text-base">
                    Building future-ready global citizens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-15"></div>
     {/* ================= PROGRAMMES ================= */}

      <section className="bg-[#f8f4ec] py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
              Academic Programmes
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5">
              Education For Every Stage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 sm:mt-16 lg:mt-20">
            <div className="group">
              <img
                src="https://media.istockphoto.com/id/1151191813/photo/teacher-with-preschool-students-riding-rocking-horse.jpg?s=612x612&w=0&k=20&c=BRXuAbN-wN24dwFPXJgj2NQJeYZVNUJyfsxMC6AV75k="
                className="rounded-2xl h-40 sm:h-50 lg:h-68 mt-2 w-full object-cover group-hover:scale-105 duration-500"
              />

              <h3 className="text-2xl font-bold mt-6">Pre Primary</h3>

              <p className="text-gray-600 mt-3">
                Foundation through joyful learning.
              </p>
            </div>

            <div className="group">
              <img
                src="https://www.shutterstock.com/image-photo/diverse-group-students-visibly-curious-260nw-2645719935.jpg"
                className="rounded-2xl h-40 sm:h-50 lg:h-68 mt-2 w-full object-cover group-hover:scale-105 duration-500"
              />

              <h3 className="text-2xl font-bold mt-6">Primary</h3>

              <p className="text-gray-600 mt-3">
                Strong academic fundamentals.
              </p>
            </div>

            <div className="group">
              <img
                src="https://media.istockphoto.com/id/1448069393/photo/indian-male-teacher-and-student-working-or-experimenting-in-science-lab.jpg?s=612x612&w=0&k=20&c=Bo4NL618qywnPuXakDNlRFaB_TYKOQMUIcTvqXuuzFw="
                className="rounded-2xl h-40 sm:h-50 lg:h-68 mt-2 w-full object-cover group-hover:scale-105 duration-500"
              />

              <h3 className="text-2xl font-bold mt-6">Middle School</h3>

              <p className="text-gray-600 mt-3">
                Critical thinking and innovation.
              </p>
            </div>

            <div className="group">
              <img
                src="https://media.gettyimages.com/id/2246315787/photo/school-debate-team-presenting-their-argument.jpg?s=612x612&w=0&k=20&c=wHqcgDqhZ4-AI_LFHHBBQRPpixuw4qtc2LRH5aa6jZo="
                className="rounded-2xl h-40 sm:h-50 lg:h-68 mt-2 w-full object-cover group-hover:scale-105 duration-500"
              />

              <h3 className="text-2xl font-bold mt-6">Senior School</h3>

              <p className="text-gray-600 mt-3">
                Leadership and future readiness.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-3"></div>
      <footer className="w-full bg-[#111827] h-60 text-white mt-24">
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
}

export default Academics;
