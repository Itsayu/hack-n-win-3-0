"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import PersonModal from "../components/Modals/PersonModal";
import mentorsData from "../data/mentors.json";
import { Mentor } from "../types/people";

export default function Mentors() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    // If you prefer to simulate async loading, keep setTimeout; otherwise you can set directly.
    const load = async () => {
      try {
        // Simulate a small delay for UX (remove setTimeout if you don't want it)
        await new Promise((r) => setTimeout(r, 200));
        // sort by created_at ascending (fallback to id if missing)
        const sorted = [...mentorsData].sort((a, b) =>
          (a.created_at || a.id).localeCompare(b.created_at || b.id)
        );
        setMentors(sorted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="bg-gradient-to-br from-black via-red-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mentors</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Learn from industry experts who are here to guide you
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Our mentors are seasoned professionals from leading tech companies, ready to help you
                overcome challenges and build amazing projects during the hackathon.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    onClick={() => setSelectedMentor(mentor)}
                    className="bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 p-6 transition-all transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <div className="text-center">
                      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 shadow-lg">
                        {mentor.image}
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        {mentor.name}
                      </h3>
                      <p className="text-red-600 dark:text-red-400 font-semibold mb-3">
                        {mentor.role}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {mentor.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {(mentor.expertise || []).slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-full text-xs font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                        {(mentor.expertise || []).length > 3 && (
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-semibold">
                            +{mentor.expertise.length - 3} more
                          </span>
                        )}
                      </div>
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
              Need Guidance?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Our mentors will be available throughout the hackathon to help you with technical
              challenges, brainstorming, and project guidance.
            </p>
            <a
              href="/#register"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Register to Meet Mentors
            </a>
          </div>
        </div>
      </section>

      {selectedMentor && (
        <PersonModal
          isOpen={!!selectedMentor}
          onClose={() => setSelectedMentor(null)}
          person={selectedMentor}
        />
      )}
    </div>
  );
}
