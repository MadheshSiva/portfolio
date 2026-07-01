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
    <section className="pt-32 pb-24 bg-gray-50 dark:bg-[#050505] min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
            The People
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-600 dark:text-white/90">
            Meet our <span className="animated-gradient-text">team</span>
          </h1>
          <p className="mt-8 text-lg text-gray-600 dark:text-white/45 leading-relaxed font-light">
            Talented professionals dedicated to bringing your ideas to life with expertise, creativity, and passion.
          </p>
        </div>

        {/* Team Grid */}
        {loading ? (
          <TeamGridSkeleton count={4} />
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        )}

        {/* Join CTA */}
        <div className="mt-32 text-center">
          <div className="glass p-14 sm:p-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/[0.04] blur-[100px] rounded-full" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-gray-600 dark:text-white/90 mb-5">
                Want to join our team?
              </h2>
              <p className="text-gray-600 dark:text-white/40 text-lg mb-10 max-w-2xl mx-auto font-light">
                We're always looking for talented individuals who are passionate about technology and innovation.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-10 py-5 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full font-semibold text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.03] transition-all duration-500"
              >
                Get in Touch
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;