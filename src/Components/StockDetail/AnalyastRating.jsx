function AnalystRating() {
  const ratings = {
    strongBuy: 15,
    buy: 25,
    hold: 8,
    sell: 2,
    strongSell: 1,
  };

  const total =
    ratings.strongBuy +
    ratings.buy +
    ratings.hold +
    ratings.sell +
    ratings.strongSell;

  const getConsensus = () => {
    const bullish = ratings.strongBuy + ratings.buy;
    const bearish = ratings.sell + ratings.strongSell;
    if (bullish / total > 0.5)
      return { label: "BUY", color: "text-green-400 border-green-400" };
    if (bearish / total > 0.5)
      return { label: "SELL", color: "text-red-400 border-red-400" };
    return { label: "HOLD", color: "text-yellow-400 border-yellow-400" };
  };

  const consensus = getConsensus();

  const rows = [
    { label: "Strong Buy", value: ratings.strongBuy, color: "bg-green-500" },
    { label: "Buy", value: ratings.buy, color: "bg-green-400" },
    { label: "Hold", value: ratings.hold, color: "bg-yellow-400" },
    { label: "Sell", value: ratings.sell, color: "bg-red-400" },
    { label: "Strong Sell", value: ratings.strongSell, color: "bg-red-500" },
  ];

  return (
    <div className="flex flex-col gap-3 w-[70%] border border-dashboard-border bg-dashboard-card p-6 rounded-md">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[#6E7681] text-xs uppercase tracking-widest font-semibold">
          Analyst Rating
        </p>
        <span
          className={`text-xs font-semibold border rounded-full px-2 py-0.5 ${consensus.color}`}
        >
          {consensus.label}
        </span>
      </div>

      {rows.map(({ label, value, color }) => (
        <div key={label} className="flex items-center gap-2 mb-2">
          <span className="text-[#6E7681] text-xs w-20 shrink-0">{label}</span>
          <div className="flex-1 bg-[#21262D] rounded-full h-1.5">
            <div
              className={`${color} h-1.5 rounded-full`}
              style={{ width: `${(value / total) * 100}%` }}
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
