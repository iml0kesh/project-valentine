import { useState } from "react";
import { motion } from "framer-motion";

const QuestionCard = ({ onAccept }) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    // Generate a random position within a range that won't go off-screen
    const randomX = Math.random() * 250 - 125;
    const randomY = Math.random() * 250 - 125;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 text-center max-w-[90%] w-[400px]"
    >
      <div className="text-6xl mb-6">✨</div>
      <h2 className="text-3xl font-black text-gray-800 mb-8 leading-tight">
        Will you be my <span className="text-pink-600">Valentine?</span> 🌹
      </h2>

      <div className="flex justify-center items-center gap-6 h-40 relative">
        {/* The "Yes" Button */}
        <button
          onClick={onAccept}
          className="z-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:scale-110 active:scale-95 transition-all"
        >
          Yes!
        </button>

        {/* The "No" Button (The Runner) */}
        <motion.button
          onMouseEnter={moveButton}
          onTouchStart={moveButton} // Moves when tapped on mobile
          animate={{ x: noButtonPos.x, y: noButtonPos.y }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white/80 text-gray-500 px-8 py-4 rounded-2xl font-bold border border-pink-100 shadow-sm cursor-pointer"
        >
          No
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
