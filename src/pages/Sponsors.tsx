import { Star, Trophy, Award, Gem } from 'lucide-react';

const sponsorTiers = [
  {
    tier: 'Platinum',
    icon: Gem,
    color: 'from-gray-400 via-gray-200 to-gray-400',
    borderColor: 'border-gray-400',
    sponsors: [
      { name: 'TechCorp Global', logo: '🏢', description: 'Leading technology solutions provider' },
      { name: 'Innovation Labs', logo: '🔬', description: 'Research and development pioneers' },
    ],
  },
  {
    tier: 'Gold',
    icon: Trophy,
    color: 'from-yellow-600 via-yellow-400 to-yellow-600',
    borderColor: 'border-yellow-500',
    sponsors: [
      { name: 'CodeMasters Inc', logo: '💻', description: 'Software development excellence' },
      { name: 'Digital Dynamics', logo: '⚡', description: 'Digital transformation experts' },
      { name: 'CloudNine Systems', logo: '☁️', description: 'Cloud infrastructure solutions' },
    ],
  },
  {
    tier: 'Silver',
    icon: Award,
    color: 'from-gray-600 via-gray-400 to-gray-600',
    borderColor: 'border-gray-500',
    sponsors: [
      { name: 'StartupHub', logo: '🚀', description: 'Supporting innovative startups' },
      { name: 'DevTools Pro', logo: '🛠️', description: 'Developer tools and resources' },
      { name: 'DataFlow Analytics', logo: '📊', description: 'Data analytics platform' },
      { name: 'SecureNet', logo: '🔐', description: 'Cybersecurity solutions' },
    ],
  },
  {
    tier: 'Bronze',
    icon: Star,
    color: 'from-orange-700 via-orange-500 to-orange-700',
    borderColor: 'border-orange-600',
    sponsors: [
      { name: 'WebWave', logo: '🌊', description: 'Web development agency' },
      { name: 'AppForge', logo: '🔨', description: 'Mobile app development' },
      { name: 'PixelPerfect', logo: '🎨', description: 'Design and branding studio' },
      { name: 'CodeCraft', logo: '⚙️', description: 'Software engineering services' },
      { name: 'TechBridge', logo: '🌉', description: 'Technology consulting' },
    ],
  },
];

export default function Sponsors() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="bg-gradient-to-br from-black via-red-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Trophy className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Sponsors</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Powered by industry leaders who believe in innovation
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                We're grateful to our sponsors who make Hack-N-Win 3.0 possible. Their support enables us
                to provide an exceptional experience for all participants.
              </p>
            </div>

            <div className="space-y-16">
              {sponsorTiers.map((tier) => (
                <div key={tier.tier}>
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center gap-3 bg-gradient-to-r ${tier.color} text-white px-8 py-4 rounded-full mb-4 shadow-lg`}
                    >
                      <tier.icon className="w-8 h-8" />
                      <span className="text-2xl md:text-3xl font-bold">{tier.tier} Sponsors</span>
                    </div>
                  </div>

                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
                      tier.sponsors.length >= 4 ? '3' : '2'
                    } gap-6`}
                  >
                    {tier.sponsors.map((sponsor) => (
                      <div
                        key={sponsor.name}
                        className={`bg-white dark:bg-gray-900 rounded-xl border-2 ${tier.borderColor} p-8 hover:shadow-xl transition-all transform hover:scale-105`}
                      >
                        <div className="text-center">
                          <div className="text-6xl mb-4">{sponsor.logo}</div>
                          <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                            {sponsor.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">{sponsor.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-black via-red-900 to-black py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Sponsor</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in empowering the next generation of innovators. Partner with Hack-N-Win 3.0 and
              connect with talented developers, showcase your brand, and support the tech community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="text-xl font-bold mb-2">500+ Participants</h3>
                <p className="text-gray-300 text-sm">Reach talented developers and tech enthusiasts</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold mb-2">Brand Visibility</h3>
                <p className="text-gray-300 text-sm">Showcase your company to our community</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold mb-2">Recruitment</h3>
                <p className="text-gray-300 text-sm">Connect with top talent for your team</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sponsors@d4community.com"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                Become a Sponsor
              </a>
              <a
                href="/sponsorship-deck.pdf"
                className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                Download Deck
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
