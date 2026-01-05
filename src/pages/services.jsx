const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build powerful, scalable web applications with modern frameworks and technologies. From responsive websites to complex web platforms.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "indigo",
      features: ["React & Next.js", "Node.js & APIs", "Database Design", "Cloud Deployment"]
    },
    {
      title: "App Development",
      description: "Create seamless mobile experiences for iOS and Android. Native performance with cross-platform efficiency.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "purple",
      features: ["React Native", "iOS & Android", "App Store Launch", "Maintenance & Updates"]
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive, user-centered interfaces that delight users and drive engagement. From wireframes to high-fidelity prototypes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "pink",
      features: ["User Research", "Wireframing", "Visual Design", "Prototyping"]
    },
    {
      title: "AI/ML Chatbot",
      description: "Integrate intelligent conversational AI into your products. Custom chatbots powered by advanced language models.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "blue",
      features: ["GPT Integration", "Custom Training", "Multi-platform", "Analytics Dashboard"]
    }
  ];

  const colorClasses = {
    indigo: {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-200 dark:border-indigo-800",
      hoverBorder: "hover:border-indigo-300 dark:hover:border-indigo-700",
      badge: "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
    },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800",
      hoverBorder: "hover:border-purple-300 dark:hover:border-purple-700",
      badge: "bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
    },
    pink: {
      bg: "bg-pink-100 dark:bg-pink-900/30",
      text: "text-pink-600 dark:text-pink-400",
      border: "border-pink-200 dark:border-pink-800",
      hoverBorder: "hover:border-pink-300 dark:hover:border-pink-700",
      badge: "bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300"
    },
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
      hoverBorder: "hover:border-blue-300 dark:hover:border-blue-700",
      badge: "bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
    }
  };

  return (
    <section className="pt-32 pb-24 bg-[#f5f5f7] dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-700 dark:text-white">
            Our Services
          </h1>
          <p className="mt-8 text-lg text-gray-500 dark:text-gray-300 leading-relaxed">
            We deliver end-to-end digital solutions tailored to your business needs. 
            From concept to deployment, we bring your ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-lg hover:shadow-2xl 
                           transition-all duration-300 border-2 ${colors.border} ${colors.hoverBorder}
                           transform hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} mb-6`}>
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${colors.badge}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-16">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Discovery
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We understand your goals, challenges, and vision
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Design
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Create intuitive designs and technical architecture
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 dark:bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Development
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Build with best practices and regular updates
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Launch
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deploy and provide ongoing support and maintenance
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to start your project?
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our expertise
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-white text-indigo-600 font-medium
                         hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </a>
              <a
                href="/portfolio"
                className="px-8 py-4 rounded-full bg-transparent text-white border-2 border-white font-medium
                         hover:bg-white hover:text-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;