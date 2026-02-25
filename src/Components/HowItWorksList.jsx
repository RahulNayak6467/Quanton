function HowItWorksList({ step }) {
  return (
    <div
      key={step.number}
      // className="relative z-10 flex flex-col items-center text-center flex-1"
      className="z-10"
    >
      {/* Icon circle */}
      <div className="w-16 h-16 mt-5 rounded-full bg-bg-card border border-border flex items-center justify-center mb-6">
        <span className="text-accent font-bold text-lg">{step.number}</span>
      </div>

      {/* Content */}
      {/* <h3 className="text-text-primary font-semibold text-lg mb-2">
        {step.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {step.description}
      </p>*/}
    </div>
  );
}

export default HowItWorksList;
