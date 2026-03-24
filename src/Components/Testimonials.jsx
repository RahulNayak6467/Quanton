import { testimonials } from "../Data/TestimonialData";
import TestimonialsList from "./TestimonialsList";

function Testimonials() {
  return (
    <section className="py-24 overflow-x-hidden px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-text-primary text-center mb-12">
        See What <span className="text-accent">People</span> Think About Our{" "}
        <span className="text-accent">Services</span>
      </h1>

      {/* Row 1 - scrolls left */}
      <div className="marquee overflow-x-hidden mb-6 p-6">
        <div className="marquee-track flex gap-8 w-max animate-tickerRight">
          <div className="flex gap-8 shrink-0">
            {testimonials.slice(0, 4).map((t) => (
              <TestimonialsList key={t.name} {...t} />
            ))}
          </div>
          <div className="flex gap-8 shrink-0" aria-hidden>
            {testimonials.slice(0, 4).map((t) => (
              <TestimonialsList key={t.name + "-2"} {...t} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="marquee overflow-x-hidden p-6">
        {/* <div className="marquee-track flex gap-8 animate-tickerLeft"> */}
        <div className="marquee-track flex gap-8 w-max animate-tickerLeft">
          <div className="flex gap-8 shrink-0 ">
            {testimonials.slice(4, 8).map((t) => (
              <TestimonialsList key={t.name} {...t} />
            ))}
          </div>
          <div className="flex gap-8 shrink-0" aria-hidden>
            {testimonials.slice(4, 8).map((t) => (
              <TestimonialsList key={t.name + "-2"} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
