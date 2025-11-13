import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import logo from '../../assets/batmans.png'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/sponsors', label: 'Sponsors' },
];

const moreLinks = [
  { href: '/mentors', label: 'Mentors' },
  { href: '/team', label: 'Team' },
  { href: '/faq', label: 'FAQ' },
  { href: '/code-of-conduct', label: 'Code of Conduct' },
  { href: '/community-partners', label: 'Community Partners' },
  { href: '/badge', label: 'Badge' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b-[0.5px] border-red-600 shadow-lg">
      <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              {/* <span className="text-2xl md:text-3xl">🦇</span> */}
              <img
                  src={logo}
                  alt="Batman logo"
                  className="w-30 h-30 object-contain"
                />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight">
                Hack-N-Win 3.0
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400">by D4 Community</span>
            </div>
          </Link>

          {/* All other navbar items on the right */}
          <div className="flex items-center gap-6">
            {/* Nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive(link.href)
                      ? 'bg-red-600 text-white'
                      : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="px-4 py-2 rounded-lg font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-1"
                >
                  More
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMoreOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-xl border-2 border-red-600 py-2">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsMoreOpen(false)}
                        className={`block px-4 py-2 font-medium transition-colors ${
                          isActive(link.href)
                            ? 'bg-red-600 text-white'
                            : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Theme toggle & Hamburger */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-black dark:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-black dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.href)
                      ? 'bg-red-600 text-white'
                      : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>

              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.href)
                      ? 'bg-red-600 text-white'
                      : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
