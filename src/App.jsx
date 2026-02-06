import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background";
import InitialPage from "./components/InitialPage";
import QuestionCard from "./components/QuestionCard";

export default function App() {
  const [phase, setPhase] = useState(0);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Background />
      <AnimatePresence mode="wait">
        {phase === 0 && (
          <InitialPage key="initial" onOpen={() => setPhase(1)} />
        )}

        {phase === 1 && (
          <QuestionCard key="question" onAccept={() => setPhase(2)} />
        )}

        {phase === 2 && (
          <div key="success" className="text-center">
            <h1 className="text-6xl">💖</h1>
            <h2 className="text-4xl font-bold text-pink-600 mt-4">
              Yay! See you on Feb 14!
            </h2>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
