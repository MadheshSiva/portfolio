import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { teamMembers } from "../data/teamData";
import ProfileSkeleton from "../components/ProfileSkeleton";
import ProfileSocials from "../components/ProfileSocials";
import { motion } from "framer-motion";


const ProfileDetail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    const member = teamMembers.find(m => m.id === Number(id));

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(t);
    }, []);

    if (loading) return <ProfileSkeleton />;
    if (!member) return null;

    return (
        <section className="pt-32 pb-24 bg-[#f5f5f7] dark:bg-black min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="text-center">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                    />

                    <h1 className="mt-6 text-4xl font-light tracking-tight">
                        {member.name}
                    </h1>

                    <p className="mt-2 text-blue-600 font-medium">
                        {member.role}
                    </p>

                    <p className="text-sm text-gray-500">
                        {member.experience}
                    </p>
                </div>

                {/* Summary */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mt-12 text-center text-gray-600 max-w-2xl mx-auto"
                >
                    {member.summary}
                </motion.p>

                {/* Timeline */}
                <div className="mt-20">
                    <h2 className="text-xl font-medium mb-6">
                        Experience
                    </h2>

                    <ul className="space-y-4">
                        {member.timeline.map((t, i) => (
                            <li key={i} className="flex gap-6">
                                <span className="text-gray-400 w-32">{t.year}</span>
                                <span>{t.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Projects */}
                <div className="mt-20">
                    <h2 className="text-xl font-medium mb-6">
                        Projects Handled
                    </h2>

                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        {member.projects.map(p => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                </div>
                <ProfileSocials socials={member.socials} />

            </div>
        </section>
    );
};

export default ProfileDetail;
