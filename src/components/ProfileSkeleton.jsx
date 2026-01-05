const ProfileSkeleton = () => {
  return (
    <section className="pt-32 pb-24 bg-[#f5f5f7] dark:bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-6 animate-pulse">

        {/* Avatar */}
        <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-neutral-800 mx-auto" />

        {/* Name */}
        <div className="mt-8 h-6 w-48 bg-gray-200 dark:bg-neutral-800 rounded mx-auto" />

        {/* Role */}
        <div className="mt-4 h-4 w-40 bg-gray-200 dark:bg-neutral-800 rounded mx-auto" />

        {/* Experience */}
        <div className="mt-2 h-3 w-28 bg-gray-200 dark:bg-neutral-800 rounded mx-auto" />

        {/* Summary */}
        <div className="mt-12 space-y-3 max-w-2xl mx-auto">
          <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded" />
          <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded" />
          <div className="h-4 w-3/4 bg-gray-200 dark:bg-neutral-800 rounded" />
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <div className="h-5 w-32 bg-gray-200 dark:bg-neutral-800 rounded mb-6" />

          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-6">
                <div className="h-4 w-24 bg-gray-200 dark:bg-neutral-800 rounded" />
                <div className="h-4 w-48 bg-gray-200 dark:bg-neutral-800 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-20">
          <div className="h-5 w-40 bg-gray-200 dark:bg-neutral-800 rounded mb-6" />

          <ul className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <li
                key={i}
                className="h-4 w-64 bg-gray-200 dark:bg-neutral-800 rounded"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileSkeleton;
