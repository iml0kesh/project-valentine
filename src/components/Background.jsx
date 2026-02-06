import { motion } from "framer-motion";

const Background = () => {
  // Generate 15 random hearts with different positions and speeds
  const hearts = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fff1f2]">
      {/* Soft Animated Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-200/50 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-200/50 blur-[120px] rounded-full animate-pulse" />

      {/* Floating Hearts */}
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: "110vh",
            x: `${Math.random() * 100}vw`,
            rotate: 0,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: "-10vh",
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear",
          }}
          className="absolute text-2xl"
          style={{ fontSize: `${Math.random() * 20 + 10}px` }}
        >
          {["❤️", "💖", "🌸", "✨", "💕"][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>
  );
};

export default Background;
