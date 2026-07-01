import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

const getInitials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TeamCard = ({ member, index = 0 }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useInView({ threshold: 0.2 });
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.4 } }}
      onClick={() => navigate(`/profile/${member.id}`)}
      className="cursor-pointer group"
    >
      <div className="glass p-8 h-full flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative w-24 h-24 mb-6">
          {/* Glow ring behind avatar */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-125" />
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-violet-500/40 transition-colors duration-500 bg-white/[0.03]">
            {isVisible && !error && (
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  loaded
                    ? "blur-0 scale-100 opacity-100"
                    : "blur-md scale-105 opacity-0"
                }`}
              />
            )}
            {(error || !loaded) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-white/60 text-xl font-semibold">
                {getInitials(member.name)}
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <h3 className="text-lg font-semibold text-white/90 tracking-tight group-hover:text-white transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm text-white/40 mt-1 font-light">
          {member.role}
        </p>

        {/* Skills preview */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-5">
          {member.skills?.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase rounded-full border border-white/[0.06] bg-white/[0.03] text-white/35 group-hover:border-violet-500/20 group-hover:text-white/50 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="mt-6 flex items-center gap-1 text-xs font-medium text-white/25 group-hover:text-violet-400 transition-all duration-300">
          View Profile
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
