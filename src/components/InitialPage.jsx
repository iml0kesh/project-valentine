import { motion } from "framer-motion";

const InitialPage = ({ onOpen }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 text-center">
      {/* 1. LAYER: AMBIENT TEXT BACKGROUND */}
      <div className="absolute inset-0 flex flex-col justify-around opacity-[0.03] pointer-events-none select-none">
        {[...Array(6)].map((_, i) => (
          <h1
            key={i}
            className="text-7xl md:text-9xl font-black text-rose-500 -rotate-12 whitespace-nowrap"
          >
            OPEN ME OPEN ME OPEN ME
          </h1>
        ))}
      </div>

      {/* 2. LAYER: THE FLOATING ENVELOPE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={onOpen}
          className="cursor-pointer relative group"
        >

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="text-[140px] md:text-[180px] leading-none drop-shadow-[0_20px_50px_rgba(244,63,94,0.3)] transition-all duration-500 group-hover:drop-shadow-[0_20px_60px_rgba(244,63,94,0.5)]"
          >
            💌
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-rose-300/30 rounded-full scale-150 group-hover:border-rose-400/50 transition-colors"
          />
        </motion.div>
      </motion.div>

      <div className="mt-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-black text-gray-800 tracking-tighter leading-tight"
        >
          Hey! You have <br />
          <span className="text-rose-500">a secret message</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <p className="text-rose-400/80 font-black uppercase text-[10px] tracking-[0.4em]">
            Click the heart to unlock
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-gradient-to-b from-rose-400 to-transparent"
          />
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-rose-200/20 blur-[100px] -z-10 rounded-full" />
    </div>
  );
};

export default InitialPage;
