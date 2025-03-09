import { useState } from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { Button } from "./components/ui/button"; // Use relative path
import { FaHeart } from "react-icons/fa";

function App() {
  const [moodOn, setMoodOn] = useState(false);

  const handleClick = () => {
    setMoodOn(true);
    const audio = new Audio("/aakohn.mp3"); // Add a soft music file in 'public' folder
    audio.play();
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-1000 ${
        moodOn ? "bg-pink-200" : "bg-gray-100"
      }`}
    >
      {!moodOn ? (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={handleClick}
            className="px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-all"
          >
            Yeta dabau yeta, ani mood on hunxa
          </Button>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-3xl font-bold text-pink-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Oh maicha! Aba tyo mood ko button dabayau, aba timro on bhayo.
            <p className="">TATHASTU</p>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mt-2 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img src="/1.jpg" alt="" className="h-[500px] object-cover" />
            <div>
              <p className="text-lg font-bold text-pink-500">
                K banaxu hawa jasto, xito xito banayera auda banaxu, TARA BUTTON
                CHAI DABIYO, aba mood on garau, CHILL
              </p>
            </div>
          </motion.p>

          {/* Floating hearts */}
          <div className="relative mt-6">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-500 text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -100 }}
                transition={{ duration: 2, delay: i * 0.2 }}
                style={{ left: `${Math.random() * 100}%` }}
              >
                <FaHeart />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
