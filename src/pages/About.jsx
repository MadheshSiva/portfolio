const About = () => {
  return (
    <section className="pt-32 pb-24 bg-[#f5f5f7] dark:bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            About Us
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            We are a software and AI development team focused on building
            reliable, scalable, and thoughtfully designed digital products.
          </p>
        </div>

        {/* Mission */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-light tracking-tight">
            Our Mission
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Our mission is to help businesses turn ideas into dependable
            software solutions. We focus on clarity, performance, and
            long-term value rather than short-term trends.
          </p>
        </div>

        {/* What Sets Us Apart */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          <div>
            <h3 className="text-lg font-medium">
              Engineering First
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              We prioritize clean architecture, scalability, and performance
              from day one.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Human-Centered Design
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Every product is designed with real users in mind, not just
              technical requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Long-Term Partnership
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              We work as an extension of your team, supporting growth beyond
              launch.
            </p>
          </div>

        </div>

        {/* Experience */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-light tracking-tight">
            Our Experience
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Our team consists of experienced engineers and AI specialists who
            have worked on web platforms, mobile applications, automation
            systems, and AI-powered products across multiple industries.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-2xl font-light">
            Want to learn more about our work?
          </h2>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="/team"
              className="px-6 py-3 rounded-full border border-black
                         hover:bg-black hover:text-white transition"
            >
              Meet the Team
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-black text-white
                         hover:opacity-90 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
