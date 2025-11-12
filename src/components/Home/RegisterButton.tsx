import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function RegisterButton() {
  const [showButton, setShowButton] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition > viewportHeight * 0.2 && !hasShown) {
        setShowButton(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  if (!showButton) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slideInRight">
      <a
        href="#register"
        className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all transform hover:scale-105 group"
      >
        <span className="text-lg">Register Now</span>
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </a>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
