/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const AnimatedWrapper = ({ children, delay = 0.2, from = "bottom" }) => {
  const animations = {
    bottom: { opacity: 0, y: 50 },
    top: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    fade: { opacity: 0 },
  };

  return (
    <motion.div
      initial={animations[from]}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
