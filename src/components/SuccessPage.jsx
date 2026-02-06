import { motion } from "framer-motion";

const SuccessPage = () => {
  const today = new Date();
  const valentine = new Date(today.getFullYear(), 1, 14);
  const diff = valentine - today;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // FIXED: Added w-[92%] to ensure a gap on mobile, and kept max-w-[500px] for desktop
      className="bg-white/70 backdrop-blur-3xl p-8 md:p-10 rounded-[3rem] shadow-[0_40px_100px_rgba(251,113,133,0.2)] border border-white/80 text-center w-[92%] max-w-[500px] relative z-10 mx-auto"
    >
      {/* Decorative inner elements */}
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-8 left-8 text-xl opacity-30"
      >
        🌸
      </motion.span>
      <motion.span
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-8 right-8 text-xl opacity-30"
      >
        ✨
      </motion.span>

      <motion.div variants={itemVariants} className="mb-6">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="text-6xl md:text-7xl inline-block mb-4"
        >
          💖
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-serif italic font-bold text-gray-800 tracking-tight leading-tight">
          I knew you'd say <br />
          <span className="text-rose-500 not-italic font-black tracking-tighter uppercase text-4xl md:text-5xl">
            Yes!
          </span>
        </h1>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="my-6 rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl mx-auto w-full max-w-[200px] -rotate-2"
      >
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTA2am5qem9vYW54OG93dDh4MXQ5eGo1Yzd5dHIwajB4MDl0OGhseCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytu2GUYbvhz7zShGwS/giphy.gif"
          alt="Success"
          className="w-full h-auto object-cover max-h-[180px]"
        />
      </motion.div>

      {/* Info Box */}
      <motion.div
        variants={itemVariants}
        className="mt-8 relative p-5 rounded-3xl bg-rose-50/50 border border-white flex flex-row items-center justify-between gap-4"
      >
        <div className="text-left">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-400 mb-1">
            Our Date In
          </p>
          <p className="text-2xl md:text-3xl font-black text-rose-500 leading-none">
            {daysLeft} <span className="text-lg font-bold">Days</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">
            Save the Date
          </p>
          <p className="text-sm font-bold text-gray-700">Feb 14, 2026</p>
        </div>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-8 text-rose-300 font-serif italic text-sm tracking-widest"
      >
        I can't wait to see you... ✨
      </motion.p>
    </motion.div>
  );
};

export default SuccessPage;
