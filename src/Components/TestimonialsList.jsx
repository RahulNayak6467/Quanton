function TestimonialsList({ avatar, name, review, role }) {
  return (
    <div className="flex-col gap-4 max-w-120 h-fit p-6 border-2 rounded-2xl cursor-pointer border-bg-card hover:border-accent   hover:scale-105 transition-all hover:shadow-[0_0px_10px_rgba(16,185,129,0.8)] hover:[animation-play-state:paused]">
      <span className="w-3 h-3 rounded-2xl p-2 bg-accent mb-4">{avatar}</span>
      <h3 className="text-lg text-text-primary font-bold mt-5 mb-4">{name}</h3>
      <p className="text-sm text-text-secondary mb-4">{review}</p>
      <span className="text-text-disabled text-xs mb-2">{role}</span>
    </div>
  );
}

export default TestimonialsList;
