import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary text-white">
      
      {/* Logo */}
      <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-6 animate-scale-in">
        <span className="text-primary text-3xl font-bold">S</span>
      </div>

      <h1 className="text-2xl font-semibold">Scorely</h1>
      <p className="text-sm opacity-80 mt-1">
        Smart Football Predictions
      </p>

      {/* Loader */}
      <div className="mt-10 w-32 h-1 bg-white/30 rounded-full overflow-hidden">
        <div className="h-full w-full bg-white animate-loading-bar" />
      </div>
    </div>
  );
}