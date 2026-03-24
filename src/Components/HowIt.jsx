import { steps } from "@/Data/Steps";

function HowIt() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full max-w-[1150px] mx-auto justify-center px-4 sm:px-6 mb-20">
      <div>
        <h3 className="text-text-primary text-center   font-semibold text-lg mb-2 ">
          {steps[0].title}
        </h3>
        <p className="text-text-secondary text-center text-sm leading-relaxed">
          {steps[0].description}
        </p>
      </div>
      <div>
        <h3 className="text-text-primary text-center  font-semibold text-lg mb-2">
          {steps[1].title}
        </h3>
        <p className="text-text-secondary text-sm text-center leading-relaxed ">
          {steps[1].description}
        </p>
      </div>
      <div>
        {" "}
        <h3 className="text-text-primary text-center  font-semibold text-lg  mb-2 ">
          {steps[2].title}
        </h3>
        <p className="text-text-secondary text-sm text-center leading-relaxed">
          {steps[1].description}
        </p>
      </div>
    </div>
  );
}

export default HowIt;
