import { features } from "../Data/FeaturesData";
import FeaturesList from "./FeaturesList";

function Features() {
  return (
    <section className="max-w-[1320px] mx-auto mt-24 mb-24">
      <div className="text-center mb-12 p-6">
        {/* Heading */}
        <h2 className="text-5xl text-text-primary font-semibold mb-4">
          Everything You Need.{" "}
          <span className="text-accent">Nothing You Don't.</span>
        </h2>

        {/* Para */}
        <p className="text-text-secondary text-md max-w-xl mx-auto leading-relaxed">
          Quanton gives you the tools professionals rely on — real-time data,
          smart alerts, and deep market insights, all in one clean dashboard.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4 grow">
        {features.slice(0, 2).map((f) => (
          <FeaturesList
            icon={f.icon}
            title={f.title}
            description={f.description}
            stats={f.stat}
            key={f.id}
            image={f.image}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4">
        {features.slice(2, 4).map((f) => (
          <FeaturesList
            icon={f.icon}
            title={f.title}
            description={f.description}
            stats={f.stat}
            key={f.id}
            image={f.image}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {features.slice(4, 5).map((f) => (
          <FeaturesList
            icon={f.icon}
            title={f.title}
            description={f.description}
            stats={f.stat}
            key={f.id}
            image={f.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
