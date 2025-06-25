import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white to-[#f0fdf4]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="text-center flex flex-col items-center"
          >
            {/* Pulse animation circle */}
            <motion.div
              className="w-24 h-24 bg-[#78B04F] rounded-full mb-8 shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1, 1.1, 1], opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />

            {/* Welcoming Text Animation */}
            <motion.h1
              className="text-3xl md:text-4xl font-extrabold text-[#78B04F]"
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Welcome to My Gadget
            </motion.h1>

            <motion.p
              className="text-gray-600 mt-2 text-sm md:text-base tracking-wider"
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Smart & Futuristic | Your Choice, Our Loyalty
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
