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

        <h1 className="text-4xl font-light mb-16">Our Team</h1>

        {loading ? (
          <TeamGridSkeleton count={6} />
        ) : (
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
