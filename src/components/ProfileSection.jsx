import TeamCard from "./TeamCard";
import { teamMembers } from "../data/teamData";
import fitPartnerImage from "../assets/fit-partner.png";
import prakashPortfolioImage from "../assets/prakash-portfolio.png";

const ProfileSection = () => {
    const departments = [
        {
            icon: "🎨",
            title: "UI/UX Design",
            description: "Creating intuitive and visually stunning user experiences that blend aesthetics with functionality",
            gradient: "from-pink-500 to-rose-500"
        },
        {
            icon: "💻",
            title: "Web Development",
            description: "Building responsive, high-performance websites with modern frameworks and cutting-edge technologies",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: "📱",
            title: "Mobile App Development",
            description: "Crafting native and cross-platform mobile applications that deliver seamless user experiences",
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            icon: "🤖",
            title: "AI/ML Chatbots",
            description: "Developing intelligent conversational AI solutions that enhance customer engagement and support",
            gradient: "from-emerald-500 to-teal-500"
        }
    ];

    const projects = [
        {
            title: "Prakash Portfolio",
            description: "A comprehensive professional portfolio website featuring detailed sections for About, Objectives, Skills, and Educational background. Built with a practical, user-focused design that enables seamless communication through an integrated contact form. Visitors can connect directly with Prakash by filling out the 'Get In Touch' form, which automatically sends inquiries to his personal email, ensuring prompt professional responses.",
            url: "https://prakash-portfolio-two.vercel.app/",
            tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "Email Integration", "Vercel"],
            category: "Portfolio Website",
            image: prakashPortfolioImage
        },
        {
            title: "Fit Partner",
            description: "A comprehensive gym and fitness management platform delivering end-to-end solutions for modern fitness centers. Features include location-based services, membership management, class scheduling, trainer profiles, and real-time availability tracking. The platform integrates seamless user registration, personalized workout plans, and a sophisticated booking system, creating an all-in-one ecosystem for gym owners and fitness enthusiasts.",
            url: "https://fitapartner-frontend-pg5q.vercel.app/",
            tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "REST API", "Vercel"],
            category: "Fitness Platform",
            image: fitPartnerImage
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Meet Our Team
                        </span>
                    </div>
                    <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                        The Minds Behind Pick Pixel
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        A passionate collective of designers, developers, and innovators dedicated to transforming ideas into exceptional digital experiences.
                    </p>
                </div>

                {/* Expertise Areas */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Our Expertise
                    </h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {departments.map((dept, index) => (
                            <div
                                key={index}
                                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105"
                            >
                                {/* Gradient Border Effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                                        {dept.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                        {dept.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {dept.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mb-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">2+</div>
                            <div className="text-sm md:text-base opacity-90">Projects Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">4</div>
                            <div className="text-sm md:text-base opacity-90">Team Members</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                            <div className="text-sm md:text-base opacity-90">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-sm md:text-base opacity-90">Support Available</div>
                        </div>
                    </div>
                </div>

                {/* Featured Projects Section - Updated with smaller, centered cards */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                        Featured Projects
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Showcasing our latest work that demonstrates our commitment to quality and innovation
                    </p>
                    
                    {/* Centered container with max-width for smaller cards */}
                    <div className="w-full">
                        <div className="w-4/6 justify-center grid gap-6 grid-cols-1 md:grid-cols-2">
                            {projects.map((project, index) => (
                                <div key={index} className="flex justify-center "> 
                                 <a
                                    
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105"
                                >
                                    {/* Reduced height image container */}
                                    <div className="h-32 relative overflow-hidden">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                        />
                                        <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
                                            {project.category}
                                        </div>
                                    </div>
                                    
                                    {/* Compact content section */}
                                    <div className="p-5">
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                            {project.title}
                                        </h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                        
                                        {/* Technologies - Compact */}
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {project.tech.slice(0, 4).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 4 && (
                                                <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                                                    +{project.tech.length - 4}
                                                </span>
                                            )}
                                        </div>
                                        
                                        {/* View Project Link */}
                                        <div className="flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-1 transition-all duration-200">
                                            View Project
                                            <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Members Grid */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                        Meet the Team
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Each member brings unique expertise and passion to create innovative solutions that exceed expectations.
                    </p>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {teamMembers.slice(0, 4).map(member => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Work With Us?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Let's collaborate to bring your digital vision to life with creativity, precision, and innovation.
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        Start Your Project
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;