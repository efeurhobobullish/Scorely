import { Header } from "@/components/ui";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Check, 
  ArrowRight, 
  Trophy 
} from "lucide-react";
import CountUp from "react-countup";

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative z-10 flex flex-col items-center w-full overflow-hidden bg-background">
        
        {/* Background Grid Pattern for visual polish */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* ================= HERO ================= */}
        <section className="relative flex flex-col items-center text-center pt-32 pb-20 px-4 gap-8 max-w-4xl mx-auto">
          
          {/* Decorative Glow */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/20 blur-[100px] rounded-full -z-10" />

          {/* Status */}
          <div className="flex items-center gap-2 rounded-full px-4 py-1.5 bg-secondary/50 border border-line backdrop-blur-sm">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs font-medium text-main uppercase tracking-wide">Predictions Live Today</p>
          </div>

          {/* Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-main tracking-tight">
              Win More. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Guess Less.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-main/60 leading-relaxed max-w-2xl mx-auto">
              Access AI-driven football predictions, value bets, and match insights. 
              We crunch the numbers so you don't have to.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link to="/auth/register">
              <button className="btn-primary min-w-[180px] h-12 rounded-full text-white font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                Get Started Free
              </button>
            </Link>

            <Link to="/predictions">
              <button className="min-w-[180px] h-12 rounded-full border border-line bg-background hover:bg-secondary transition flex items-center justify-center gap-2 text-main">
                View Today's Tips
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          <p className="text-sm text-main/40">No credit card required for free tier.</p>
        </section>

        {/* ================= STATS ================= */}
        <section className="w-full border-y border-line bg-secondary/30 py-16">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-12 text-center">
            <Stat
              value={<CountUp end={92} suffix="%" duration={2.5} />}
              label="Accuracy Rate"
            />
            <Stat
              value={<CountUp end={25} suffix="K+" duration={2.5} />}
              label="Winning Tips"
            />
            <Stat
              value={<CountUp end={12} suffix="M+" duration={2.5} />}
              label="User Winnings"
            />
             <Stat
              value={<CountUp end={50} suffix="+" duration={2.5} />}
              label="Leagues Covered"
            />
          </div>
        </section>

        {/* ================= LIVE PREVIEW (THE PRODUCT) ================= */}
        <section className="py-24 px-4 w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-main mb-4">Today's Hot Picks</h2>
            <p className="text-main/60">A sneak peek at our highest confidence predictions for today.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MatchCard 
              league="Premier League" 
              home="Arsenal" 
              away="Chelsea" 
              prediction="Home Win" 
              odds="1.85" 
              confidence={88}
            />
            <MatchCard 
              league="La Liga" 
              home="Real Madrid" 
              away="Valencia" 
              prediction="Over 2.5 Goals" 
              odds="1.65" 
              confidence={92}
            />
            <MatchCard 
              league="Serie A" 
              home="Juventus" 
              away="Napoli" 
              prediction="BTTS: Yes" 
              odds="1.90" 
              confidence={75}
            />
          </div>
          
          <div className="flex justify-center mt-10">
             <Link to="/predictions" className="text-primary font-medium hover:underline flex items-center gap-2">
                See all 24 matches today <ArrowRight size={16} />
             </Link>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="w-full bg-secondary/20 py-24 px-4 border-y border-line">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Feature
                icon={<Zap className="w-6 h-6" />}
                title="Fast Daily Tips"
                text="Well-researched football predictions posted every morning, hours before kickoff."
              />
              <Feature
                icon={<BarChart3 className="w-6 h-6" />}
                title="Data-Driven Analysis"
                text="We analyze stats, team form, injuries, and odds movement to find value."
              />
              <Feature
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Transparent History"
                text="We don't delete losses. Our full Win/Loss history is visible to all users."
              />
            </div>
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section className="py-24 px-4 max-w-6xl mx-auto w-full">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-main mb-4">Simple Pricing</h2>
            <p className="text-main/60">Start winning for free, upgrade for the bankers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <PricingCard 
              title="Free" 
              price="$0" 
              features={["2 Daily Tips", "Basic Stats", "Limited Leagues"]} 
            />
            <PricingCard 
              title="Pro" 
              price="$19" 
              isPopular 
              features={["10+ Daily Tips", "High Confidence Bankers", "All Leagues", "Email Alerts"]} 
            />
            <PricingCard 
              title="VIP" 
              price="$49" 
              features={["Unlimited Access", "Direct Telegram Support", "Live Betting Bot", "Detailed Analysis"]} 
            />
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="w-full bg-secondary py-12 px-4 border-t border-line">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-main">Scorely</h3>
              <p className="text-main/50 text-sm mt-2">© 2024 Scorely. All rights reserved.</p>
            </div>
            
            <div className="flex gap-8 text-sm text-main/70">
              <Link to="#" className="hover:text-primary transition">Terms</Link>
              <Link to="#" className="hover:text-primary transition">Privacy</Link>
              <Link to="#" className="hover:text-primary transition">Contact</Link>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}

/* ================= SUB-COMPONENTS ================= */

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl md:text-5xl font-extrabold text-main">{value}</h3>
      <p className="text-xs font-semibold uppercase tracking-widest text-main/50 mt-2">
        {label}
      </p>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="group p-8 rounded-2xl border border-line bg-background hover:border-primary/50 transition duration-300">
      <div className="w-12 h-12 rounded-xl bg-primary/10 center text-primary mb-6 group-hover:scale-110 transition duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-main mb-3">{title}</h3>
      <p className="text-sm text-main/60 leading-relaxed">{text}</p>
    </div>
  );
}

function MatchCard({ league, home, away, prediction, odds, confidence }: any) {
  return (
    <div className="rounded-2xl border border-line bg-background p-5 hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-medium text-main/40 uppercase tracking-wider">{league}</span>
        <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">{confidence}% Safe</span>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-main">{home}</span>
          <span className="font-semibold text-main">{away}</span>
        </div>
        <div className="text-right">
          <div className="bg-secondary p-2 rounded-lg text-center min-w-[60px]">
             <span className="block text-xs text-main/50">Odds</span>
             <span className="font-bold text-main">{odds}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-line flex items-center gap-3">
         <div className="w-8 h-8 rounded-full bg-primary/10 center text-primary">
            <Trophy size={16} />
         </div>
         <div>
            <p className="text-xs text-main/50">Prediction</p>
            <p className="font-bold text-primary">{prediction}</p>
         </div>
      </div>
    </div>
  )
}

function PricingCard({ title, price, features, isPopular }: any) {
  return (
    <div className={`relative p-8 rounded-3xl border ${isPopular ? 'border-primary bg-primary/5' : 'border-line bg-background'}`}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </span>
      )}
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium text-main/60">{title}</h3>
        <div className="flex justify-center items-end gap-1 mt-2">
          <span className="text-4xl font-bold text-main">{price}</span>
          <span className="text-main/40 mb-1">/mo</span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feat: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-sm text-main">
            <Check size={16} className="text-primary" />
            {feat}
          </li>
        ))}
      </ul>

      <button className={`w-full h-11 rounded-full font-medium transition ${isPopular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-main hover:bg-secondary/80'}`}>
        Choose Plan
      </button>
    </div>
  )
}
