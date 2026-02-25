import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { steps } from "@/Data/Steps";
import HowItWorksList from "./HowItWorksList";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

function HowItWorks() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  return (
    <section className="pt-24 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="px-3 py-1 rounded-full border border-border text-text-secondary text-sm mb-4 inline-block">
          How It Works
        </span>
        <h2 className="text-4xl text-text-primary font-semibold mb-4">
          Up and Running in <span className="text-accent">Minutes.</span>
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
          Three simple steps to start tracking smarter.
        </p>
      </div>

      {/* Animated Beam */}
      <div
        className="relative flex w-full max-w-[820px] mx-auto items-center justify-center overflow-hidden p-5"
        ref={containerRef}
      >
        <div className="flex size-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row justify-between">
            <div>
              <Circle ref={div1Ref}>
                <HowItWorksList step={steps[0]} />
              </Circle>
            </div>
            <div>
              <Circle ref={div2Ref}>
                <HowItWorksList step={steps[1]} />
              </Circle>
            </div>
            <div>
              <Circle ref={div3Ref}>
                <HowItWorksList step={steps[2]} />
              </Circle>
            </div>
          </div>
        </div>
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
          gradientStartColor="#10b981"
          gradientStopColor="#10b981"
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div3Ref}
          gradientStartColor="#10b981"
          gradientStopColor="#10b981"
        />
      </div>
    </section>
  );
}

export default HowItWorks;
