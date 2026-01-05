import { motion } from "framer-motion";

const IconWrapper = ({ href, label, children }) => {
  if (!href || href === "#") {
    return (
      <div className="relative group opacity-30 cursor-not-allowed">
        {children}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      aria-label={label}
    >
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>

      {/* Tooltip */}
      <span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2
                   text-xs px-2 py-1 rounded bg-black text-white
                   opacity-0 group-hover:opacity-100 transition
                   whitespace-nowrap"
      >
        {label}
      </span>
    </a>
  );
};

const ProfileSocials = ({ socials }) => {
  return (
    <div className="mt-20 flex justify-center gap-8 text-neutral-700 dark:text-neutral-300">
      <IconWrapper href={socials.linkedin} label="LinkedIn">
        {/* LinkedIn SVG */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 8.98h4v12H3v-12ZM9 8.98h3.8v1.64h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.64 4.75 6.07v6.24h-4v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.62H9v-12Z" />
        </svg>
      </IconWrapper>

      <IconWrapper href={socials.github} label="GitHub">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.65.23 2.87.11 3.17.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56a11.52 11.52 0 0 0 7.85-10.95C23.5 5.74 18.27.5 12 .5Z" />
        </svg>
      </IconWrapper>

       <IconWrapper href={socials.instagram} label="Instagram">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
        </svg>
      </IconWrapper>

    </div>
  );
};

export default ProfileSocials;
