const CaseStudies = () => {
  return (
    <section className="pt-32 pb-24 bg-white dark:bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-light mb-16">
          Case Studies
        </h1>

        <div className="grid gap-16 md:grid-cols-2">
          {[
            {
              title: "Travel Booking Platform",
              desc: "Built a scalable travel platform with real-time pricing and AI recommendations."
            },
            {
              title: "AI Customer Support System",
              desc: "Designed an AI chatbot handling 80% of customer queries automatically."
            }
          ].map(cs => (
            <div key={cs.title}>
              <h3 className="text-xl font-medium">{cs.title}</h3>
              <p className="mt-4 text-gray-600">{cs.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
