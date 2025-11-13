import { Handshake, Globe, BookOpen, Code, Users } from "lucide-react";

const partners = [
  {
    id: 1,
    name: "Tech Community Network",
    logo: "🌐",
    description:
      "A global network connecting tech communities worldwide, fostering collaboration and knowledge sharing.",
    type: "Community",
    website: "techcommunity.org",
  },
  {
    id: 2,
    name: "Code for Good",
    logo: "💚",
    description:
      "Non-profit organization using technology to solve social problems and make the world a better place.",
    type: "Non-Profit",
    website: "codeforgood.org",
  },
  {
    id: 3,
    name: "Developer Circle",
    logo: "⭕",
    description:
      "Local developer communities around the world, bringing together passionate technologists.",
    type: "Community",
    website: "developercircle.io",
  },
  {
    id: 4,
    name: "Open Source Initiative",
    logo: "🔓",
    description:
      "Promoting and protecting open source software development and communities worldwide.",
    type: "Organization",
    website: "opensource.org",
  },
  {
    id: 5,
    name: "Women in Tech",
    logo: "👩‍💻",
    description:
      "Empowering women in technology through mentorship, education, and community support.",
    type: "Community",
    website: "womenintech.org",
  },
  {
    id: 6,
    name: "Student Developer Club",
    logo: "🎓",
    description:
      "University-based community helping students learn about technology and prepare for tech careers.",
    type: "Educational",
    website: "studentdev.club",
  },
  {
    id: 7,
    name: "Hackathon League",
    logo: "🏆",
    description:
      "Platform connecting hackathons globally and providing resources for organizers and participants.",
    type: "Platform",
    website: "hackathonleague.com",
  },
  {
    id: 8,
    name: "Indie Hackers",
    logo: "🚀",
    description:
      "Community of founders helping each other build profitable online businesses and products.",
    type: "Community",
    website: "indiehackers.com",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Community":
      return "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700";
    case "Non-Profit":
      return "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700";
    case "Organization":
      return "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-300 dark:border-purple-700";
    case "Educational":
      return "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700";
    case "Platform":
      return "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-300 dark:border-pink-700";
    default:
      return "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700";
  }
};

export default function CommunityPartners() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="bg-gradient-to-br from-black via-red-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Handshake className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Community Partners</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Building bridges across tech communities worldwide
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                We're proud to collaborate with amazing communities and organizations that share our
                vision of empowering developers and fostering innovation in the tech ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner) => {
                // ensure website has protocol
                const href =
                  partner.website.startsWith("http://") || partner.website.startsWith("https://")
                    ? partner.website
                    : `https://${partner.website}`;

                return (
                  <div
                    key={partner.id}
                    className="bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 p-6 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-4">{partner.logo}</div>
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        {partner.name}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getTypeColor(
                          partner.type
                        )}`}
                      >
                        {partner.type}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 text-center">
                      {partner.description}
                    </p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400 hover:underline text-sm font-semibold"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Website
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">8+</h3>
                <p className="text-gray-700 dark:text-gray-300">Partner Communities</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Global</h3>
                <p className="text-gray-700 dark:text-gray-300">Worldwide Reach</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">10K+</h3>
                <p className="text-gray-700 dark:text-gray-300">Combined Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-black via-red-900 to-black py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Community Partner</h2>
            <p className="text-xl text-gray-300 mb-8">
              Are you part of a tech community or organization? Join our network of community partners
              and collaborate with us to create amazing experiences for developers worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold mb-2">Collaborate</h3>
                <p className="text-gray-300 text-sm">Work together on events and initiatives</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl mb-3">📢</div>
                <h3 className="text-xl font-bold mb-2">Amplify</h3>
                <p className="text-gray-300 text-sm">Share resources and reach new audiences</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="text-xl font-bold mb-2">Grow</h3>
                <p className="text-gray-300 text-sm">Expand your community's impact together</p>
              </div>
            </div>

            <a
              href="mailto:partners@d4community.com"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
