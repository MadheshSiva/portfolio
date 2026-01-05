import { useEffect, useState } from "react";
import { teamMembers } from "../data/teamData";
import TeamCard from "../components/TeamCard";
import TeamGridSkeleton from "../components/TeamGridSkeleton";

const Team = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="pt-32 pb-24 bg-[#f5f5f7] dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-700 dark:text-white">
            Meet Our Team
          </h1>
          <p className="mt-8 text-lg text-gray-500 dark:text-gray-300 leading-relaxed">
            Talented professionals dedicated to bringing your ideas to life with expertise, creativity, and passion.
          </p>
        </div>

        {/* Team Grid */}
        {loading ? (
          <TeamGridSkeleton count={6} />
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fadeIn"
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        )}

        {/* Join Team CTA */}
        <div className="mt-32 text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Want to join our team?
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-white text-indigo-600 font-medium
                       hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;