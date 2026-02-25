import { Star, Trophy, Award, Gem } from "lucide-react";
import BatAnimation from "../components/Animations/BatAnimation";

interface Sponsor {
  name: string;
  image: string;
}

interface SponsorTier {
  tier: string;
  icon: any;
  gradient: string;
  border: string;
  sponsors: Sponsor[];
}

const sponsorTiers: SponsorTier[] = [
  {
    tier: "Platinum",
    icon: Gem,
    gradient: "from-gray-300 via-gray-100 to-gray-300",
    border: "border-gray-300 dark:border-gray-600",
    sponsors: [
      { name: "Mastra", image: "/sponsors/Mastra.png" },
      { name: "n8n", image: "/sponsors/n8n.png" },
    ],
  },
  {
    tier: "Gold",
    icon: Trophy,
    gradient: "from-yellow-500 via-yellow-300 to-yellow-500",
    border: "border-yellow-400 dark:border-yellow-500",
    sponsors: [
      { name: "Featherless.ai", image: "/sponsors/featherless.ai.png" },
      { name: ".xyz", image: "/sponsors/xyz.png" },
      { name: "Requestly", image: "/sponsors/Requestly.png" },
    ],
  },
  {
    tier: "Silver",
    icon: Award,
    gradient: "from-gray-500 via-gray-300 to-gray-500",
    border: "border-gray-400 dark:border-gray-500",
    sponsors: [
      { name: "Github", image: "/sponsors/GitHub.png" },
      { name: "V0", image: "/sponsors/v0.png" },
    ],
  },
  {
    tier: "Bronze",
    icon: Star,
    gradient: "from-orange-500 via-orange-300 to-orange-500",
    border: "border-orange-400 dark:border-orange-500",
    sponsors: [
      { name: "Osen", image: "/sponsors/OSEN 1.png" },
      { name: "Interview Buddy", image: "/sponsors/Interview Buddy.png" },
      { name: "Fueler", image: "/sponsors/Fueler.png" },
      { name: "Navan", image: "/sponsors/navan.png" },
      { name: "ETH India", image: "/sponsors/ETH India.png" },
      { name: "GDG Jalandhar", image: "/sponsors/GDG Jalandhar.png" },
      { name: "niwi.ai", image: "/sponsors/niwi.png" },
      { name: "curvet", image: "/sponsors/Curvet.png" },
    ],
  },
  {
    tier: "Track Partners",
    icon: Star,
    gradient: "from-indigo-500 via-indigo-300 to-indigo-500",
    border: "border-indigo-400 dark:border-indigo-500",
    sponsors: [
      { name: "Duality", image: "/sponsors/Duality.png" },
      { name: "Requestly", image: "/sponsors/Requestly.png" },
    ],
  },
  {
    tier: "Incubation Partner",
    icon: Gem,
    gradient: "from-red-500 via-red-400 to-red-500",
    border: "border-red-400 dark:border-red-600",
    sponsors: [
      { name: "VentureNest", image: "/sponsors/venturenest.png" },
    ],
  },
];

export default function Sponsors() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <BatAnimation />

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-br from-white via-red-50 to-white dark:from-black dark:via-red-950 dark:to-black border-b border-red-200 dark:border-red-900">
        <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-500/30">
          <Trophy className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our Sponsors
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400">
          Powered by companies that believe in innovation.
        </p>
      </section>

      {/* TIERS */}
      <section className="py-20 px-4 space-y-20">
        <div className="max-w-7xl mx-auto space-y-20">

          {sponsorTiers.map((tier) => (
            <div key={tier.tier}>
              
              {/* Tier Header */}
              <div className="text-center mb-10">
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${tier.gradient} text-black px-8 py-4 rounded-full shadow-md`}>
                  <tier.icon className="w-6 h-6" />
                  <span className="text-2xl font-bold">
                    {tier.tier}
                  </span>
                </div>
              </div>

              {/* Sponsors Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {tier.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className={`bg-white dark:bg-zinc-900 border ${tier.border} rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-14 object-contain mb-4 grayscale hover:grayscale-0 transition"
                    />
                    <h3 className="text-sm font-semibold">
                      {sponsor.name}
                    </h3>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-br from-white via-red-50 to-white dark:from-black dark:via-red-950 dark:to-black border-t border-red-200 dark:border-red-900">
        <h2 className="text-4xl font-bold mb-6">
          Become a Sponsor
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Partner with Hack-N-Win 3.0 and connect with 900+ talented developers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sponsors@d4community.com"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition hover:scale-105 shadow-md shadow-red-500/30"
          >
            Become a Sponsor
          </a>

          <a
            href="https://drive.google.com/file/d/1WS2fhpTtYCn8YBhMph1OT2us5rFaLRe7/view?usp=sharing"
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-bold transition hover:scale-105"
          >
            Download Brochure
          </a>
        </div>
      </section>
    </div>
  );
}