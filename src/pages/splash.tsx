import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// 👉 replace with your real logo path
import logo from "@/assets/react.svg";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center text-white">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 140 }}
        >
          <img
            src={logo}
            alt="Scorely logo"
            className="w-14 h-14 object-contain"
          />
        </motion.div>

        {/* App name */}
        <motion.h1
          className="text-2xl font-semibold tracking-wide"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Scorely
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-sm opacity-80 mt-1"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          Smart Football Predictions
        </motion.p>

        {/* Loader */}
        <motion.div
          className="mt-10 w-32 h-1 bg-white/30 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}