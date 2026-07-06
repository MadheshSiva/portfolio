import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { motion } from "framer-motion";
import ThreeScene from "../components/ThreeScene";
import ProfileSection from "../components/ProfileSection";

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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Service Data ─── */
const services = [
  {
    title: "Web Development",
    desc: "Lightning-fast, SEO-optimized web applications built with modern frameworks. Pixel-perfect on every device.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    span: "lg:col-span-2",
  },
  {
    title: "Mobile Applications",
    desc: "Cross-platform apps with native performance. React Native at its finest.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    span: "lg:col-span-1",
  },
  {
    title: "SaaS Products",
    desc: "Scalable, subscription-ready platforms from idea to market launch.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    span: "lg:col-span-1",
  },
  {
    title: "AI Solutions",
    desc: "Custom ML models, AI agents, and intelligent chatbots that transform your business operations.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    span: "lg:col-span-2",
  },
  {
    title: "UI/UX Design",
    desc: "Research-driven, user-centric design systems with obsessive attention to every pixel.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    span: "lg:col-span-1",
  },
  {
    title: "Enterprise Software",
    desc: "Robust, secure, and scalable enterprise-grade platforms built for mission-critical operations.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    span: "lg:col-span-2",
  },
];

/* ─── Tech Stack Data ─── */
const techStack = [
  "React", "Next.js", "React Native", "Node.js", "TypeScript",
  "Python", "MongoDB", "PostgreSQL", "TensorFlow", "OpenAI",
  "AWS", "Docker", "Figma", "Three.js",
];

/* ─── Process Steps ─── */
const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We deep-dive into your vision, goals, and market to create a strategic foundation.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes, prototypes, and a polished UI/UX that captures your brand's essence.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Clean, scalable code with modern architecture. Agile sprints with full transparency.",
  },
  {
    num: "04",
    title: "Deploy & Scale",
    desc: "Launch with confidence. We handle CI/CD, monitoring, and ongoing optimization.",
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    text: "Truvix Co Tech transformed our digital presence. The attention to detail and performance is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
  },
  {
    text: "They didn't just build software — they crafted an experience. Our users love it.",
    author: "Michael Chen",
    role: "Founder, Nexus AI",
  },
  {
    text: "Our conversion rate doubled after the redesign. Absolutely world-class engineering.",
    author: "Emma Davis",
    role: "CMO, Elevate",
  },
  {
    text: "The AI chatbot they built handles 80% of our support tickets automatically. Game-changer.",
    author: "Raj Patel",
    role: "CTO, InnovatePay",
  },
  {
    text: "Truvix Co Tech transformed our digital presence. The attention to detail and performance is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
  },
  {
    text: "They didn't just build software — they crafted an experience. Our users love it.",
    author: "Michael Chen",
    role: "Founder, Nexus AI",
  },
  {
    text: "Our conversion rate doubled after the redesign. Absolutely world-class engineering.",
    author: "Emma Davis",
    role: "CMO, Elevate",
  },
  {
    text: "The AI chatbot they built handles 80% of our support tickets automatically. Game-changer.",
    author: "Raj Patel",
    role: "CTO, InnovatePay",
  },
];

/* ═══════════════════════════════════════════════════
   HOME COMPONENT
   ═══════════════════════════════════════════════════ */
const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white min-h-screen overflow-hidden">
      {/* ────────────── HERO ────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        {/* Three.js Background */}
        <ThreeScene />

        {/* Radial ambient glow */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/[0.04] blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.03] blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/[0.03] backdrop-blur-xl text-xs tracking-[0.25em] uppercase text-gray-600 dark:text-white/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Digital Product Studio
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-bold leading-[0.95] tracking-tighter mb-8"
          >
            We craft
            <br />
            <span className="animated-gradient-text">digital magic</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/50 font-light leading-relaxed mb-12"
          >
            From idea to launch — we design and engineer premium websites,
            mobile apps, SaaS platforms, and AI solutions that move industries forward.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/contact"
              className="group px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full font-semibold text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.03] transition-all duration-500"
            >
              Start a Project
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="/portfolio"
              className="btn-glow px-8 py-4 rounded-full font-medium text-sm text-gray-900 dark:text-white border border-black/10 dark:border-white/15 hover:border-transparent transition-all duration-500"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-black/10 dark:border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-black/5 dark:bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* ────────────── METRICS ────────────── */}
      <section className="relative z-10 py-24 px-6 border-y border-black/10 dark:border-white/[0.04]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: "4+", label: "Products Shipped" },
            { value: "99%", label: "Client Retention" },
            { value: "15K+", label: "Users Reached" },
            { value: "2+ Yrs", label: "In The Game" },
          ].map((stat, i) => (
            <RevealSection key={i} delay={i * 100} className="text-center">
              <span className="block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-600 dark:text-white/90 mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-600 dark:text-white/35 font-medium">
                {stat.label}
              </span>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ────────────── CAPABILITIES (Bento Grid) ────────────── */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Full-spectrum <span className="animated-gradient-text">capabilities</span>
            </h2>
            <p className="text-gray-600 dark:text-white/40 max-w-xl mx-auto text-lg font-light">
              End-to-end product development for ambitious teams.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <RevealSection key={i} delay={i * 80} className={`${s.span}`}>
                <div className="glass p-8 sm:p-10 h-full group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] flex items-center justify-center mb-8 text-gray-600 dark:text-white/70 group-hover:text-violet-400 group-hover:border-violet-500/30 group-hover:bg-violet-500/[0.08] transition-all duration-500">
                    {s.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4 text-gray-600 dark:text-white/90 group-hover:text-gray-900 dark:text-white transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/40 font-light leading-relaxed group-hover:text-gray-600 dark:text-white/55 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── PROCESS ────────────── */}
      <section className="relative z-10 py-32 px-6 border-y border-black/10 dark:border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
              How We Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
              A process built on <span className="animated-gradient-text">clarity</span>
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <RevealSection key={i} delay={i * 120}>
                <div className="glass p-8 h-full group cursor-default relative overflow-hidden">
                  {/* Subtle number */}
                  <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] group-hover:text-violet-500/[0.08] transition-colors duration-500 select-none">
                    {step.num}
                  </span>
                  <span className="text-sm font-mono text-violet-400 mb-4 block">{step.num}</span>
                  <h3 className="text-xl font-semibold tracking-tight mb-3 text-gray-600 dark:text-white/90">{step.title}</h3>
                  <p className="text-gray-600 dark:text-white/40 font-light leading-relaxed text-sm">{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── TECH STACK ────────────── */}
      <section className="relative z-10 py-24 overflow-hidden">
        <RevealSection className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium">
            Technologies We Master
          </span>
        </RevealSection>
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-12 sm:gap-16 text-lg sm:text-xl tracking-tight text-gray-600 dark:text-white/30 font-semibold">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="whitespace-nowrap hover:text-gray-600 dark:text-white/80 transition-colors duration-300 cursor-default">
                {t}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        </div>
      </section>

      {/* ────────────── TEAM PREVIEW ────────────── */}
      <div className="relative z-10">
        <ProfileSection />
      </div>

      {/* ────────────── TESTIMONIALS ────────────── */}
      <section className="relative z-10 py-32 px-6 overflow-hidden">
        <RevealSection className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
            Client Love
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Trusted by <span className="animated-gradient-text">leaders</span>
          </h2>
        </RevealSection>

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]" style={{ animationDuration: "50s" }}>
            {testimonials.map((t, i) => (
              <div key={i} className="glass w-[340px] sm:w-[400px] p-8 shrink-0 flex flex-col justify-between hover:transform-none">
                <p className="text-gray-600 dark:text-white/70 font-light text-base leading-relaxed mb-8">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 border border-black/10 dark:border-white/10 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-white/60">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600 dark:text-white/80 block">{t.author}</span>
                    <span className="text-xs text-gray-600 dark:text-white/35">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        </div>
      </section>

      {/* ────────────── CTA ────────────── */}
      <section className="relative z-10 py-32 sm:py-40 px-6 text-center">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/[0.04] blur-[120px] rounded-full" />
        </div>

        <RevealSection className="relative max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            Let's build
            <br />
            <span className="animated-gradient-text">something epic</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-white/40 font-light mb-14 max-w-xl mx-auto">
            Your next big idea deserves world-class engineering. Let's make it happen.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 px-10 sm:px-14 py-5 sm:py-6 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full font-semibold text-base sm:text-lg hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:scale-[1.03] transition-all duration-500"
          >
            Start Your Journey
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
        </RevealSection>
      </section>

      {/* ────────────── FOOTER ────────────── */}
      <footer className="relative z-10 border-t border-black/10 dark:border-white/[0.04] bg-gray-100 dark:bg-[#020202] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-2">
              <div className="flex items-center mb-8 group">
                <img src={logoImg} alt="Truvix Co Tech" className="h-24 md:h-28 lg:h-36 w-auto object-contain transition-all duration-300" />
              </div>
              <p className="text-gray-600 dark:text-white/40 max-w-sm leading-relaxed font-light">
                A digital product studio crafting premium websites, mobile apps, and AI solutions for ambitious teams worldwide.
              </p>
              {/* Social */}
              <div className="flex gap-3 mt-8">
                {["X", "Li", "Gh", "Ig"].map((s, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.06] flex items-center justify-center text-gray-600 dark:text-white/40 hover:text-gray-900 dark:text-white hover:bg-black/5 dark:bg-white/[0.08] hover:border-black/10 dark:border-white/15 transition-all duration-300 text-xs font-semibold">
                    {s}
                  </a>
                ))}
              </div>
            </div>
            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-600 dark:text-white/80 mb-6 tracking-wide">Company</h4>
              <ul className="space-y-4">
                {[
                  { label: "About", href: "/about" },
                  { label: "Team", href: "/team" },
                  { label: "Services", href: "/services" },
                  { label: "Case Studies", href: "/portfolio" },
                ].map((l, i) => (
                  <li key={i}>
                    <a href={l.href} className="text-sm text-gray-600 dark:text-white/35 hover:text-gray-900 dark:text-white transition-colors duration-300">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-600 dark:text-white/80 mb-6 tracking-wide">Connect</h4>
              <ul className="space-y-4">
                {[
                  { label: "Twitter (X)", href: "#" },
                  { label: "LinkedIn", href: "#" },
                  { label: "GitHub", href: "#" },
                  { label: "Contact Us", href: "/contact" },
                ].map((l, i) => (
                  <li key={i}>
                    <a href={l.href} className="text-sm text-gray-600 dark:text-white/35 hover:text-gray-900 dark:text-white transition-colors duration-300">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-black/10 dark:border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600 dark:text-white/25">© 2026 Truvix Co Tech. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-gray-600 dark:text-white/25">
              <a href="#" className="hover:text-gray-600 dark:text-white/60 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-600 dark:text-white/60 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
