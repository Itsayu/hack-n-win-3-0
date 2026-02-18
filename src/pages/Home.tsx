import { useState, useEffect, useRef } from "react";
import { Calendar, Trophy, Users, Zap, ChevronRight, Rocket, ArrowDown, Moon, Star } from "lucide-react";
import Countdown from "../components/Home/Countdown";
import RegisterButton from "../components/Home/RegisterButton";
import WelcomeModal from "../components/Modals/WelcomeModal";
import BatAnimation from "../components/Animations/BatAnimation";
import batman from "../assets/batmans.png";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <BatAnimation />
      <WelcomeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <RegisterButton />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[93vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,0,0.1),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.02),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.2),transparent_50%)]" />
          
          {/* Static particles instead of animated */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-red-400/20 dark:bg-red-500/20"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>

        {/* Parallax Layer */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=2070')] bg-cover bg-center opacity-5 dark:opacity-10 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
          }}
        />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-36 h-36 bg-white dark:bg-gradient-to-br dark:from-red-600 dark:to-red-800 rounded-full flex items-center justify-center p-2 border-2 border-gray-200 dark:border-white/10 shadow-xl">
                  <img
                    src={batman}
                    alt="Batman logo"
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="font-black mb-2 leading-tight">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 dark:from-white dark:via-red-400 dark:to-white bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    Hack-N-Win
                  </span>
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-red-600 to-gray-900 dark:from-red-400 dark:via-white dark:to-red-400 bg-clip-text text-transparent">
                    3.0
                  </span>
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 font-light">
                Rise Like the Dark Knight
              </p>
              {/* <div className="flex justify-center gap-3 mt-3">
                <Moon className="w-4 h-4 text-red-600 dark:text-red-400" />
                <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                <Moon className="w-4 h-4 text-red-600 dark:text-red-400" />
              </div> */}
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ultimate hackathon experience where innovation meets the
              spirit of Gotham. <span className="text-red-600 dark:text-red-400 font-semibold">Code in the shadows</span>, emerge victorious.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://hacknwin-3.devfolio.co/overview"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg text-base hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Register Now
                  <Rocket className="w-4 h-4" />
                </span>
              </a>
              <a
                href="/about"
                className="px-6 py-3 bg-gray-200 dark:bg-black/50 border-2 border-gray-300 dark:border-white/10 text-gray-800 dark:text-white font-bold rounded-lg text-base hover:border-red-600 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="relative bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-red-950 dark:to-gray-900 py-12 border-y-2 border-red-600">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <Countdown />
        </div>
      </section>

      {/* Stats Cards - Simplified */}
      <section className="bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:to-gray-900 py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { icon: Calendar, value: "24", label: "Hours", bgColor: "bg-blue-500" },
              { icon: Users, value: "1500+", label: "Hackers", bgColor: "bg-green-500" },
              { icon: Trophy, value: "₹1M+", label: "Prizes", bgColor: "bg-yellow-500" },
              { icon: Zap, value: "24/7", label: "Support", bgColor: "bg-purple-500" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Participate Section - Simplified Cards */}
      <section className="relative bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black py-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/5 dark:bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/5 dark:bg-red-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-red-600 to-gray-900 dark:from-red-600 dark:via-white dark:to-red-600 bg-clip-text text-transparent">
              Why Participate?
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: "Amazing Prizes", desc: "Win prizes worth lakhs", bgColor: "bg-gradient-to-br from-yellow-500 to-red-500" },
              { icon: Users, title: "Network & Learn", desc: "Connect with experts", bgColor: "bg-gradient-to-br from-blue-500 to-purple-500" },
              { icon: Zap, title: "Build & Ship", desc: "Turn ideas into reality", bgColor: "bg-gradient-to-br from-green-500 to-teal-500" },
              { icon: Moon, title: "Epic Experience", desc: "Batman-themed adventure", bgColor: "bg-gradient-to-br from-purple-500 to-pink-500" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-600 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-r from-red-50 to-gray-100 dark:from-red-900/20 dark:via-black dark:to-red-900/20 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 p-3 bg-white dark:bg-red-600/10 rounded-full border border-red-200 dark:border-red-600/20">
              <img
                src={batman}
                alt="Batman logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-gray-900 dark:from-red-400 dark:via-white dark:to-red-400 bg-clip-text text-transparent">
                Ready to Join the League?
              </span>
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Register now and be part of the most exciting hackathon! 
              <span className="block mt-2 text-red-600 dark:text-red-400 font-semibold">Limited spots available</span>
            </p>

            <a
              href="https://hacknwin-3.devfolio.co/overview"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Register Now</span>
              <Rocket className="w-4 h-4" />
            </a>

            {/* Badges */}
            <div className="flex justify-center gap-3 mt-8">
              {['Limited Seats', 'Early Bird', 'Exciting Prizes'].map((text, i) => (
                <div
                  key={i}
                  className="px-3 py-1 bg-white dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 text-xs text-gray-700 dark:text-white"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .overflow-x-hidden {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}