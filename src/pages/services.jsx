const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build powerful, scalable web applications with modern frameworks. From responsive websites to complex platforms.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      features: ["React & Next.js", "Node.js & APIs", "Database Design", "Cloud Deployment"]
    },
    {
      title: "App Development",
      description: "Create seamless mobile experiences for iOS and Android. Native performance with cross-platform efficiency.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ["React Native", "iOS & Android", "App Store Launch", "Maintenance"]
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive, user-centered interfaces that delight users and drive engagement.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: ["User Research", "Wireframing", "Visual Design", "Prototyping"]
    },
    {
      title: "AI / ML Solutions",
      description: "Integrate intelligent conversational AI into your products. Custom chatbots powered by advanced language models.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["GPT Integration", "Custom Training", "Multi-platform", "Analytics"]
    }
  ];

  const processSteps = [
    { num: "01", title: "Discovery", desc: "We understand your goals, challenges, and vision." },
    { num: "02", title: "Design", desc: "Create intuitive designs and technical architecture." },
    { num: "03", title: "Development", desc: "Build with best practices and regular updates." },
    { num: "04", title: "Launch", desc: "Deploy and provide ongoing support and maintenance." },
  ];

  return (
    <section className="pt-32 pb-24 bg-[#050505] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium mb-4 block">
            What We Offer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90">
            Our <span className="animated-gradient-text">services</span>
          </h1>
          <p className="mt-8 text-lg text-white/45 leading-relaxed font-light">
            End-to-end digital solutions tailored to your business needs. 
            From concept to deployment, we bring your ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass p-10 group cursor-default">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-8 text-white/50 group-hover:text-violet-400 group-hover:border-violet-500/30 group-hover:bg-violet-500/[0.08] transition-all duration-500">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold text-white/90 mb-4 tracking-tight group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/40 leading-relaxed mb-8 font-light group-hover:text-white/55 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-[11px] font-medium tracking-wide uppercase rounded-full border border-white/[0.06] bg-white/[0.03] text-white/35 group-hover:border-violet-500/20 group-hover:text-white/50 transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-32">
          <div className="glass p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] to-blue-500/[0.02] pointer-events-none" />
            <div className="relative">
              <div className="text-center mb-16">
                <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium mb-4 block">
                  How We Work
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white/90">
                  Our Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {processSteps.map((step, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:border-violet-500/30 group-hover:bg-violet-500/[0.08] transition-all duration-500">
                      <span className="text-lg font-mono font-bold text-violet-400">{step.num}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white/90 mb-2 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-sm text-white/40 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <div className="glass p-14 sm:p-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/[0.04] blur-[100px] rounded-full" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white/90 mb-5">
                Ready to start your project?
              </h2>
              <p className="text-white/40 text-lg mb-10 max-w-2xl mx-auto font-light">
                Let's discuss how we can help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black rounded-full font-semibold text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.03] transition-all duration-500"
                >
                  Get Started
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a
                  href="/portfolio"
                  className="btn-glow px-10 py-5 rounded-full font-medium text-sm text-white border border-white/15 hover:border-transparent transition-all duration-500 text-center"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;