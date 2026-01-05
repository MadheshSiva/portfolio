const Contact = () => {
  return (
    <section className="pt-32 pb-24 bg-[#f5f5f7] dark:bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-light tracking-tight">
          Let’s Work Together
        </h1>

        {/* Sub text */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Have a project in mind or need help with software, mobile, or AI solutions?
          We’d love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Email */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow">
            <h3 className="text-lg font-medium">Email</h3>
            <p className="mt-3 text-sm text-gray-500">
              Reach us anytime
            </p>
            <a
              href="mailto:support@example.com"
              className="mt-6 inline-block text-blue-600 font-medium"
            >
              support@example.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow">
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="mt-3 text-sm text-gray-500">
              Mon–Fri · 10am–6pm
            </p>
            <a
              href="tel:+919999999999"
              className="mt-6 inline-block text-blue-600 font-medium"
            >
              +91 99999 99999
            </a>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow">
            <h3 className="text-lg font-medium">Location</h3>
            <p className="mt-3 text-sm text-gray-500">
              Based in India · Working Worldwide
            </p>
            <span className="mt-6 inline-block text-gray-700 dark:text-gray-300">
              Remote Friendly 🌍
            </span>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-24">
          <h2 className="text-2xl font-light">
            Ready to start your project?
          </h2>

          <a
            href="mailto:support@example.com"
            className="inline-block mt-8 px-8 py-4 rounded-full
                       bg-black text-white text-sm
                       hover:opacity-90 transition"
          >
            Email Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
