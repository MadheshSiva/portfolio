import { useState } from 'react';
import prakashPortfolio from '../assets/prakash-portfolio.png';
import fitPartner from '../assets/fit-partner.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "Web Development",
      description: "A modern, responsive portfolio website showcasing work and skills with smooth animations and elegant design.",
      image: prakashPortfolio,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveLink: "https://prakash-portfolio-two.vercel.app/",
      github: "",
      featured: true
    },
    {
      id: 2,
      title: "Fit Partner - Gym Website",
      category: "Web Development",
      description: "A comprehensive gym and fitness website featuring membership plans, class schedules, trainer profiles, and online booking.",
      image: fitPartner,
      technologies: ["React", "Node.js", "Tailwind CSS", "API Integration"],
      liveLink: "https://fitapartner-frontend-pg5q.vercel.app/",
      github: "",
      featured: true
    }
  ];

  const categories = ['All', 'Web Development', 'App Development', 'UI/UX Design', 'AI/ML'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="pt-32 pb-24 bg-[#050505] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium mb-4 block">
            Our Work
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90">
            Our <span className="animated-gradient-text">portfolio</span>
          </h1>
          <p className="mt-8 text-lg text-white/45 leading-relaxed font-light">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter */}
        <div className="mt-16 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-white text-black'
                  : 'bg-white/[0.03] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass group overflow-hidden">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23111" width="400" height="300"/><text x="50%" y="50%" font-family="Arial" font-size="18" fill="%23333" text-anchor="middle" dy=".3em">Project Image</text></svg>';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/10 text-xs font-medium text-white/70">
                    Featured
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-white/40 mb-4">
                  {project.category}
                </span>

                <h3 className="text-2xl font-semibold text-white/90 tracking-tight mb-3 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-white/40 leading-relaxed font-light mb-6 group-hover:text-white/50 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase rounded-full border border-white/[0.06] bg-white/[0.03] text-white/35"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.02] transition-all duration-500"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-full border border-white/[0.1] text-white/60 font-medium text-sm hover:bg-white/[0.05] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-16 text-center py-20">
            <svg className="w-16 h-16 mx-auto text-white/15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-xl font-medium text-white/60">
              No projects found
            </h3>
            <p className="mt-2 text-white/30 font-light">
              We haven't completed any {activeFilter} projects yet.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-32">
          <div className="glass p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] to-blue-500/[0.03] pointer-events-none" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="block text-5xl font-bold tracking-tighter text-white/90 mb-2">{projects.length}+</span>
                <span className="text-sm tracking-[0.15em] uppercase text-white/35 font-medium">Projects Completed</span>
              </div>
              <div>
                <span className="block text-5xl font-bold tracking-tighter text-white/90 mb-2">100%</span>
                <span className="text-sm tracking-[0.15em] uppercase text-white/35 font-medium">Client Satisfaction</span>
              </div>
              <div>
                <span className="block text-5xl font-bold tracking-tighter text-white/90 mb-2">2+</span>
                <span className="text-sm tracking-[0.15em] uppercase text-white/35 font-medium">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white/90 mb-5">
            Have a project in mind?
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto font-light mb-10">
            Let's work together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black rounded-full font-semibold text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.03] transition-all duration-500"
            >
              Start a Project
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="/services"
              className="btn-glow px-10 py-5 rounded-full font-medium text-sm text-white border border-white/15 hover:border-transparent transition-all duration-500 text-center"
            >
              View Services
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;