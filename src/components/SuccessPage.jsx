import { motion } from "framer-motion";

const SuccessPage = () => {
  // Calculate days left until Feb 14th
  const today = new Date();
  const valentine = new Date(today.getFullYear(), 1, 14);
  const diff = valentine - today;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  // Variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 overflow-hidden">
      {/* 1. AMBIENT BACKGROUND (Matching Question Card) */}
      <div className="absolute inset-0 flex flex-col justify-around opacity-[0.03] pointer-events-none select-none">
        {[...Array(6)].map((_, i) => (
          <h1
            key={i}
            className="text-8xl md:text-9xl font-black text-rose-500 -rotate-12 whitespace-nowrap"
          >
            YAY! YAY! YAY! YAY!
          </h1>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white/40 backdrop-blur-3xl p-8 md:p-12 rounded-[3.5rem] shadow-[0_32px_64px_rgba(244,63,94,0.15)] border border-white/60 text-center w-full max-w-[440px] relative z-10"
      >
        {/* Pulsing Heart Icon */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-7xl md:text-8xl mb-6 drop-shadow-md inline-block"
        >
          ❤️
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-black text-gray-800 mb-2 tracking-tighter leading-tight"
        >
          I Knew It! <br />
          <span className="text-rose-600">🥰</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 mb-8 font-serif italic tracking-wide"
        >
          "You're officially stuck with me now!"
        </motion.p>

        {/* Meme Section with high-end framing */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl overflow-hidden mb-8 border-4 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
        >
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTA2am5qem9vYW54OG93dDh4MXQ5eGo1Yzd5dHIwajB4MDl0OGhseCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytu2GUYbvhz7zShGwS/giphy.gif"
            alt="Happy celebration"
            className="w-full h-auto object-cover max-h-[220px]"
          />
        </motion.div>

        {/* Elegant Countdown Box */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-rose-500 to-pink-500 p-6 rounded-[2rem] shadow-[0_10px_20px_rgba(244,63,94,0.3)] text-white"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-90">
            Our Date Is In
          </p>
          <p className="text-4xl font-black">
            {daysLeft > 0 ? `${daysLeft} Days` : "Today! ❤️"}
          </p>
          <div className="w-12 h-1 bg-white/30 mx-auto mt-3 rounded-full" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-rose-400 text-xs font-black uppercase tracking-[0.4em]"
        >
          See you on Feb 14th ✨
        </motion.p>
      </motion.div>

      {/* Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-rose-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-pink-300/20 blur-[120px] rounded-full" />
    </div>
  );
};

export default SuccessPage;
