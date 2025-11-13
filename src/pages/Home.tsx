import { useState, useEffect } from "react";
import { Calendar, Trophy, Users, Zap } from "lucide-react";
import Countdown from "../components/Home/Countdown";
import RegisterButton from "../components/Home/RegisterButton";
import WelcomeModal from "../components/Modals/WelcomeModal";
import BatAnimation from "../components/Animations/BatAnimation";
import batman from "../assets/batmans.png";

export default function Home() {
  // 1. MODAL STATE: State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. MODAL EFFECT: Open the modal automatically on component mount (optional)
  useEffect(() => {
    // If you want Home to control opening after 5s, uncomment below — otherwise WelcomeModal will handle its own auto-open.
    // const timer = setTimeout(() => setIsModalOpen(true), 5000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Global bats (keeps the header/hero effect) */}
      <BatAnimation />

      {/* Pass the state and setter function to the WelcomeModal */}
      <WelcomeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <RegisterButton />

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-black dark:bg-red-600 rounded-full blur-3xl"
            style={{ animation: "float 8s ease-in-out infinite reverse" }}
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-4 flex justify-center">
              <div className="w-48 h-48 bg-white dark:bg-red-600 rounded-full flex items-center justify-center animate-bounce-slow overflow-hidden p-4">
                {/* Use the imported image variable as src */}
                <img
                  src={batman}
                  alt="Batman logo"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>

            <h1 className="font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-black via-red-600 to-black dark:from-white dark:via-red-500 dark:to-white bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl ">
                Hack-N-Win
              </span>
              <br />
              <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-black via-red-600 to-black dark:from-white dark:via-red-500 dark:to-white bg-clip-text text-transparent">3.0</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
              Rise Like the Dark Knight
            </p>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Join the ultimate hackathon experience where innovation meets the
              spirit of Gotham. Code in the shadows, emerge victorious.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#register"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Register Now
              </a>
              <a
                href="/about"
                className="bg-black dark:bg-white text-white dark:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Learn More
              </a>
            </div>

            <div className="text-gray-600 dark:text-gray-400 space-y-1">
              {/* <p className="text-lg">📅 December 31, 2025</p> */}
              <p className="text-sm">Organized by D4 Community</p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        `}</style>
      </section>

      <section className="bg-white dark:bg-gray-950 py-16 md:py-20 border-t-4 border-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Countdown />
        </div>
      </section>

      {/* Stats cards with proper max-width and margin applied */}
      <section className="bg-gray-50 dark:bg-black py-16 md:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all transform hover:scale-105 ">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-red-600" />
              <p className="text-2xl font-bold text-black dark:text-white">
                48
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hours</p>
            </div>

            <div className="text-center bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all transform hover:scale-105">
              <Users className="w-8 h-8 mx-auto mb-4 text-red-600" />
              <p className="text-2xl font-bold text-black dark:text-white">
                500+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hackers
              </p>
            </div>

            <div className="text-center bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all transform hover:scale-105">
              <Trophy className="w-8 h-8 mx-auto mb-4 text-red-600" />
              <p className="text-2xl font-bold text-black dark:text-white">
                $50K
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Prizes</p>
            </div>

            <div className="text-center bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all transform hover:scale-105">
              <Zap className="w-8 h-8 mx-auto mb-4 text-red-600" />
              <p className="text-2xl font-bold text-black dark:text-white">
                24/7
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-black py-16 md:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white">
            Why Participate?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all transform hover:scale-105 shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                Amazing Prizes
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Win exciting prizes worth thousands and get recognized for your
                innovation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all transform hover:scale-105 shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                Network & Learn
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with industry experts, mentors, and fellow developers.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all transform hover:scale-105 shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                Build & Ship
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Turn your ideas into reality and showcase your projects to the
                world.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all transform hover:scale-105 shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                Epic Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a Batman-themed hackathon with unique challenges and
                atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="register"
        className="bg-white dark:bg-gray-950 py-16 md:py-20 border-t-2 border-red-600"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-black via-red-900 to-black dark:from-red-900 dark:via-black dark:to-red-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="inline-block w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4">
                {/* <span className="text-5xl">🦇</span> */}
                <img
                  src={batman}
                  alt="Batman logo"
                  className="w-40 h-40 object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join the League?
              </h2>
              <p className="text-lg text-gray-300">
                Register now and be part of the most exciting hackathon of the
                year!
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-red-600 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-red-600 focus:outline-none"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-red-600 focus:outline-none"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-red-600 focus:outline-none"
                required
              />

              <select
                className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white focus:border-red-600 focus:outline-none"
                required
              >
                <option value="" className="bg-gray-900">
                  Select Experience Level
                </option>
                <option value="beginner" className="bg-gray-900">
                  Beginner
                </option>
                <option value="intermediate" className="bg-gray-900">
                  Intermediate
                </option>
                <option value="advanced" className="bg-gray-900">
                  Advanced
                </option>
              </select>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
