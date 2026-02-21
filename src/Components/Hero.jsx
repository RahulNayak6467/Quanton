import HeroChart from "./HeroCharts";
function Hero() {
  // function TypewriterEffectDemo() {

  return (
    <div className="flex max-w-7xl mx-auto gap-4 items-center">
      <section className="relative max-w-7xl mx-auto flex-col gap-4 py-24">
        {/* Glow 1 - behind headline */}
        <div
          className="absolute pointer-events-none"
          style={{
            borderRadius: "20px",
            top: "-20%",
            left: "-20%",
            width: "1200px",
            height: "600px",
            background:
              "radial-gradient(ellipse at center, #10B98130 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Glow 2 - right side */}
        <div
          className="absolute pointer-events-none border-2 border-cyan-200"
          style={{
            borderRadius: "20px",
            top: "10%",
            right: "25%",
            width: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, #10B98135 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Content */}
        <div className="relative z-1">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1E2D3D] bg-[#111827] text-sm text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Live Market Data
          </div>

          {/* Headline */}
          <div className="mb-8">
            <h1 className="text-7xl text-text-primary font-semibold leading-tight">
              The <span className="text-accent">Market</span> Moves Fast.
            </h1>
            <h1 className="text-7xl text-text-primary font-semibold leading-tight">
              So Should <span className="text-accent">You.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="mb-8">
            <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
              Quanton delivers real-time stock tracking, intelligent alerts, and
              deep market insights — built for investors who can't afford to
              miss a move.
            </p>
          </div>

          {/* Buttons */}
          <div className="mb-6 flex gap-4 items-center">
            <button className="px-6 py-3 cursor-pointer rounded-2xl bg-accent hover:bg-accent-hover text-white flex items-center gap-2 shadow-[0_5px_30px_rgba(16,185,129,0.4)] transition-all">
              Start Tracking Free
            </button>
            <button className="px-6 py-3 cursor-pointer rounded-2xl bg-transparent hover:bg-[#1A2332] text-text-primary border-2 border-solid border-[#1E2D3D] transition-all">
              See How It Works &#8594;
            </button>
          </div>

          {/* Trust line */}
          <div>
            <ul className="flex gap-4 list-disc ml-3">
              <li className="text-text-disabled text-sm">
                No credit card required
              </li>
              <li className="text-text-disabled text-sm">
                10,000+ stocks tracked
              </li>
              <li className="text-text-disabled text-sm">Live market data</li>
            </ul>
          </div>
        </div>
        {/* <div className="flex-1">
           { badge, headline, subheadline, buttons, trust line }
        </div>*/}
      </section>
      {/* Right side - chart */}
      <div className="flex-1">
        <HeroChart />
      </div>
    </div>
  );
}

export default Hero;
