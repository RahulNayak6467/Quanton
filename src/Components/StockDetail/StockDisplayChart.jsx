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
    <div className="border border-dashboard-border bg-dashboard-card p-6 h-fit rounded-md w-[80%] ">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center ml-6">
          <h1 className="font-extrabold text-4xl px-1 py-0.5 text-text-secondary">
            {stockData[1][0]?.symbol}
          </h1>
          <span className="text-xl text-text-secondary">
            ${stockData[1][0]?.price?.toFixed(2)}
          </span>
          <div className="flex gap-2 items-center">
            <span
              className={
                stockData[1][0]?.changePercentage?.toFixed(2) > 0
                  ? "text-xl text-positive"
                  : "text-xl text-negative"
              }
            >
              {stockData[1][0]?.changePercentage?.toFixed(2)}%
            </span>
            <span
              className={
                stockData[1][0].changePercentage > 0
                  ? "text-positive text-xl"
                  : "text-negative text-xl"
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
        <div className="border border-bg-elevated  flex gap-2 rounded-md">
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
      <div className="p-6 border-dashboard-border bg-dashboard-page m-4  border-2 rounded-2xl">
        <CandlestickChart data={chartData} className="p-6" />
      </div>
    </div>
  );
}

export default StockDisplayChart;
