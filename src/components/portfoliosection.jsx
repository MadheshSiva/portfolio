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
      description: "A modern, responsive portfolio website showcasing my work and skills with smooth animations and an elegant design.",
      image: prakashPortfolio,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveLink: "https://prakash-portfolio-two.vercel.app/",
      github: "", // Add if available
      featured: true
    },
    {
      id: 2,
      title: "Fit Partner - Gym Website",
      category: "Web Development",
      description: "A comprehensive gym and fitness website featuring membership plans, class schedules, trainer profiles, and online booking system.",
      image: fitPartner,
      technologies: ["React", "Node.js", "Tailwind CSS", "API Integration"],
      liveLink: "https://fitapartner-frontend-pg5q.vercel.app/",
      github: "", // Add if available
      featured: true
    }
  ];

  const categories = ['All', 'Web Development', 'App Development', 'UI/UX Design', 'AI/ML'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="pt-32 pb-24 bg-[#f5f5f7] dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-700 dark:text-white">
            Our Portfolio
          </h1>
          <p className="mt-8 text-lg text-gray-500 dark:text-gray-300 leading-relaxed">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23f3f4f6" width="400" height="300"/><text x="50%" y="50%" font-family="Arial" font-size="18" fill="%239ca3af" text-anchor="middle" dy=".3em">Project Image</text></svg>';
                  }}
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-8">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium text-center hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-20 h-20 mx-auto text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              No projects found
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We haven't completed any {activeFilter} projects yet.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-32 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold">{projects.length}+</div>
              <div className="mt-2 text-indigo-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold">100%</div>
              <div className="mt-2 text-indigo-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold">2+</div>
              <div className="mt-2 text-indigo-100">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch with us today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-indigo-600 text-white font-medium
                       hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="px-8 py-4 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-medium
                       hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
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