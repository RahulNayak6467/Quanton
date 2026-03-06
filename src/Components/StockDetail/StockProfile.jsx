function StockProfile() {
  return (
    <div className="flex-col w-[24%]  border border-dashboard-border p-6 rounded-2xl bg-dashboard-card">
      <div>
        <h1 className="text-xl text-text-secondary">
          <span className="text-accent font-bold text-lg mr-2">AAPL</span>{" "}
          Profile
        </h1>
      </div>
      <div className="mt-4 text-text-secondary text-md">
        <p>Sector: Electronic Technology</p>
        <p>Industry: Telecommunications Equipment</p>
        <p>Employees: 166k</p>
      </div>
      <div className="mt-4 text-text-secondary text-[15px] ">
        {" "}
        Apple, Inc engages in the design, manufacture, and sale of smartphones,
        personal computers, tablets, wearables and accessories, and other
        variety of related services. It operates through the following
        geographical segments: Americas, Europe, Greater China, Japan, and Rest
        of Asia Pacific. The Americas segment includes North and South America.
        The Europe segment consists of European countries, as well as India, the
        Middle East, and Africa. The Greater China segment comprises of China,
        Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes
        Australia and Asian countries. Its products and services include iPhone,
        Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, Apple Care,
        iCloud, digital content stores, streaming, and licensing services. The
        company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and
        Stephen G. Wozniak in 1976 and is headquartered in Cupertino, CA.
      </div>
    </div>
  );
}

export default StockProfile;
