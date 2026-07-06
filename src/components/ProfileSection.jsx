import React, { useEffect, useRef } from "react";
import TeamCard from "./TeamCard";
import { teamMembers } from "../data/teamData";
import fitPartnerImage from "../assets/fit-partner.png";
import prakashPortfolioImage from "../assets/prakash-portfolio.png";
import paavaiImage from "../assets/paavai.jpg";
import momentImage from "../assets/moment.jpg";

/* ─── Scroll-reveal hook ─── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── Data ─── */
const departments = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "UI/UX Design",
    description: "Intuitive, stunning interfaces that blend aesthetics with functionality.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Development",
    description: "Responsive, high-performance websites with modern frameworks.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Apps",
    description: "Native and cross-platform apps with seamless experiences.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI / ML",
    description: "Intelligent chatbots and automation for modern businesses.",
  },
];

const projects = [
  {
    title: "Paavai Website",
    description:
      "A modern, responsive website built with Next.js and TypeScript.",
    url: "https://paavaiwebsite.vercel.app/",
    tech: ["Next.js", "TypeScript", "HTML", "CSS"],
    category: "Web Development",
    image: paavaiImage,
  },
  {
    title: "Moment Galleri",
    description:
      "A beautiful gallery application built with Next.js and TypeScript.",
    url: "https://moment-galleri.vercel.app/",
    tech: ["Next.js", "TypeScript", "HTML", "CSS"],
    category: "Web Development",
    image: momentImage,
  },
  {
    title: "Prakash Portfolio",
    description:
      "A professional portfolio with integrated contact form, About, Skills, and Education sections. Sends inquiries directly to email.",
    url: "https://prakash-portfolio-two.vercel.app/",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "Email Integration"],
    category: "Portfolio Website",
    image: prakashPortfolioImage,
  },
  {
    title: "Fit Partner",
    description:
      "A gym management platform with memberships, scheduling, trainer profiles, location services, and personalized workout plans.",
    url: "https://fitapartner-frontend-pg5q.vercel.app/",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "REST API"],
    category: "Fitness Platform",
    image: fitPartnerImage,
  },
];

/* ═══════════════════════════════════════════════
   PROFILE SECTION
   ═══════════════════════════════════════════════ */
const ProfileSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ────── Section Header ────── */}
        <Reveal className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            The minds behind{" "}
            <span className="animated-gradient-text">Truvix Co Tech</span>
          </h2>
          <p className="text-gray-600 dark:text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A passionate collective of designers, developers, and innovators
            dedicated to transforming ideas into exceptional digital experiences.
          </p>
        </Reveal>

        {/* ────── Expertise Grid ────── */}
        <div className="mb-24">
          <Reveal className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-600 dark:text-white/90">
              Our Expertise
            </h3>
          </Reveal>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="glass p-8 h-full group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] flex items-center justify-center mb-6 text-gray-600 dark:text-white/50 group-hover:text-violet-400 group-hover:border-violet-500/30 group-hover:bg-violet-500/[0.08] transition-all duration-500">
                    {dept.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-600 dark:text-white/90 mb-3 tracking-tight group-hover:text-gray-900 dark:text-white transition-colors duration-300">
                    {dept.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-white/40 font-light leading-relaxed group-hover:text-gray-600 dark:text-white/55 transition-colors duration-300">
                    {dept.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ────── Stats ────── */}
        <Reveal>
          <div className="glass mb-24 p-10 sm:p-14 relative overflow-hidden">
            {/* Background gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] to-blue-500/[0.04] pointer-events-none" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "4+", label: "Projects Delivered" },
                { value: "4", label: "Team Members" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div key={i}>
                  <span className="block text-4xl sm:text-5xl font-bold tracking-tighter text-gray-600 dark:text-white/90 mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm tracking-[0.15em] uppercase text-gray-600 dark:text-white/35 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ────── Featured Projects ────── */}
        <div className="mb-24">
          <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
                Our Work
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter text-gray-600 dark:text-white/90">
                Featured Projects
              </h3>
              <p className="text-gray-600 dark:text-white/40 mt-3 max-w-lg font-light">
                Showcasing our latest work — quality, innovation, and impact.
              </p>
            </div>
            <a
              href="/portfolio"
              className="text-sm font-medium text-gray-600 dark:text-white/40 hover:text-gray-900 dark:text-white border-b border-black/10 dark:border-white/15 hover:border-black/10 dark:border-white/40 pb-1 transition-all duration-300 shrink-0"
            >
              View All Projects ↗
            </a>
          </Reveal>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={i} delay={i * 120}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group block overflow-hidden h-full"
                >
                  {/* Image */}
                  <div className="h-52 sm:h-64 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23111" width="400" height="300"/><text x="50%" y="50%" font-family="Arial" font-size="18" fill="%23333" text-anchor="middle" dy=".3em">Project Image</text></svg>';
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/[0.08] backdrop-blur-xl border border-black/10 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-white/70">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h4 className="text-xl font-semibold text-gray-600 dark:text-white/90 mb-3 tracking-tight group-hover:text-gray-900 dark:text-white transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-white/40 font-light leading-relaxed mb-5 line-clamp-2 group-hover:text-gray-600 dark:text-white/50 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.slice(0, 4).map((tech, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase rounded-full border border-black/10 dark:border-white/[0.06] bg-black/5 dark:bg-white/[0.03] text-gray-600 dark:text-white/35 group-hover:border-violet-500/20 group-hover:text-gray-600 dark:text-white/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2.5 py-1 text-[10px] font-medium tracking-wide rounded-full border border-black/10 dark:border-white/[0.06] bg-black/5 dark:bg-white/[0.03] text-gray-600 dark:text-white/30">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* View link */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-white/25 group-hover:text-violet-400 transition-all duration-300">
                      View Project
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ────── Team Members ────── */}
        <div className="mb-24">
          <Reveal className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
              The People
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter text-gray-600 dark:text-white/90 mb-4">
              Meet the Team
            </h3>
            <p className="text-gray-600 dark:text-white/40 max-w-xl mx-auto font-light">
              Each member brings unique expertise and passion to create
              innovative solutions that exceed expectations.
            </p>
          </Reveal>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.slice(0, 4).map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>

        {/* ────── CTA ────── */}
        <Reveal className="text-center">
          <div className="glass p-14 sm:p-20 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/[0.04] blur-[100px] rounded-full" />
            </div>
            <div className="relative">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-gray-600 dark:text-white/90 mb-5">
                Ready to work with us?
              </h3>
              <p className="text-gray-600 dark:text-white/40 mb-10 max-w-lg mx-auto font-light text-lg">
                Let's collaborate to bring your digital vision to life with
                creativity, precision, and innovation.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-10 py-5 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full font-semibold text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.03] transition-all duration-500"
              >
                Start Your Project
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProfileSection;