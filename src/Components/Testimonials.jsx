import { testimonials } from "../Data/TestimonialData";
import TestimonialsList from "./TestimonialsList";

function Testimonails() {
  const requiredArray = [...testimonials];
  return (
    <section>
      <div className="overflow-hidden">
        <div className="w-full h-40  flex gap-8 mb-30 animate-tickerLeft p-6 group-hover:[animation-play-state:paused]">
          <div className="flex gap-8 shrink-0">
            {requiredArray.slice(0, 4).map((t) => (
              <TestimonialsList
                name={t.name}
                avatar={t.avatar}
                role={t.role}
                review={t.review}
              />
            ))}
          </div>
          <div className="flex gap-8 shrink-0">
            {requiredArray.slice(0, 4).map((t) => (
              <TestimonialsList
                name={t.name}
                avatar={t.avatar}
                role={t.role}
                review={t.review}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-40  flex gap-8 mb-40 animate-tickerRight p-6 group-hover:[animation-play-state:paused]">
          <div className="flex gap-8 shrink-0">
            {requiredArray.slice(4, 8).map((t) => (
              <TestimonialsList
                name={t.name}
                avatar={t.avatar}
                role={t.role}
                review={t.review}
              />
            ))}
          </div>
          <div className="flex gap-8 shrink-0">
            {requiredArray.slice(4, 8).map((t) => (
              <TestimonialsList
                name={t.name}
                avatar={t.avatar}
                role={t.role}
                review={t.review}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonails;
