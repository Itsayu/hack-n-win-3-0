import { X, Linkedin, Twitter, Github } from 'lucide-react';

interface PersonModalProps {
  isOpen: boolean;
  onClose: () => void;
  person: {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    expertise?: string[];
    department?: string;
  };
}

export default function PersonModal({ isOpen, onClose, person }: PersonModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full border-4 border-red-600 shadow-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-r from-black via-red-900 to-black p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-6xl mb-4 shadow-2xl">
              {person.image}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{person.name}</h2>
            <p className="text-xl text-red-400">{person.role}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-black dark:text-white mb-3">About</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{person.bio}</p>
          </div>

          {person.expertise && person.expertise.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {person.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {person.department && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Department</h3>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-lg font-semibold">
                {person.department}
              </span>
            </div>
          )}

          <div className="flex gap-4 justify-center pt-4 border-t border-gray-200 dark:border-gray-800">
            {person.linkedin && (
              <a
                href={`https://linkedin.com/in/${person.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-red-600 dark:hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-black dark:text-white group-hover:text-white" />
              </a>
            )}
            {person.twitter && (
              <a
                href={`https://twitter.com/${person.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-red-600 dark:hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-6 h-6 text-black dark:text-white group-hover:text-white" />
              </a>
            )}
            {person.github && (
              <a
                href={`https://github.com/${person.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-red-600 dark:hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Github className="w-6 h-6 text-black dark:text-white group-hover:text-white" />
              </a>
            )}
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
