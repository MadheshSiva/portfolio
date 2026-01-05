import ProfileSection from "../components/ProfileSection";
import imagesBg from "../assets/hero.png"

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={imagesBg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <p className="text-xs tracking-[0.3em] text-white/60 mb-6">
            SIMPLICITY · PERFORMANCE · DESIGN
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
            Crafting Digital <br /> Experiences
          </h1>

          <p className="mt-8 max-w-xl text-white/70 text-base leading-relaxed">
            We build modern software products with clarity, performance,
            and long-term scalability at the core.
          </p>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <ProfileSection />

      {/* CAPABILITIES */}
      {/* <section className="py-32 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            [
              "Web Development",
              "Fast, secure, and SEO‑ready web applications built with modern stacks, optimized for conversions and a smooth user experience across all devices."
            ],
            [
              "Mobile App Development",
              "High‑performance cross‑platform apps using React Native, delivering a native‑like experience, offline support, and robust scalability for Android and iOS."
            ],
            [
              "ML & AI Chatbot Development",
              "Custom AI agents and chatbots that automate support, streamline workflows, and provide personalized, 24/7 customer interactions across your digital channels."
            ]
          ].map(([title, desc]) => (
            <div key={title}>
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section> */}


      {/* TECH STACK */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-900 overflow-hidden">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            TECH STACK
          </div>
        </div>
        <div className="relative">
          <div className="flex w-max animate-marquee gap-16 text-sm tracking-tight text-gray-500 dark:text-gray-400">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-neutral-900" />
            {[
              "React",
              "React Native",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
              "Python",
              "Machine Learning",
              "AI Chatbots",
              // duplicate for smooth looping
              "React",
              "React Native",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
              "Python",
              "Machine Learning",
              "AI Chatbots"
            ].map((t, i) => (
              <span key={i} className="whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-neutral-900" />

        </div>
      </section>


      {/* CTA */}
      <section className="py-32 bg-black text-white text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">
          Let’s build something meaningful
        </h2>
        <p className="mt-6 text-white/60">
          Tell us about your idea. We’ll take care of the engineering.
        </p>

        <a
          href="/contact"
          className="inline-block mt-10 px-10 py-4 bg-white text-black rounded-full text-sm font-medium"
        >
          Start a Project
        </a>
      </section>
    </>
  );
};

export default Home;
