import { ChartNoAxesCombined } from "lucide-react";

function FeaturesList({ icon, title, description, stats, image }) {
  return (
    <section>
      <div className=" flex-col p-8 border-2  w-full border-bg-card rounded-2xl flex-1 hover:scale-105 cursor-pointer transition-all hover:shadow-[0_0px_30px_rgba(16,185,129,0.8)] hover:border-accent">
        <img
          src={image}
          className="border-2 border-bg-card rounded-2xl mb-4 w-full  h-70 object-cover"
        />
        <div className="mb-1">{icon}</div>
        <div className="mb-1">
          <p className="text-text-primary text-lg ">{title}</p>
        </div>
        <div>
          <p className="text-text-disabled text-md">{description}</p>
        </div>
        <span className="mt-2 text-accent text-sm">{stats}</span>
      </div>
    </section>
  );
}

export default FeaturesList;
