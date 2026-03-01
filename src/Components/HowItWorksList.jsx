function HowItWorksList({ step }) {
  return (
    <div key={step.number} className="z-10">
      {/* Icon circle */}
      <div className="w-16 h-16 mt-5 rounded-full bg-bg-card border border-border flex items-center justify-center mb-6">
        <span className="text-accent font-bold text-lg">{step.number}</span>
      </div>

      {/* Content */}
    </div>
  );
}

export default HowItWorksList;
