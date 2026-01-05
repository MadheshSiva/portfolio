const TeamHero = () => {
  return (
    <section className="relative py-28 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 opacity-90" />

      <div className="relative z-10 max-w-4xl mx-auto text-white px-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Meet the Team Behind Your Product
        </h1>
        <p className="mt-6 text-lg opacity-90">
          A modern software & AI engineering team delivering
          scalable and secure digital solutions.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;
