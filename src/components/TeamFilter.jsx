const TeamFilter = ({ active, setActive }) => {
  const tabs = ["All", "Engineering", "AI"];

  return (
    <div className="flex justify-center gap-3 sticky top-20 z-20
                    bg-white/70 dark:bg-black/40 backdrop-blur
                    p-3 rounded-full shadow-md max-w-fit mx-auto">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-5 py-2 rounded-full text-sm transition
            ${active === tab
              ? "bg-black text-white"
              : "hover:bg-black/10 dark:hover:bg-white/10"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TeamFilter;
