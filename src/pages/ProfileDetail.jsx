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
        <section className="pt-24 pb-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/10 min-h-screen">
            <div className="max-w-6xl mx-auto px-6">

                {/* Decorative Background Elements */}
                <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>

                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Profile Card */}
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5 border border-gray-200/50 dark:border-gray-800/50 overflow-hidden">
                        
                        {/* Header with Gradient */}
                        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 h-48">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
                        </div>

                        {/* Profile Content */}
                        <div className="relative px-8 pb-12">
                            {/* Avatar */}
                            <div className="flex justify-center -mt-20 mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-60"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-40 h-40 rounded-full object-cover border-8 border-white dark:border-gray-900 shadow-2xl"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                                        {member.experience}
                                    </div>
                                </div>
                            </div>

                            {/* Name and Role */}
                            <div className="text-center space-y-3">
                                <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                                    {member.name}
                                </h1>
                                <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                                    {member.role}
                                </p>
                            </div>

                            {/* Summary */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="mt-8 text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
                                <div className="flex flex-wrap justify-center gap-3">
                                    {member.skills.map((skill, i) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6 + i * 0.05 }}
                                            className="px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
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
                <div className="mt-12 grid lg:grid-cols-2 gap-8">
                    
                    {/* Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-800/50 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
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
                                        <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mt-1.5 group-hover:scale-150 transition-transform duration-300"></div>
                                        {i !== member.timeline.length - 1 && (
                                            <div className="absolute left-1/2 top-6 w-0.5 h-full bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 -translate-x-1/2"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
                                            {t.year}
                                        </span>
                                        <p className="mt-3 text-gray-800 dark:text-gray-200 font-medium text-lg">
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
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-800/50 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Projects
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {member.projects.map((project, i) => (
                                <motion.div
                                    key={project}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-950/30 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                                        <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                                        <p className="flex-1 text-gray-700 dark:text-gray-300 font-medium">
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
                    className="mt-12"
                >
                    <ProfileSocials socials={member.socials} />
                </motion.div>

            </div>
        </section>
    );
};

export default ProfileDetail;