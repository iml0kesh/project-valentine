import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function App() {
  const [phase, setPhase] = useState(0); // 0: Start, 1: Question, 2: Accepted
  const [noButtonPos, setNoButtonPos] = useState({ top: 0, left: 0 });

  // Function to move the "No" button to a random position
  const moveButton = () => {
    // We stay within a 300px radius so it doesn't fly off-screen
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPos({ top: randomY, left: randomX });
  };

  const handleYes = () => {
    setPhase(2);
    // Fire the big confetti cannon!
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#ff69b4", "#ffffff"],
    });
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {/* PHASE 0: The Invitation */}
        {phase === 0 && (
          <motion.div
            key="p0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="text-center cursor-pointer"
            onClick={() => setPhase(1)}
          >
            <div className="text-8xl mb-4">✉️</div>
            <h1 className="text-2xl font-bold text-pink-600 animate-bounce">
              You have a message!
            </h1>
          </motion.div>
        )}

        {/* PHASE 1: The Question */}
        <motion.div
          key="p1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(255,182,193,0.5)] border border-white/50 text-center max-w-[90%] w-[400px]"
        >
          <h2 className="text-3xl font-extrabold text-pink-600 mb-8 drop-shadow-sm">
            Will you be my Valentine? 🌹
          </h2>

          <div className="flex justify-center items-center gap-6 h-32 relative">
            <button
              onClick={handleYes}
              className="z-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-pink-300/50 transition-all active:scale-95"
            >
              Yes!
            </button>

            <motion.button
              onMouseEnter={moveButton}
              onTouchStart={moveButton} // Crucial for mobile!
              animate={{ x: noButtonPos.left, y: noButtonPos.top }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/80 text-gray-500 px-8 py-4 rounded-2xl font-bold border border-pink-100 shadow-sm"
            >
              No
            </motion.button>
          </div>
        </motion.div>

        {/* PHASE 2: Success */}
        {phase === 2 && (
          <motion.div
            key="p2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl mb-6">💖</h1>
            <h2 className="text-4xl font-black text-pink-600 mb-4">
              Yay! Can't wait!
            </h2>
            <p className="text-gray-600 text-lg">
              Mark your calendar for Feb 14th! ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
