import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

/* Initials helper */
const getInitials = (name) =>
  name
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TeamCard = ({ member }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -6 }}
      onClick={() => navigate(`/profile/${member.id}`)}
      className="cursor-pointer bg-white dark:bg-neutral-900 rounded-2xl p-8
                 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition"
    >
      {/* Avatar */}
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 dark:bg-neutral-800">

        {isVisible && !error && (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={`w-full h-full object-cover transition-all duration-700
              ${loaded ? "blur-0 scale-100 opacity-100" : "blur-md scale-105 opacity-0"}`}
          />
        )}

        {(error || !isVisible) && (
          <div className="w-full h-full flex items-center justify-center
                          text-neutral-600 text-xl font-medium">
            {getInitials(member.name)}
          </div>
        )}
      </div>

      <h3 className="mt-6 text-lg font-medium text-center">
        {member.name}
      </h3>

      <p className="text-center text-sm text-gray-500">
        {member.role}
      </p>
    </motion.div>
  );
};

export default TeamCard;
