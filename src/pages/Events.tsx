import { Calendar, Clock, MapPin, Users, Mic, Code, Sparkles, Globe, Briefcase } from 'lucide-react';
import BatAnimation from "../components/Animations/BatAnimation";

const events = [
  {
    id: 1,
    title: 'Registration',
    description: 'Registration desk is open for all participants to collect their kits and badges.',
    date: 'Mar 7, 2026',
    time: '7:30 AM - 10:00 AM',
    location: 'Registration Desk',
    type: 'Ceremony',
  },
  {
    id: 2,
    title: 'Inauguration',
    description: 'The inauguration ceremony will begin, followed by participants proceeding to their project locations.',
    date: 'Mar 7, 2026',
    time: '10:00 AM - 10:45 AM',
    location: 'Main Auditorium',
    type: 'Ceremony',
  },
  {
    id: 3,
    title: 'Lunch',
    description: 'Lunch will be served for all participants.',
    date: 'Mar 7, 2026',
    time: '12:45 PM - 2:00 PM',
    location: 'Food Court',
    type: 'Social',
  },
  {
    id: 4,
    title: 'First round of Mentoring',
    description: 'Teams will receive initial guidance and feedback from mentors during this session.',
    date: 'Mar 7, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Team Zones',
    type: 'Mentoring',
  },
  {
    id: 5,
    title: 'Evening Snacks',
    description: 'Light snacks and tea/coffee will be served.',
    date: 'Mar 7, 2026',
    time: '5:00 PM - 6:00 PM',
    location: 'Food Court',
    type: 'Social',
  },
  {
    id: 6,
    title: 'Second round of Mentoring',
    description: 'Additional guidance and project refinement feedback from mentors.',
    date: 'Mar 7, 2026',
    time: '6:15 PM - 8:00 PM',
    location: 'Team Zones',
    type: 'Mentoring',
  },
  {
    id: 7,
    title: 'Dinner',
    description: 'Dinner will be served for all participants and mentors.',
    date: 'Mar 7, 2026',
    time: '8:00 PM - 9:30 PM',
    location: 'Food Court',
    type: 'Social',
  },
  {
    id: 8,
    title: 'A fun activity session',
    description: 'Cultural or musical events to refresh participants and energize them for brainstorming.',
    date: 'Mar 7, 2026',
    time: '11:00 PM - 12:00 AM',
    location: 'Main Stage',
    type: 'Social',
  },
  {
    id: 9,
    title: 'First evaluation round',
    description: 'Teams present their progress for assessment to the mentors.',
    date: 'Mar 8, 2026',
    time: '1:00 AM - 5:00 AM',
    location: 'Team Zones',
    type: 'Presentation',
  },
  {
    id: 10,
    title: 'Breakfast',
    description: 'Breakfast will be served to start the second day.',
    date: 'Mar 8, 2026',
    time: '7:30 AM - 9:00 AM',
    location: 'Food Court',
    type: 'Social',
  },
  {
    id: 11,
    title: 'Final round of Evaluation',
    description: 'The top 10 to 15 teams present their projects to the judges. Each team has 10 minutes, followed by the felicitation ceremony.',
    date: 'Mar 8, 2026',
    time: '10:30 AM - 2:00 PM',
    location: 'Main Auditorium',
    type: 'Presentation',
  },
];

const workshops = [
  {
    id: 1,
    title: 'Build with AI',
    description: 'Multiple Google Developers Experts will be joining us for this exclusive session on AI development and implementation.',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'MongoDB Workshop',
    description: 'Expert talk and workshop by MongoDB User Group Chandigarh on modern database practices.',
    icon: Briefcase,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Snap AR Workshop',
    description: 'Dive into augmented reality development with Snap AR experts.',
    icon: Code,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 4,
    title: 'Developer Tools Workshop',
    description: 'Hands-on sessions on Requestly, GitHub, and other essential developer tools.',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
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

      {/* Workshops Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-2 px-4 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                <Mic className="w-4 h-4 text-red-600 dark:text-red-400 mr-2" />
                <span className="text-red-600 dark:text-red-400 font-semibold">Expert Talks & Workshops</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                Learn from the Best
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Alongside the hackathon, we're hosting multiple expert sessions and workshops
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {workshops.map((workshop) => (
                <div
                  key={workshop.id}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${workshop.color}`} />
                  <div className="p-8">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${workshop.color} flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform`}>
                        <workshop.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                          {workshop.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {workshop.description}
                        </p>
                        <div className="flex items-center text-red-600 dark:text-red-400 font-medium">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>Agenda announced soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Workshops Banner */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">And Many More!</h3>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                Fun activities, challenges, and workshops on Requestly, GitHub, FunActive, Chainalysis, and more. 
                Stay tuned for the complete schedule!
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {['Requestly', 'GitHub', 'FunActive', 'Chainalysis', 'Snap AR', 'MongoDB'].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Schedule Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                Hackathon Schedule
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                24 hours of innovation, coding, and collaboration
              </p>
            </div>
            
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
              href="https://hacknwin-3.devfolio.co/overview"
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