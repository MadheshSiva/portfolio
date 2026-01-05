import TeamCard from "./TeamCard";
import { teamMembers } from "../data/teamData";

const ProfileSection = () => {
    return (
        <section className="py-32 bg-[#f5f5f7] dark:bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                    Our Team
                </h2>

                <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    A dedicated group of engineers and designers committed to building
                    scalable, reliable, and thoughtfully crafted digital solutions.
                </p>

                <div className="mt-20 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {teamMembers.slice(0, 6).map(member => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
