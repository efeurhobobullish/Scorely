import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "@/assets/logo.svg"; // use your real logo

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2600);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-primary text-white flex flex-col justify-between">
      
      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo card */}
          <motion.div
            className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-md"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src={logo}
              alt="Scorely"
              className="w-12 h-12 object-contain"
            />
          </motion.div>

          {/* App name */}
          <h1 className="text-xl font-semibold tracking-wide">
            Scorely
          </h1>

          {/* Tagline */}
          <p className="text-xs opacity-80 mt-1">
            Smart Football Predictions
          </p>
        </motion.div>
      </div>

      {/* Bottom Loader (Mobile style) */}
      <div className="pb-12 flex justify-center">
        <motion.div
          className="w-28 h-1 bg-white/30 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}