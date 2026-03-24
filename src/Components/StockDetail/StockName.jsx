import { useEffect, useState } from "react";
import { useSearchContext } from "@/Context/StockSearch";
import useStockInfo from "@/CustomHooks/useStockInfo";
import WatchListStar from "../WatchList.jsx/WatchListStar";
import useWatchList from "@/CustomHooks/useWatchList";
import { supabase } from "@/Supabase-client/SupabaseClient";

function StockName() {
  const { data: StockInfoData, isLoading } = useStockInfo();
  const { debouncedQuery } = useSearchContext();

  const [isInWatchList, setIsInWatchList] = useState(false);
  const { data: watchlistData, isLoading: watchListLoading } = useWatchList();

  if (isLoading || watchListLoading) {
    return <></>;
  }
  console.log(watchlistData);
  const stockSymbol = Object.values(watchlistData);
  const stockData = StockInfoData[1][0];

  const ipoDate = new Date(stockData?.ipoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  // → "Dec 12, 1980"
  console.log(stockSymbol);
  console.log(debouncedQuery);
  const checkWatchList = stockSymbol.some((el) => el.ticker === debouncedQuery);
  console.log(checkWatchList);

  const addStockDataWatchList = async (symbol) => {
    if (stockSymbol.some((el) => el === symbol)) {
      const { data, error } = await supabase
        .from("WatchList")
        .delete()
        .eq("Symbol", symbol);

      if (error) {
        throw new Error(
          "An error occured while removing stocks from watchlist",
        );
      }

      return data;
    }

    const { data, error } = await supabase
      .from("WatchList")
      .insert({ Symbol: symbol })
      .single();

    if (error) {
      throw new Error("An error occured");
    }

    return data;
  };

  return (
    <div className="border-2 border-dashboard-border bg-dashboard-card p-6 w-full lg:w-[35%] shrink-0 rounded-md min-w-0">
      {/* // <div className="border-2 border-dashboard-border p-6 mt-10 w rounded-md w-[90%] mx-auto "> */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={`https://img.logo.dev/ticker/${debouncedQuery ?? "APPL"}?token=pk_c_tteg2kSPKs1fwVTFOkTg&retina=true`}
              alt=""
              className="h-12 w-12 rounded-full"
            />
          </div>
          <div className="flex-col">
            <p className="text-text-secondary text-4xl">{stockData?.symbol}</p>
            <p className="text-text-disabled text-md">
              {stockData?.companyName} Nasdaq Stock Market
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col mt-6">
        <div>
          <p className="text-text-secondary text-sm">
            <span className="text-3xl text-text-secondary">
              {stockData?.price}
            </span>{" "}
            USD{" "}
            <span className="text-negative text-lg ml-4">
              {" "}
              {stockData?.change.toFixed(2)} (
              {stockData?.changePercentage.toFixed(2)}%)
            </span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-text-secondary">
            <span className="uppercase text-accent text-[10px] mr-2">
              Market Open
            </span>
            (as of 00:17 GMT+5:30){" "}
          </p>
          <div onClick={() => addStockDataWatchList(stockData?.symbol)}>
            <WatchListStar
              size={18}
              isInList={checkWatchList}
              isInWatchList={isInWatchList}
              setIsInWatchList={setIsInWatchList}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <div className="flex-col">
          <p className="text-text-secondary text-md">{ipoDate}</p>
          <p className="uppercase text-text-disabled text-xs">IPO Date</p>
        </div>
        <div className="flex-col">
          <p className="text-text-secondary text-md">
            {stockData?.beta.toFixed(2)}
          </p>
          <p className="uppercase text-text-disabled text-xs">beta</p>
        </div>
        <div className="flex-col">
          <p className="text-text-secondary text-md">
            {(stockData?.marketCap / 10 ** 12).toFixed(2)}T
          </p>
          <p className="uppercase text-text-disabled text-xs">market cap</p>
        </div>
        <div className="flex-col">
          <p className="text-text-secondary text-md">
            {stockData?.lastDividend.toFixed(2)}
          </p>
          <p className="uppercase text-text-disabled text-xs">last dividend</p>
        </div>
        <div className="flex-col">
          <p className="text-text-secondary text-md">{stockData?.sector}</p>
          <p className="uppercase text-text-disabled text-xs">Sector</p>
        </div>
      </div>
    </div>
  );
}

export default StockName;
