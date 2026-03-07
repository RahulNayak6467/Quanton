import { useQuery } from "@tanstack/react-query";

function AnalystRating() {
  const apiKey = import.meta.env.VITE_FMP_API_KEY;

  const getAnalystRating = async () => {
    const response = await fetch(
      `https://financialmodelingprep.com/stable/ratings-snapshot?symbol=AAPL&apikey=${apiKey}`,
    );
    const data = await response.json();
    console.log(data);

    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["AnalystRating"],
    queryFn: () => getAnalystRating(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#30363D] border-t-green-500 rounded-full animate-spin" />
      </div>
    );
  }

  const ratingStock = data[0]?.rating;
  const getRating = (ratingStock) => {
    if (ratingStock === "A" || ratingStock === "A+" || ratingStock === "A-")
      return 5;
    if (ratingStock === "B" || ratingStock === "B+" || ratingStock === "B-")
      return 3;
    if (ratingStock === "C" || ratingStock === "C+" || ratingStock === "C-")
      return 1;
    else return 0;
  };

  const ratings = [
    { label: "Rating", value: getRating(ratingStock) },
    { label: "Cash Flow", value: data[0]?.discountedCashFlowScore ?? 0 },
    { label: "Return on Equity", value: data[0]?.returnOnEquityScore ?? 0 },
    { label: "Return on Assets", value: data[0]?.returnOnAssetsScore ?? 0 },
    { label: "Debt to Equity", value: data[0]?.debtToEquityScore ?? 0 },
    { label: "P/E Score", value: data[0]?.priceToEarningsScore ?? 0 },
    { label: "P/B Score", value: data[0]?.priceToBookScore ?? 0 },
  ];

  const getBarColor = (value) => {
    if (value >= 4) return "bg-green-400";
    if (value >= 2) return "bg-yellow-400";
    if (value >= 0) return "bg-red-400";
  };

  return (
    <div className="flex flex-col gap-3 w-[65%] border-2 border-dashboard-border p-6 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text-[#6E7681] text-sm uppercase tracking-widest font-semibold">
          Financial Rating
        </p>
        <span
          className={`text-sm font-semibold text-accent border-2 px-2 py-1 rounded-full text-center border-accent`}
        >
          {data[0]?.rating}
        </span>
      </div>

      {ratings.map(({ label, value }) => (
        <div key={label} className="flex items-center gap-2">
          <span className="text-[#6E7681] text-xs w-28 shrink-0">{label}</span>
          <div className="flex-1 bg-[#21262D] rounded-full h-1.5">
            <div
              className={`${getBarColor(value)} h-1.5 rounded-full transition-all duration-500`}
              style={{ width: `${(value / 5) * 100}%` }}
            />
          </div>
          <span className="text-text-primary text-xs w-4 text-right">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AnalystRating;
