import { Handshake, BookOpen } from "lucide-react";
import BatAnimation from "../components/Animations/BatAnimation";

interface Partner {
  id: number;
  name: string;
  image: string;
}

const partners = [
  { id: 1, name: "Encrypt Edge", image: "/src/assets/partners/Encrypt Edge.png" },
  { id: 2, name: "ISTE Student Chapter CGCU", image: "/src/assets/partners/ISTE Student Chapter CGCU.png" },
  { id: 3, name: "The Kailshians", image: "/src/assets/partners/The Kailshians.png" },
  { id: 4, name: "CodeZen Community", image: "/src/assets/partners/CodeZen.png" },
  { id: 5, name: "ACM Student Chapter", image: "/src/assets/partners/ACM Student Chapter.png" },
  { id: 6, name: "GODC", image: "/src/assets/partners/GODC.png" },
  { id: 7, name: "OffSecDiary", image: "/src/assets/partners/OffSecDiary.png" },
  { id: 8, name: "Bug2Build", image: "/src/assets/partners/Bug2Build.png" },
  { id: 9, name: "SheBuilds", image: "/src/assets/partners/SheBuilds.png" },
  { id: 10, name: "Event Dev X", image: "/src/assets/partners/Event DevX.png" },
  { id: 11, name: "Papaya Coders", image: "/src/assets/partners/Papaya Coders.png" },
  { id: 12, name: "DevLearn", image: "/src/assets/partners/DevLearn.png" },
  { id: 13, name: "CU Updates", image: "/src/assets/partners/CU Updates.png" },
  { id: 14, name: "Ajinava Edge", image: "/src/assets/partners/Ajinava Edge.png" },
  { id: 15, name: "Ascent Circle", image: "/src/assets/partners/Ascent circle.png" },
  { id: 16, name: "The SEED Club", image: "/src/assets/partners/The Seed Club.png" },
  { id: 17, name: "HackHalt Community", image: "/src/assets/partners/HackHalt.png" },
  { id: 18, name: "InnovateX Engineers Community", image: "/src/assets/partners/InnovateX Engineers Community.png" },
  { id: 19, name: "FlutterFlow Developers New Delhi", image: "/src/assets/partners/FlutterFlow Developer Groups New Delhi.png" },
  { id: 20, name: "Apna Coding", image: "/src/assets/partners/Apna Coding.png" },
  { id: 21, name: "Open Source Chandigarh", image: "/src/assets/partners/Open Source Chandigarh.png" },
  { id: 22, name: "C Square", image: "/src/assets/partners/C Square.png" },
  { id: 23, name: "GDG CGC COE", image: "/src/assets/partners/GDG on Campus CGC COE.png" },
  { id: 24, name: "GDG MMDU Mullana", image: "/src/assets/partners/GDG on Campus MM(DU), Mullana, Ambala.png" },
  { id: 25, name: "Wiztron", image: "/src/assets/partners/Wiztron.png" },
  { id: 26, name: "ITMBUGSA", image: "/src/assets/partners/ITMBUGSA.png" },
  { id: 27, name: "GDGoC", image: "/src/assets/partners/GDGoCPEC.png" },
  { id: 28, name: "Tensorik Technologies", image: "/src/assets/partners/Tensorik Technologies Private Limited.png" },
  { id: 29, name: "GDGoC SVIET", image: "/src/assets/partners/GDGoC SVIET.png" },
  { id: 30, name: "The Uniques Community", image: "/src/assets/partners/The Uniques Community .png" },
  { id: 31, name: "React Kolkata", image: "/src/assets/partners/React Kolkata.png" },
  { id: 32, name: "MERN Stack Club", image: "/src/assets/partners/MERN Stack Club.png" },
  { id: 33, name: "GDG TMSL", image: "/src/assets/partners/GDG on Campus TMSL.png" },
  { id: 34, name: "GDG IGC", image: "/src/assets/partners/Google Developer Groups on Campus IGC.png" },
  { id: 35, name: "GDGoC IET DAVV", image: "/src/assets/partners/GDGoC IET DAVV.png" },
  { id: 36, name: "GDG BBDNIIT Lucknow", image: "/src/assets/partners/GDG BBDNIIT, Lucknow.png" },
  { id: 37, name: "GDG SLIET", image: "/src/assets/partners/GDG on Campus SLIET.png" },
  { id: 38, name: "Dream Coders", image: "/src/assets/partners/Dream Coders.png" },
  { id: 39, name: "GDG TAE", image: "/src/assets/partners/Google Developer Groups on Campus TAE.png" },
  { id: 40, name: "React Rajasthan", image: "/src/assets/partners/React Rajasthan.png" },
  { id: 41, name: "DevHive", image: "/src/assets/partners/DevHive.png" },
  { id: 42, name: "Coding Club IIT Jammu", image: "/src/assets/partners/Coding Club, IIT Jammu.png" },
  { id: 43, name: "ZenYukti", image: "/src/assets/partners/ZenYukti.png" },
  { id: 44, name: "VIDYUTAM VERDE", image: "/src/assets/partners/VIDYUTAM VERDE.png" },
  { id: 45, name: "TheDevArmy", image: "/src/assets/partners/theDevArmy.png" },
  { id: 46, name: "Nomad Coder", image: "/src/assets/partners/nomadcoder.png" },
  { id: 47, name: "NodeZer0", image: "/src/assets/partners/NodeZer0.png" },
  { id: 48, name: "IEEE Student Branch", image: "/src/assets/partners/IEEE Student Branch.png" },
  { id: 49, name: "Shadow Script Community", image: "/src/assets/partners/Shadow Script Community.png" },
  { id: 50, name: "ICA", image: "/src/assets/partners/ICA.png" },
  { id: 51, name: "GDG IIIT Kalyani", image: "/src/assets/partners/GDG on Campus, IIIT Kalyani.png" },
  { id: 52, name: "GDGOC-DGI", image: "/src/assets/partners/GDGOC-DGI.png" },
  { id: 53, name: "AI Community Delhi", image: "/src/assets/partners/AI Delhi.png" },
  { id: 54, name: "MongoDB User Group Chandigarh", image: "/src/assets/partners/MUG CHD.png" },
  { id: 55, name: "Slay", image: "/src/assets/partners/Slay.png" },
  { id: 56, name: "GDG Cloud Chandigarh", image: "/src/assets/partners/GDGC CHD.png" },
  { id: 57, name: "Girls Leading Tech", image: "/src/assets/partners/Girls Leading Tech.png" },
  { id: 58, name: "ML Chandigarh", image: "/src/assets/partners/ML Chandigarh.png" },
  { id: 59, name: "GDG Jalandhar", image: "/src/assets/partners/GDG Jalandhar.png" },
  { id: 60, name: "GDG Chandigarh", image: "/src/assets/partners/GDG Chandigarh.png" },
  { id: 61, name: "GrowIn Community", image: "/src/assets/partners/GrowIn Community.png" },
  { id: 62, name: "YATU Learn", image: "/src/assets/partners/YATU Learn.png" },
];
export default function CommunityPartners() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <BatAnimation />

      {/* Hero */}
      <section className="py-24 text-center bg-gradient-to-br from-white via-red-50 to-white dark:from-black dark:via-red-950 dark:to-black border-b border-red-200 dark:border-red-900">
        <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-500/30">
          <Handshake className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-5xl font-bold mb-6">Community Partners</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Proudly collaborating with {partners.length}+ tech communities
        </p>
      </section>

      {/* Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-16 object-contain mb-4 grayscale hover:grayscale-0 transition"
              />
              <h3 className="text-sm font-semibold">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-br from-white via-red-50 to-white dark:from-black dark:via-red-950 dark:to-black border-t border-red-200 dark:border-red-900">
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-red-500/30">
          <BookOpen className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl font-bold mb-6">Become a Community Partner</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Join our growing network and collaborate with us.
        </p>

        <a
          href="mailto:partners@d4community.com"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition hover:scale-105 shadow-md shadow-red-500/30"
        >
          Partner With Us
        </a>
      </section>
    </div>
  );
}