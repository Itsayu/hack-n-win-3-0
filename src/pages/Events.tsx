import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import BatAnimation from "../components/Animations/BatAnimation";

const events = [
  {
    id: 1,
    title: 'Opening Ceremony',
    description: 'Kick off the hackathon with an inspiring opening ceremony featuring keynote speakers.',
    date: 'Dec 31, 2025',
    time: '9:00 AM - 10:00 AM',
    location: 'Main Auditorium',
    type: 'Ceremony',
  },
  {
    id: 2,
    title: 'Team Formation & Ideation',
    description: 'Meet your teammates, brainstorm ideas, and finalize your project concept.',
    date: 'Dec 31, 2025',
    time: '10:00 AM - 12:00 PM',
    location: 'Team Zones',
    type: 'Workshop',
  },
  {
    id: 3,
    title: 'Hacking Begins',
    description: 'Start building your project! Mentors will be available throughout the session.',
    date: 'Dec 31, 2025',
    time: '12:00 PM',
    location: 'Hacking Arena',
    type: 'Main Event',
  },
  {
    id: 4,
    title: 'Tech Talk: Building Scalable Apps',
    description: 'Learn best practices for building scalable applications from industry experts.',
    date: 'Dec 31, 2025',
    time: '2:00 PM - 3:00 PM',
    location: 'Workshop Hall A',
    type: 'Workshop',
  },
  {
    id: 5,
    title: 'UI/UX Design Workshop',
    description: 'Master the art of creating beautiful and intuitive user interfaces.',
    date: 'Dec 31, 2025',
    time: '3:00 PM - 4:00 PM',
    location: 'Workshop Hall B',
    type: 'Workshop',
  },
  {
    id: 6,
    title: 'Midnight Snacks & Networking',
    description: 'Take a break, refuel, and network with fellow hackers and mentors.',
    date: 'Jan 1, 2026',
    time: '12:00 AM - 1:00 AM',
    location: 'Food Court',
    type: 'Social',
  },
  {
    id: 7,
    title: 'Code Review Sessions',
    description: 'Get feedback on your code from experienced mentors and improve your project.',
    date: 'Jan 1, 2026',
    time: '6:00 AM - 8:00 AM',
    location: 'Mentor Zone',
    type: 'Mentoring',
  },
  {
    id: 8,
    title: 'Project Submission Deadline',
    description: 'Final submission deadline. Make sure your project is ready!',
    date: 'Jan 1, 2026',
    time: '10:00 AM',
    location: 'Online Portal',
    type: 'Deadline',
  },
  {
    id: 9,
    title: 'Project Presentations',
    description: 'Present your project to the judges and showcase your hard work.',
    date: 'Jan 1, 2026',
    time: '11:00 AM - 3:00 PM',
    location: 'Main Stage',
    type: 'Presentation',
  },
  {
    id: 10,
    title: 'Closing Ceremony & Prize Distribution',
    description: 'Celebrate achievements, announce winners, and distribute prizes.',
    date: 'Jan 1, 2026',
    time: '4:00 PM - 5:00 PM',
    location: 'Main Auditorium',
    type: 'Ceremony',
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Ceremony':
      return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-300 dark:border-red-700';
    case 'Workshop':
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700';
    case 'Main Event':
      return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-300 dark:border-purple-700';
    case 'Social':
      return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700';
    case 'Mentoring':
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700';
    case 'Deadline':
      return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700';
    case 'Presentation':
      return 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-300 dark:border-pink-700';
    default:
      return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700';
  }
};

export default function Events() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <BatAnimation />
      <section className="bg-gradient-to-br from-black via-red-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Calendar className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Event Schedule</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              A carefully crafted schedule packed with workshops, talks, and hacking time
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all p-6 md:p-8 shadow-lg hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                            {event.title}
                          </h3>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getTypeColor(
                              event.type
                            )}`}
                          >
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Calendar className="w-5 h-5 text-red-600" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Clock className="w-5 h-5 text-red-600" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-16 md:py-20 border-t-2 border-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              Ready to Join?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Don't miss out on this epic experience. Register now and secure your spot!
            </p>
            <a
              href="/#register"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
