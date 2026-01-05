const TeamGridSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-neutral-900 rounded-2xl p-8
                     shadow animate-pulse"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 dark:bg-neutral-800" />
          <div className="mt-6 h-4 bg-gray-200 dark:bg-neutral-800 rounded w-3/4 mx-auto" />
          <div className="mt-3 h-3 bg-gray-200 dark:bg-neutral-800 rounded w-1/2 mx-auto" />
        </div>
      ))}
    </div>
  );
};

export default TeamGridSkeleton;
