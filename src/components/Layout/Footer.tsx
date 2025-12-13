import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Instagram } from 'lucide-react';
import logo from '../../assets/batmans.png'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-gray-950 text-white border-t-2 border-red-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <img
                  src={logo}
                  alt="Batman logo"
                  className="w-30 h-30 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Hack-N-Win 3.0</h3>
                <p className="text-sm text-gray-400">Organized by D4 Community</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Join us for an epic hackathon experience where innovation meets the Dark Knight's spirit.
              Code, create, and conquer challenges in true Batman style.
            </p>

            {/* Updated Social Links */}
            <div className="flex gap-4 mt-6">
              {/* X (Twitter) */}
              <a
                href="https://x.com/d4community"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/d4community/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/d4community/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/D4Community"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* Email (optional) */}
              <a
                href="mailto:help.d4community@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links & Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-red-600">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              <li><Link to="/sponsors" className="text-gray-400 hover:text-white">Sponsors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-red-600">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/mentors" className="text-gray-400 hover:text-white">Mentors</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Team</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/code-of-conduct" className="text-gray-400 hover:text-white">Code of Conduct</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} D4 Community. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/code-of-conduct" className="text-gray-400 hover:text-white">
              Code of Conduct
            </Link>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
