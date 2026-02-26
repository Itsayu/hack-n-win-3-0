import React from "react";
import { Star, Trophy, Award, Gem, Sparkles, ArrowRight, ImageOff } from "lucide-react";
import BatAnimation from "../components/Animations/BatAnimation";

interface Sponsor {
  name: string;
  image: string;
}

interface SponsorTier {
  tier: string;
  id: string;
  icon: any;
  color: string;
  sponsors: Sponsor[];
}

const sponsorTiers: SponsorTier[] = [
  {
    tier: "Platinum",
    id: "platinum",
    icon: Gem,
    color: "text-blue-400",
    sponsors: [
      { name: "Mastra", image: "/sponsors/Mastra.png" },
      { name: "n8n", image: "/sponsors/n8n.png" },
    ],
  },
  {
    tier: "Gold",
    id: "gold",
    icon: Trophy,
    color: "text-yellow-400",
    sponsors: [
      { name: "Featherless.ai", image: "/sponsors/featherless.ai.png" },
      { name: ".xyz", image: "/sponsors/xyz.png" },
      { name: "Requestly", image: "/sponsors/Requestly.png" },
    ],
  },
  {
    tier: "Silver",
    id: "silver",
    icon: Award,
    color: "text-slate-400",
    sponsors: [
      { name: "Github", image: "/sponsors/GitHub.png" },
      { name: "V0", image: "/sponsors/v0.png" },
    ],
  },
  {
    tier: "Bronze",
    id: "bronze",
    icon: Star,
    color: "text-orange-400",
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
    id: "track",
    icon: Sparkles,
    color: "text-indigo-400",
    sponsors: [
      { name: "Duality", image: "/sponsors/Duality.png" },
      { name: "Requestly", image: "/sponsors/Requestly.png" },
    ],
  },
  {
    tier: "Incubation Partner",
    id: "incubation",
    icon: Gem,
    color: "text-red-400",
    sponsors: [
      { name: "VentureNest", image: "/sponsors/venturenest.png" },
    ],
  },
];

export default function Sponsors() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">
      <BatAnimation />

      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 pt-32 pb-20 text-center px-4">
        <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 backdrop-blur-sm shadow-sm">
          <span className="px-3 py-1 text-xs font-bold tracking-wide text-red-600 dark:text-red-400 uppercase">
            Community Partners
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
          Our Sponsors
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          The visionaries empowering <span className="text-red-600 dark:text-red-500 font-semibold">Hack-N-Win 3.0</span>.
        </p>
      </section>

      {/* SPONSOR GRID */}
      <section className="relative z-10 py-10 px-4 space-y-24 max-w-7xl mx-auto">
        {sponsorTiers.map((tier) => (
          <div key={tier.id} className="relative">
            
            {/* Tier Title */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-3 mb-2 px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md">
                 <tier.icon className={`w-5 h-5 ${tier.color}`} /> 
                <h2 className="text-xl font-bold tracking-tight uppercase text-zinc-700 dark:text-zinc-300">{tier.tier}</h2>
              </div>
            </div>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center gap-6">
              {tier.sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="
                    group relative w-64 h-36 
                    bg-white dark:bg-zinc-900 
                    border border-zinc-200 dark:border-zinc-800 
                    rounded-xl flex flex-col items-center justify-center p-8 
                    transition-all duration-300 
                    
                    /* HOVER STATES */
                    hover:scale-105 hover:shadow-xl hover:shadow-black/5
                    dark:hover:bg-white dark:hover:shadow-white/10
                    hover:-translate-y-1
                  "
                >
                  <img
                    src={sponsor.image}
                    alt={`${sponsor.name} logo`}
                    // Added a fallback gracefully if an image fails to load
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                    className="
                      max-h-full max-w-full object-contain transition-all duration-300 
                      
                      /* LIGHT MODE: Grayscale -> Color on Hover */
                      grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100

                      /* DARK MODE: Pure White -> Original Color on Hover */
                      dark:brightness-0 dark:invert 
                      dark:group-hover:brightness-100 dark:group-hover:invert-0
                    " 
                  />
                  
                  {/* Fallback text if image breaks */}
                  <div className="hidden text-center text-zinc-500 font-semibold flex-col items-center gap-2">
                    <ImageOff className="w-6 h-6 opacity-50" />
                    <span className="text-sm">{sponsor.name}</span>
                  </div>
                  
                  {/* Tooltip Name */}
                  <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-zinc-400 dark:group-hover:text-zinc-500 uppercase tracking-wider">
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto bg-zinc-900 dark:bg-zinc-900 text-white rounded-[2rem] p-8 md:p-16 text-center border border-zinc-800 shadow-2xl relative overflow-hidden group">
          
          {/* Animated Glow Behind CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Partner with Innovation
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Connect with 900+ developers and showcase your brand at the region's biggest tech event.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="mailto:sponsors@d4community.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold transition hover:bg-zinc-200 hover:scale-105"
            >
              Become a Sponsor <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://drive.google.com/file/d/1WS2fhpTtYCn8YBhMph1OT2us5rFaLRe7/view?usp=sharing"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-zinc-700 text-white px-8 py-4 rounded-xl font-bold transition hover:bg-zinc-800 hover:scale-105"
            >
              View Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}