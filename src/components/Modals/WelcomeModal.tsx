import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import batman from '../../assets/batmans.png'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open modal after 5 seconds on EVERY page load/refresh
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full border-4 border-red-600 shadow-2xl overflow-hidden animate-fadeIn m-2">
        <div className="relative bg-gradient-to-r from-black via-red-900 to-black p-8 text-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center mb-4">
            <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
              {/* <span className="text-7xl">🦇</span> */}
              <img
                  src={batman}
                  alt="Batman logo"
                  className="w-40 h-40 object-contain"
                />
            </div>
          </div>

          {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Welcome to Hack-N-Win 3.0!
          </h2>
          <p className="text-center text-red-400 text-lg">Organized by D4 Community</p> */}
        </div>

        <div className="p-8 space-y-4">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">About D4 Community</h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              D4 Community is a vibrant tech community dedicated to fostering innovation, collaboration, and growth
              among developers, designers, and tech enthusiasts. We believe in the power of community-driven learning
              and building together.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <h4 className="font-bold text-black dark:text-white flex items-center gap-2">
                <span className="text-red-600">🎯</span> Our Mission
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Empowering individuals to learn, innovate, and excel in technology through hackathons,
                workshops, and collaborative projects.
              </p>
            </div>

            {/* <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <h4 className="font-bold text-black dark:text-white flex items-center gap-2">
                <span className="text-red-600">💡</span> What We Do
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1 list-disc list-inside">
                <li>Host innovative hackathons and coding competitions</li>
                <li>Conduct workshops and technical training sessions</li>
                <li>Build a supportive network of tech professionals</li>
                <li>Foster open-source collaboration and knowledge sharing</li>
              </ul>
            </div> */}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Let's Start!
            </button>
            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}