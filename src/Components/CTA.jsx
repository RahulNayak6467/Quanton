import { ShineBorder } from "@/components/ui/shine-border";

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center border-2 border-bg-card  rounded-2xl py-16 px-8 relative overflow-hidden ">
        <ShineBorder />
        {/* Glow behind */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, #10B98115 90%, #059669 20%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10">
          {/* Badge */}
          <span className="px-3 py-1 rounded-full border border-border text-text-secondary text-sm mb-6 inline-block">
            Start Today
          </span>

          {/* Heading */}
          <h2 className="text-5xl text-text-primary font-semibold mb-4">
            The Market Waits <span className="text-accent">for No One.</span>
          </h2>

          {/* Subheading */}
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Join thousands of investors who track smarter with Quanton.
            Real-time data, smart alerts, and market insights — all free.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-4 bg-accent-hover cursor-pointer text-white rounded-2xl font-extrabold transition-all mb-3">
            Start Tracking Free
          </button>

          {/* Trust line */}
          <p className="text-text-disabled text-sm">No credit card required</p>
        </div>
      </div>
    </section>
  );
}

export default CTA;
