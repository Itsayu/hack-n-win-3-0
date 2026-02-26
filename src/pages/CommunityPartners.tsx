import React from "react";
import { Handshake, BookOpen, ArrowRight, ImageOff } from "lucide-react";
import BatAnimation from "../components/Animations/BatAnimation";

interface Partner {
  id: number;
  name: string;
  image: string;
}

// Images updated to point to the public folder
const partners: Partner[] = [
  { id: 1, name: "Encrypt Edge", image: "/partners/Encrypt Edge.png" },
  { id: 2, name: "ISTE Student Chapter CGCU", image: "/partners/ISTE Student Chapter CGCU.png" },
  { id: 3, name: "The Kailshians", image: "/partners/The Kailshians.png" },
  { id: 4, name: "CodeZen Community", image: "/partners/CodeZen.png" },
  { id: 5, name: "ACM Student Chapter", image: "/partners/ACM Student Chapter.png" },
  { id: 6, name: "GODC", image: "/partners/GODC.png" },
  { id: 7, name: "OffSecDiary", image: "/partners/OffSecDiary.png" },
  { id: 8, name: "Bug2Build", image: "/partners/Bug2Build.png" },
  { id: 9, name: "SheBuilds", image: "/partners/SheBuilds.png" },
  { id: 10, name: "Event Dev X", image: "/partners/Event DevX.png" },
  { id: 11, name: "Papaya Coders", image: "/partners/Papaya Coders.png" },
  { id: 12, name: "DevLearn", image: "/partners/DevLearn.png" },
  { id: 13, name: "CU Updates", image: "/partners/CU Updates.png" },
  { id: 14, name: "Ajinava Edge", image: "/partners/Ajinava Edge.png" },
  { id: 15, name: "Ascent Circle", image: "/partners/Ascent circle.png" },
  { id: 16, name: "The SEED Club", image: "/partners/The Seed Club.png" },
  { id: 17, name: "HackHalt Community", image: "/partners/HackHalt.png" },
  { id: 18, name: "InnovateX Engineers Community", image: "/partners/InnovateX Engineers Community.png" },
  { id: 19, name: "FlutterFlow Developers New Delhi", image: "/partners/FlutterFlow Developer Groups New Delhi.png" },
  { id: 20, name: "Apna Coding", image: "/partners/Apna Coding.png" },
  { id: 21, name: "Open Source Chandigarh", image: "/partners/Open Source Chandigarh.png" },
  { id: 22, name: "C Square", image: "/partners/C Square.png" },
  { id: 23, name: "GDG CGC COE", image: "/partners/GDG on Campus CGC COE.png" },
  { id: 24, name: "GDG MMDU Mullana", image: "/partners/GDG on Campus MM(DU), Mullana, Ambala.png" },
  { id: 25, name: "Wiztron", image: "/partners/Wiztron.png" },
  { id: 26, name: "ITMBUGSA", image: "/partners/ITMBUGSA.png" },
  { id: 27, name: "GDGoC", image: "/partners/GDGoCPEC.png" },
  { id: 28, name: "Tensorik Technologies", image: "/partners/Tensorik Technologies Private Limited.png" },
  { id: 29, name: "GDGoC SVIET", image: "/partners/GDGoC SVIET.png" },
  { id: 30, name: "The Uniques Community", image: "/partners/The Uniques Community .png" },
  { id: 31, name: "React Kolkata", image: "/partners/React Kolkata.png" },
  { id: 32, name: "MERN Stack Club", image: "/partners/MERN Stack Club.png" },
  { id: 33, name: "GDG TMSL", image: "/partners/GDG on Campus TMSL.png" },
  { id: 34, name: "GDG IGC", image: "/partners/Google Developer Groups on Campus IGC.png" },
  { id: 35, name: "GDGoC IET DAVV", image: "/partners/GDGoC IET DAVV.png" },
  { id: 36, name: "GDG BBDNIIT Lucknow", image: "/partners/GDG BBDNIIT, Lucknow.png" },
  { id: 37, name: "GDG SLIET", image: "/partners/GDG on Campus SLIET.png" },
  { id: 38, name: "Dream Coders", image: "/partners/Dream Coders.png" },
  { id: 39, name: "GDG TAE", image: "/partners/Google Developer Groups on Campus TAE.png" },
  { id: 40, name: "React Rajasthan", image: "/partners/React Rajasthan.png" },
  { id: 41, name: "DevHive", image: "/partners/DevHive.png" },
  { id: 42, name: "Coding Club IIT Jammu", image: "/partners/Coding Club, IIT Jammu.png" },
  { id: 43, name: "ZenYukti", image: "/partners/ZenYukti.png" },
  { id: 44, name: "VIDYUTAM VERDE", image: "/partners/VIDYUTAM VERDE.png" },
  { id: 45, name: "TheDevArmy", image: "/partners/theDevArmy.png" },
  { id: 46, name: "Nomad Coder", image: "/partners/nomadcoder.png" },
  { id: 47, name: "NodeZer0", image: "/partners/NodeZer0.png" },
  { id: 48, name: "IEEE Student Branch", image: "/partners/IEEE Student Branch.png" },
  { id: 49, name: "Shadow Script Community", image: "/partners/Shadow Script Community.png" },
  { id: 50, name: "ICA", image: "/partners/ICA.png" },
  { id: 51, name: "GDG IIIT Kalyani", image: "/partners/GDG on Campus, IIIT Kalyani.png" },
  { id: 52, name: "GDGOC-DGI", image: "/partners/GDGOC-DGI.png" },
  { id: 53, name: "AI Community Delhi", image: "/partners/AI Delhi.png" },
  { id: 54, name: "MongoDB User Group Chandigarh", image: "/partners/MUG CHD.png" },
  { id: 55, name: "Slay", image: "/partners/Slay.png" },
  { id: 56, name: "GDG Cloud Chandigarh", image: "/partners/GDGC CHD.png" },
  { id: 57, name: "Girls Leading Tech", image: "/partners/Girls Leading Tech.png" },
  { id: 58, name: "ML Chandigarh", image: "/partners/ML Chandigarh.png" },
  { id: 59, name: "GDG Jalandhar", image: "/partners/GDG Jalandhar.png" },
  { id: 60, name: "GDG Chandigarh", image: "/partners/GDG Chandigarh.png" },
  { id: 61, name: "GrowIn Community", image: "/partners/GrowIn Community.png" },
  { id: 62, name: "YATU Learn", image: "/partners/YATU Learn.png" },
];

export default function CommunityPartners() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">
      <BatAnimation />

      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 text-center px-4">
        <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 backdrop-blur-sm shadow-sm">
          <span className="px-3 py-1 text-xs font-bold tracking-wide text-red-600 dark:text-red-400 uppercase">
            Stronger Together
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
          Community Partners
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Proudly collaborating with <span className="text-red-600 dark:text-red-500 font-semibold">{partners.length}+</span> tech communities to fuel innovation.
        </p>
      </section>

      {/* PARTNERS GRID - Centered with Flexbox */}
      <section className="relative z-10 py-10 px-4 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="
                  group relative w-56 h-32 
                  bg-white dark:bg-zinc-900 
                  border border-zinc-200 dark:border-zinc-800 
                  rounded-xl flex flex-col items-center justify-center p-6 
                  transition-all duration-300 
                  
                  /* HOVER STATES */
                  hover:scale-105 hover:shadow-xl hover:shadow-black/5
                  dark:hover:bg-white dark:hover:shadow-white/10
                  hover:-translate-y-1
                "
              >
                <img
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                  className="
                    max-h-12 max-w-full object-contain transition-all duration-300 
                    
                    /* LIGHT MODE: Grayscale -> Color on Hover */
                    grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100

                    /* DARK MODE: Pure White -> Original Color on Hover */
                    dark:brightness-0 dark:invert 
                    dark:group-hover:brightness-100 dark:group-hover:invert-0
                  "
                />

                {/* Fallback text if image breaks */}
                <div className="hidden text-center text-zinc-500 font-semibold flex-col items-center gap-2">
                  <ImageOff className="w-5 h-5 opacity-50" />
                  <span className="text-xs">{partner.name}</span>
                </div>
                
                {/* Tooltip Name */}
                <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-zinc-400 dark:group-hover:text-zinc-500 uppercase tracking-wider text-center px-2">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-24 px-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto bg-zinc-900 dark:bg-zinc-900 text-white rounded-[2rem] p-8 md:p-16 text-center border border-zinc-800 shadow-2xl relative overflow-hidden group">
          
          {/* Animated Glow Behind CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />

          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20 relative z-10">
            <Handshake className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Become a Community Partner
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Join our growing network of student developers, creators, and open-source advocates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="mailto:partners@d4community.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold transition hover:bg-zinc-200 hover:scale-105"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}