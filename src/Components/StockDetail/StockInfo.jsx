import useStockInfo from "@/CustomHooks/useStockInfo";
import Loader from "../Loader";

function StockInfo() {
  const { data: StockInfoData, isLoading } = useStockInfo();

  if (isLoading) {
    return <></>;
  }

  // console.log(StockInfoData);

  return (
    <div className="border border-dashboard-border rounded-md bg-dashboard-card  p-5 w-100 flex flex-col gap-4">
      {/* Price Stats */}
      <h1 className="text-accent text-xl font-bold">Financials</h1>
      <div className="flex flex-col gap-2">
        <p className="text-[#6E7681]  text-xs brightness-150 uppercase tracking-widest font-semibold">
          Price Stats
        </p>
        {[
          {
            label: "Price",
            value: `$${StockInfoData[0][0].price.toFixed(2)}`,
          },
          { label: "Open", value: `$${StockInfoData[0][0].open.toFixed(2)}` },
          {
            label: "High",
            value: `$${StockInfoData[0][0].dayHigh.toFixed(2)}`,
          },
          { label: "Low", value: `$${StockInfoData[0][0].dayLow.toFixed(2)}` },
          {
            label: "52W High",
            value: `$${StockInfoData[0][0].yearHigh.toFixed(2)}`,
          },
          {
            label: "52W Low",
            value: `$${StockInfoData[0][0].yearLow.toFixed(2)}`,
          },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center">
            <span className="text-[#6E7681] text-sm">{label}</span>
            <span className="text-text-primary text-sm font-medium">
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-dashboard-border" />

      {/* Market Stats */}
      <div className="flex flex-col gap-2">
        <p className="text-[#6E7681] text-xs uppercase brightness-150 tracking-widest font-semibold">
          Market
        </p>
        {[
          {
            label: "Volume",
            value: `${(StockInfoData[1][0].volume / 10 ** 6).toFixed(2)}M`,
          },
          {
            label: "Mkt Cap",
            value: `${(StockInfoData[1][0].marketCap / 10 ** 9).toFixed(2)}B`,
          },
          {
            label: "Last Dividend",
            value: `${StockInfoData[1][0].lastDividend.toFixed(2)}`,
          },
          {
            label: "Change",
            value: `${StockInfoData[0][0].change.toFixed(2)}`,
            red: true,
          },
          {
            label: "Change %",
            value: `${StockInfoData[0][0].changePercentage.toFixed(2)}%`,
            red: true,
          },
          {
            label: "Exchange",
            value: `${StockInfoData[0][0].exchange}`,
          },
        ].map(({ label, value, red }) => (
          <div key={label} className="flex justify-between items-center">
            <span className="text-[#6E7681] text-sm">{label}</span>
            <span
              className={`text-sm font-medium ${
                red ? "text-red-400" : "text-text-primary"
              }`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-dashboard-border" />

      {/* Company Info */}
      <div className="flex flex-col gap-2">
        <p className="text-[#6E7681] text-xs uppercase tracking-widest brightness-150 font-semibold">
          Company
        </p>
        {[
          { label: "CEO", value: `${StockInfoData[1][0].ceo}` },
          { label: "Sector", value: `${StockInfoData[1][0].sector}` },
          { label: "Industry", value: `${StockInfoData[1][0].industry}` },
          {
            label: "Employees",
            value: `${(StockInfoData[1][0].fullTimeEmployees / 1000).toFixed(0)}K`,
          },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center">
            <span className="text-[#6E7681] text-sm">{label}</span>
            <span className="text-text-primary text-sm font-medium">
              {value}
            </span>
          </div>
        ))}
        <div className="flex justify-between items-center">
          <span className="text-[#6E7681] text-sm">
            {StockInfoData[1][0].website}
          </span>
          <a
            href={StockInfoData[1][0].website}
            target="blank"
            className="text-sm font-medium text-green-400 hover:underline"
          >
            ↗ Visit
          </a>
        </div>
      </div>
    </div>
  );
}

export default StockInfo;
