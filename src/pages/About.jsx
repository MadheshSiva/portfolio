const About = () => {
  return (
    <section className="pt-32 pb-24 bg-[#f5f5f7] dark:bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header with gradient accent */}
        <div className="text-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-700 dark:text-white">
              About Us
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300 leading-relaxed">
              We are a software and AI development team focused on building
              reliable, scalable, and thoughtfully designed digital products.
            </p>
          </div>
        </div>

        {/* Mission Section with card */}
        <div className="mt-32">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
              Our Mission
            </h2>

            <p className="mt-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Our mission is to help businesses turn ideas into dependable
              software solutions. We focus on clarity, performance, and
              long-term value rather than short-term trends.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart - Enhanced cards */}
        <div className="mt-32">
          <h2 className="text-3xl font-semibold tracking-tight text-center text-gray-900 dark:text-white mb-16">
            What Sets Us Apart
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-900">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Engineering First
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We prioritize clean architecture, scalability, and performance
                from day one.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-900">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Human-Centered Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every product is designed with real users in mind, not just
                technical requirements.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Long-Term Partnership
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We work as an extension of your team, supporting growth beyond
                launch.
              </p>
            </div>

          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Our Experience
            </h2>

            <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our team consists of experienced engineers and AI specialists who
              have worked on web platforms, mobile applications, automation
              systems, and AI-powered products across multiple industries.
            </p>
          </div>
        </div>

        {/* CTA Section with enhanced styling */}
        <div className="mt-32 text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-semibold text-white">
              Want to learn more about our work?
            </h2>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/team"
                className="px-8 py-4 rounded-full bg-white text-indigo-600 font-medium
                         hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Meet the Team
              </a>

              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-transparent text-white border-2 border-white font-medium
                         hover:bg-white hover:text-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;