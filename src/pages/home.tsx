import { ArrowRight, BarChart3, Clock, ShieldCheck } from "lucide-react";
import ModeToggle from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center layout text-center gap-12">
      
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-primary">Scorely</h1>
        <ModeToggle />
      </header>

      <section className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Smart <span className="text-primary">Football Predictions</span>
        </h2>
        <p className="text-muted text-sm md:text-base">
          Accurate match insights, premium tips, and automated prediction bots.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4 mt-6">
        <ServiceCard icon={<Clock />} title="Live Updates" desc="Real-time data" />
        <ServiceCard icon={<BarChart3 />} title="Predictions" desc="Data-driven" />
        <ServiceCard icon={<ArrowRight />} title="Fast Access" desc="Quick tips" />
        <ServiceCard icon={<ShieldCheck />} title="Trusted" desc="Reliable results" />
      </section>

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
    </div>
  );
}

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