import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { teamMembers } from "../data/teamData";
import ProfileSkeleton from "../components/ProfileSkeleton";
import ProfileSocials from "../components/ProfileSocials";
import { motion } from "framer-motion";

const getInitials = (name) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const ProfileDetail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [imgError, setImgError] = useState(false);

    const member = teamMembers.find(m => m.id === Number(id));

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(t);
    }, []);

    if (loading) return <ProfileSkeleton />;
    if (!member) return null;

    return (
        <section className="pt-24 pb-24 bg-gray-50 dark:bg-[#050505] min-h-screen text-gray-900 dark:text-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Ambient Glows */}
                <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[120px]" />
                </div>

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="glass overflow-hidden">
                        {/* Header gradient */}
                        <div className="relative h-48 bg-gradient-to-r from-violet-500/20 via-blue-500/15 to-violet-500/20">
                            <div className="absolute inset-0 bg-gray-50 dark:bg-[#050505]/30 backdrop-blur-sm" />
                        </div>

                        {/* Content */}
                        <div className="relative px-8 pb-12">
                            {/* Avatar */}
                            <div className="flex justify-center -mt-20 mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-blue-500/30 rounded-full blur-xl" />
                                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#050505] shadow-2xl bg-black/5 dark:bg-white/[0.03]">
                                        {!imgError ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                onError={() => setImgError(true)}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-3xl font-bold text-gray-600 dark:text-white/60">
                                                {getInitials(member.name)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-500/20 border border-violet-500/30 text-violet-300 backdrop-blur-xl">
                                        {member.experience}
                                    </div>
                                </div>
                            </div>

                            {/* Name & Role */}
                            <div className="text-center space-y-3">
                                <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-600 dark:text-white/90">
                                    {member.name}
                                </h1>
                                <p className="text-lg font-medium text-violet-400">
                                    {member.role}
                                </p>
                            </div>

                            {/* Summary */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="mt-8 text-center text-lg text-gray-600 dark:text-white/45 max-w-3xl mx-auto leading-relaxed font-light"
                            >
                                {member.summary}
                            </motion.p>

                            {/* Skills */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="mt-10"
                            >
                                <div className="flex flex-wrap justify-center gap-2.5">
                                    {member.skills.map((skill, i) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6 + i * 0.05 }}
                                            className="px-4 py-2 rounded-full border border-black/10 dark:border-white/[0.08] bg-black/5 dark:bg-white/[0.03] text-sm font-medium text-gray-600 dark:text-white/50 hover:border-violet-500/30 hover:text-gray-600 dark:text-white/70 hover:bg-violet-500/[0.05] transition-all duration-300 cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="mt-8 grid lg:grid-cols-2 gap-6">
                    
                    {/* Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="glass p-8 sm:p-10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/[0.1] border border-violet-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-600 dark:text-white/90 tracking-tight">
                                Experience
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {member.timeline.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="relative">
                                        <div className="w-3 h-3 bg-violet-400 rounded-full mt-1.5 group-hover:scale-150 transition-transform duration-300" />
                                        {i !== member.timeline.length - 1 && (
                                            <div className="absolute left-1/2 top-6 w-px h-full bg-black/5 dark:bg-white/[0.06] -translate-x-1/2" />
                                        )}
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <span className="text-xs font-semibold text-violet-400 bg-violet-500/[0.1] border border-violet-500/20 px-3 py-1 rounded-full">
                                            {t.year}
                                        </span>
                                        <p className="mt-3 text-gray-600 dark:text-white/80 font-medium text-lg">
                                            {t.title}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="glass p-8 sm:p-10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/[0.1] border border-blue-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-600 dark:text-white/90 tracking-tight">
                                Projects
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {member.projects.map((project, i) => (
                                <motion.div
                                    key={project}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/[0.02] border border-black/10 dark:border-white/[0.05] hover:bg-black/5 dark:bg-white/[0.04] hover:border-black/10 dark:border-white/[0.1] transition-all duration-300">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                                        <p className="flex-1 text-gray-600 dark:text-white/70 font-medium">
                                            {project}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-8"
                >
                    <ProfileSocials socials={member.socials} />
                </motion.div>

            </div>
        </section>
    );
};

export default ProfileDetail;