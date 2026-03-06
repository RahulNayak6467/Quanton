import Loader from "@/Components/Loader";
import AnalystRating from "@/Components/StockDetail/AnalyastRating";
import StockDisplayChart from "@/Components/StockDetail/StockDisplayChart";
import StockInfo from "@/Components/StockDetail/StockInfo";
import StockName from "@/Components/StockDetail/StockName";
import StockNews from "@/Components/StockDetail/StockNews";
import StockProfile from "@/Components/StockDetail/StockProfile";
import useStockInfo from "@/CustomHooks/useStockInfo";
import { X, Search } from "lucide-react";

function StockDetail() {
  //   const mockResults = [
  //     { symbol: "AAPL", name: "Apple Inc.", exchange: "NASDAQ" },
  //     { symbol: "AAPLC", name: "Apple Inc. CDR", exchange: "NEO" },
  //     { symbol: "AAPL.BA", name: "Apple Inc.", exchange: "BCBA" },
  //   ];
  //   const mockResults = [];

  //   const { data: StockInfoData, isLoading } = useStockInfo();

  //   if (isLoading) {
  //     return <Loader />;
  //   }
  //   console.log(StockInfoData);

  return (
    <section className="pb-20">
      <div className="flex justify-center items-center h-15 relative">
        <Search
          size={20}
          className="text-text-disabled text-center absolute left-[30%] top-[45%] cursor-pointer hover:text-text-primary"
        />
        <input
          type="text"
          placeholder="Enter your favourite stock by company name or symbol..."
          className="text-lg text-text-disabled mt-4 border-[#30303D]  h-full focus-within:border-[#6E7681] mx-auto w-200 border-2 px-2 bg-dashboard-card focus:border-dashboard-page pl-12 rounded-full"
        />
        <X
          size={20}
          className="text-text-disabled absolute right-[30%] top-[45%] cursor-pointer hover:text-text-primary"
        />
      </div>

      <div className="flex items-stretch mt-10 gap-8 w-[90%] mx-auto">
        <StockName />
        <AnalystRating />
      </div>
      <div className="flex w-[90%] gap-8 mx-auto mt-10">
        <StockDisplayChart />
        <StockInfo />
      </div>
      <div className="flex w-[90%] gap-8 mx-auto mt-10">
        <StockNews />
        <StockProfile />
      </div>

      {/* Dropdown */}
      {/* <div className="flex justify-center">
        <div className="w-200 rounded-b-2xl border-2 border-t-0 border-[#30303D] bg-dashboard-card overflow-hidden">
          {mockResults?.length === 0 ? (
            <p className="text-[#8B949E] text-sm px-4 py-3">
              No results found.
            </p>
          ) : (
            mockResults?.map((stock) => (
              <div
                key={stock.symbol}
                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#21262D] transition-colors duration-150"
              >
                <div>
                  <span className="text-white font-medium">{stock.symbol}</span>
                  <span className="text-[#8B949E] text-sm ml-2">
                    {stock.name}
                  </span>
                </div>
                <span className="text-[#6E7681] text-xs">{stock.exchange}</span>
              </div>
            ))
          )}
        </div>
      </div> */}
    </section>
  );
}

export default StockDetail;
