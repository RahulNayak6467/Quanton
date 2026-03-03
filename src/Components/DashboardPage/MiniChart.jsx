import Loader from "../Loader";
import StockChart from "../Charts/LightWeightCharts";
import { TrendingUp, TrendingDown } from "lucide-react";
function MiniChart({ stockData, data, colors }) {
  return (
    <div className="flex justify-between  p-6 py-3 border-2 items-center w-full h-30 rounded-xl mx-auto  bg-[#0D1117] border-[#21262D]">
      <div>
        <h3 className="text-text-primary text-md font-bold">
          {stockData?.name}
        </h3>
        <span className="text-text-secondary text-md font-bold">
          {stockData?.price}
        </span>
        <div className="flex gap-1 items-center ">
          <div className="flex gap-2 items-center">
            <p className="text-text-secondary text-md ">{stockData?.symbol}</p>
            <span className="border-r border-r-text-secondary h-3.5 w-0.5 mr-0.5"></span>
            <p
              className={
                stockData?.changePercentage > 0
                  ? "text-positive"
                  : "text-negative"
              }
            >
              {stockData?.changePercentage?.toFixed(2)}%
            </p>
          </div>
          {/* <TrendingDown
            size={18}
            className={
              stockData?.changePercentage > 0
                ? "text-positive"
                : "text-negative"
            }
          /> */}
          {stockData?.changePercentage > 0 ? (
            <TrendingUp size={18} className="text-positive" />
          ) : (
            <TrendingDown size={18} className="text-negative" />
          )}
        </div>
      </div>
      <div>
        <StockChart data={data} colors={colors} />
      </div>
    </div>
  );
}
export default MiniChart;
