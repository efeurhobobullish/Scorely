import { Header } from "@/components/ui";
import { Link } from "react-router-dom";
import { BarChart3, ShieldCheck, Zap } from "lucide-react";
import CountUp from "react-countup";

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative z-10 flex flex-col items-center w-full overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="flex flex-col items-center text-center pt-24 pb-16 px-4 gap-8 max-w-3xl mx-auto">

          {/* Status */}
          <div className="center gap-2 rounded-full px-4 py-2 bg-secondary/50 border border-line">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </span>
            <p className="text-sm text-main">Predictions Live</p>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-main">
              Scorely
            </h1>

            <p className="text-lg md:text-xl text-main/60 leading-relaxed">
              Smart football predictions, match insights, and automated betting bots —
              built for consistency, not hype.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6 mt-4">
            <div className="flex gap-4">
              <Link to="/auth/register">
                <button className="btn-primary min-w-[160px] h-12 rounded-full">
                  Get Started
                </button>
              </Link>

              <Link to="/predictions">
                <button className="min-w-[160px] h-12 rounded-full border border-line bg-transparent hover:bg-secondary/50 transition">
                  View Tips
                </button>
              </Link>
            </div>

            {/* Simple trust text */}
            <p className="text-sm text-main/60">
              Used by thousands of football bettors worldwide
            </p>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="w-full border-y border-line bg-secondary/30 py-12 mb-20">
          <div className="main flex flex-wrap justify-center gap-12 text-center">

            <Stat
              value={<CountUp end={92} suffix="%" duration={2.5} />}
              label="Prediction Accuracy"
            />
            <Stat
              value={<CountUp end={25} suffix="K+" duration={2.5} />}
              label="Winning Tips Shared"
            />
            <Stat
              value={<CountUp end={50} suffix="+" duration={2.5} />}
              label="Leagues Covered"
            />

          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="main grid md:grid-cols-3 gap-6 mb-24 px-4">

          <Feature
            icon={<Zap />}
            title="Fast Daily Tips"
            text="Well-researched football predictions posted daily, before kickoff."
          />

          <Feature
            icon={<BarChart3 />}
            title="Data-Driven Analysis"
            text="Stats, form, odds movement, and historical performance combined."
          />

          <Feature
            icon={<ShieldCheck />}
            title="Reliable & Transparent"
            text="Win/Loss history is visible. No fake screenshots, no hidden results."
          />

        </section>

      </main>
    </>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-main">{value}</h3>
      <p className="text-xs uppercase tracking-widest text-main/50 mt-2">
        {label}
      </p>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="p-8 rounded-2xl border border-line bg-background">
      <div className="w-12 h-12 rounded-full bg-primary/10 center text-primary mb-6">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-main mb-3">{title}</h3>
      <p className="text-sm text-main/60 leading-relaxed">{text}</p>
    </div>
  );
}