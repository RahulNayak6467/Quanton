import CandlestickChart from "../Charts/CandleStick";
import Loader from "../Loader";
import { TrendingUp, TrendingDown } from "lucide-react";
import useStockInfo from "@/CustomHooks/useStockInfo";
import useStockChart from "@/CustomHooks/useStockChart";
import { useSearchContext } from "@/Context/StockSearch";

function StockDisplayChart() {
  const { data: stockData, isLoading } = useStockInfo();

  const { chartData, chartLoader, currentBtn, handleCheckHistory } =
    useStockChart();

  if (chartLoader || isLoading) {
    return <Loader />;
  }

  return (
    <div className="border border-dashboard-border bg-dashboard-card p-4 sm:p-6 h-fit rounded-md w-full xl:w-[80%] min-w-0">
      <div className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center min-w-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 ml-0 sm:ml-6 min-w-0">
          <h1 className="font-extrabold text-2xl sm:text-4xl px-1 py-0.5 text-text-secondary">
            {stockData[1][0]?.symbol}
          </h1>
          <span className="text-lg sm:text-xl text-text-secondary">
            ${stockData[1][0]?.price?.toFixed(2)}
          </span>
          <div className="flex gap-2 items-center flex-wrap">
            <span
              className={
                stockData[1][0]?.changePercentage?.toFixed(2) > 0
                  ? "text-lg sm:text-xl text-positive"
                  : "text-lg sm:text-xl text-negative"
              }
            >
              {stockData[1][0]?.changePercentage?.toFixed(2)}%
            </span>
            <span
              className={
                stockData[1][0].changePercentage > 0
                  ? "text-positive text-lg sm:text-xl"
                  : "text-negative text-lg sm:text-xl"
              }
            >
              {stockData[1][0].change}
            </span>
            <span>
              {stockData[1][0]?.changePercentage > 0 ? (
                <TrendingUp className="text-positive" />
              ) : (
                <TrendingDown className="text-negative" />
              )}
            </span>
          </div>
        </div>
        <div className="border border-bg-elevated flex flex-wrap gap-1 rounded-md w-full xl:w-auto">
          <button
            onClick={() => handleCheckHistory(1, 1)}
            className={
              Number(currentBtn) === 1
                ? "text-text-primary p-2 text-lg px-4 rounded-md  bg-positive cursor-pointer "
                : "text-text-primary p-2 text-lg px-4 rounded-md   cursor-pointer "
            }
          >
            1D
          </button>
          <button
            onClick={() => handleCheckHistory(7, 2)}
            className={
              Number(currentBtn) === 2
                ? "text-text-primary p-2 text-lg px-4 rounded-md  bg-positive cursor-pointer "
                : "text-text-primary p-2 text-lg px-4 rounded-md   cursor-pointer "
            }
          >
            1W
          </button>
          <button
            onClick={() => handleCheckHistory(30, 3)}
            className={
              Number(currentBtn) === 3
                ? "text-text-primary p-2 text-lg px-4 rounded-md  bg-positive cursor-pointer "
                : "text-text-primary p-2 text-lg px-4 rounded-md   cursor-pointer "
            }
          >
            1M
          </button>
          <button
            onClick={() => handleCheckHistory(180, 4)}
            className={
              Number(currentBtn) === 4
                ? "text-text-primary p-2 text-lg px-4 rounded-md  bg-positive cursor-pointer "
                : "text-text-primary p-2 text-lg px-4 rounded-md   cursor-pointer "
            }
          >
            6M
          </button>
          <button
            onClick={() => handleCheckHistory(365, 5)}
            className={
              Number(currentBtn) === 5
                ? "text-text-primary p-2 text-lg px-4 rounded-md  bg-positive cursor-pointer "
                : "text-text-primary p-2 text-lg px-4 rounded-md   cursor-pointer "
            }
          >
            1Y
          </button>
          <button
            onClick={() => handleCheckHistory(1825, 6)}
            className={
              Number(currentBtn) === 6
                ? "text-text-primary p-2 text-lg px-4 rounded-md  bg-positive cursor-pointer "
                : "text-text-primary p-2 text-lg px-4 rounded-md   cursor-pointer "
            }
          >
            5Y
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-6 border-dashboard-border bg-dashboard-page m-2 sm:m-4 border-2 rounded-2xl min-w-0">
        <CandlestickChart data={chartData} className="p-2 sm:p-6" />
      </div>
    </div>
  );
}

export default StockDisplayChart;
