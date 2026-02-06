import { motion } from "framer-motion";

// 1. Added { onOpen } so the component can receive the function from App.jsx
// 2. Changed to 'export default' to match your App.jsx import
const InitialPage = ({ onOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className="cursor-pointer group relative"
      >
        {/* The Envelope Icon */}
        <div className="text-[120px] md:text-[160px] leading-none drop-shadow-xl transition-transform duration-300 group-hover:rotate-2">
          ✉️
        </div>

        {/* Glow effect behind the mail */}
        <div className="absolute inset-0 bg-pink-400/20 blur-3xl -z-10 rounded-full group-hover:bg-pink-400/40 transition-colors" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-pink-600 tracking-tight">
          Hey! You have a message
        </h1>
        <p className="text-pink-400/80 mt-2 font-medium animate-pulse">
          Click the envelope to open
        </p>
      </motion.div>
    </div>
  );
};

export default InitialPage;
