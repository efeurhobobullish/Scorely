import { useEffect, useState } from "react";
import { ArrowRight, BarChart3, Clock, ShieldCheck } from "lucide-react";
import ModeToggle from "@/components/ui/mode-toggle";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // splash duration

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-[100dvh] flex flex-col justify-center layout text-center gap-12">
      
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-primary">Scorely</h1>
        <ModeToggle />
      </header>

      {/* Hero */}
      <section className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Smart <span className="text-primary">Football Predictions</span>
        </h2>
        <p className="text-muted text-sm md:text-base">
          Accurate match insights, premium tips, and automated prediction bots.
        </p>
      </section>

      {/* Services */}
      <section className="grid grid-cols-2 gap-4 mt-6">
        <ServiceCard icon={<Clock />} title="Live Updates" desc="Real-time data" />
        <ServiceCard icon={<BarChart3 />} title="Predictions" desc="Data-driven" />
        <ServiceCard icon={<ArrowRight />} title="Fast Access" desc="Quick tips" />
        <ServiceCard icon={<ShieldCheck />} title="Trusted" desc="Reliable results" />
      </section>

      {/* CTA */}
      <section className="space-y-4 mt-8">
        <a
          href="/auth/register"
          className="block w-full rounded-full bg-primary text-white py-3 font-semibold hover:opacity-90 transition"
        >
          Get Started
        </a>
        <a
          href="/auth/login"
          className="text-primary text-sm font-medium hover:underline"
        >
          Already have an account? Sign in
        </a>
      </section>

      {/* Stats */}
      <section className="flex justify-center gap-10 mt-10 text-sm">
        <Stat value="95%" label="Accuracy" />
        <Stat value="24/7" label="Bots Online" />
        <Stat value="10+" label="Leagues" />
      </section>
    </div>
  );
}

/* =====================
   Splash Screen
   ===================== */

function SplashScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary text-white z-50">
      <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-6 animate-scale-in">
        <span className="text-primary text-3xl font-bold">S</span>
      </div>

      <h1 className="text-2xl font-semibold tracking-wide">Scorely</h1>
      <p className="text-sm opacity-80 mt-1">Smart Football Predictions</p>

      <div className="mt-10 w-32 h-1 bg-white/30 rounded-full overflow-hidden">
        <div className="h-full w-full bg-white animate-loading-bar" />
      </div>
    </div>
  );
}

/* =====================
   Small Components
   ===================== */

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-line hover:shadow-md transition">
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-xs text-muted mt-1">{desc}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-bold text-lg">{value}</p>
      <p className="text-muted text-xs">{label}</p>
    </div>
  );
}