import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import PersonModal from "../components/Modals/PersonModal";
import teamData from "../data/team_members.json";
import { TeamMember } from "../types/people";
import BatAnimation from "../components/Animations/BatAnimation";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        await new Promise((r) => setTimeout(r, 200));
        const sorted = [...teamData].sort((a, b) =>
          (a.created_at || a.id).localeCompare(b.created_at || b.id)
        );
        setTeamMembers(sorted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const departmentColors: Record<string, string> = {
    Leadership: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    Operations: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    Technology: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    Marketing: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
    Partnerships: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    Community: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
    Design: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <BatAnimation />
      <section className="bg-gradient-to-br from-black via-red-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              The passionate people behind Hack-N-Win 3.0 and D4 Community
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Our dedicated team works tirelessly to create amazing experiences for the tech community.
                Get to know the people who make Hack-N-Win 3.0 possible.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 p-6 transition-all transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
                        {member.image}
                      </div>
                      <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-red-600 dark:text-red-400 font-semibold text-sm mb-3">
                        {member.role}
                      </p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          departmentColors[member.department] ||
                          "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {member.department}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-16 md:py-20 border-t-2 border-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Want to be part of organizing amazing tech events? We're always looking for passionate
              volunteers to join the D4 Community team.
            </p>
            <a
              href="mailto:team@d4community.com"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {selectedMember && (
        <PersonModal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          person={selectedMember}
        />
      )}
    </div>
  );
}
