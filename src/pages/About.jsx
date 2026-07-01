const About = () => {
  return (
    <section className="pt-32 pb-24 bg-gray-50 dark:bg-[#050505] min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[120px]"></div>
          </div>
          <div className="relative">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-600 dark:text-white/90">
              About <span className="animated-gradient-text">Pick Pixel</span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600 dark:text-white/45 leading-relaxed font-light">
              We are a software and AI development team focused on building
              reliable, scalable, and thoughtfully designed digital products.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-32">
          <div className="glass max-w-4xl mx-auto p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] to-blue-500/[0.03] pointer-events-none" />
            <div className="relative text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
                Why We Exist
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-gray-600 dark:text-white/90 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-white/50 leading-relaxed font-light max-w-2xl mx-auto">
                Our mission is to help businesses turn ideas into dependable
                software solutions. We focus on clarity, performance, and
                long-term value rather than short-term trends.
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
              Our Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-gray-600 dark:text-white/90">
              What sets us apart
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Engineering First",
                desc: "We prioritize clean architecture, scalability, and performance from day one.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Human-Centered Design",
                desc: "Every product is designed with real users in mind, not just technical requirements.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Long-Term Partnership",
                desc: "We work as an extension of your team, supporting growth beyond launch.",
              },
            ].map((item, i) => (
              <div key={i} className="glass p-8 sm:p-10 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] flex items-center justify-center mb-6 text-gray-600 dark:text-white/50 group-hover:text-violet-400 group-hover:border-violet-500/30 group-hover:bg-violet-500/[0.08] transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-600 dark:text-white/90 mb-4 tracking-tight group-hover:text-gray-900 dark:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-white/40 font-light leading-relaxed group-hover:text-gray-600 dark:text-white/55 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-600 dark:text-white/30 font-medium mb-4 block">
              Our Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-gray-600 dark:text-white/90 mb-8">
              Our Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-white/45 leading-relaxed font-light">
              Our team consists of experienced engineers and AI specialists who
              have worked on web platforms, mobile applications, automation
              systems, and AI-powered products across multiple industries.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <div className="glass p-14 sm:p-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/[0.04] blur-[100px] rounded-full" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-gray-600 dark:text-white/90 mb-5">
                Want to learn more about our work?
              </h2>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/team"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full font-semibold text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.03] transition-all duration-500"
                >
                  Meet the Team
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a
                  href="/contact"
                  className="btn-glow px-8 py-4 rounded-full font-medium text-sm text-gray-900 dark:text-white border border-black/10 dark:border-white/15 hover:border-transparent transition-all duration-500 text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;