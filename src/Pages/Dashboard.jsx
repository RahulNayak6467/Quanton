import Nav from "@/Components/DashboardPage/Nav";
import Navbar from "@/Components/Navbar";
import Loader from "@/Components/Loader";
import MiniChart from "@/Components/DashboardPage/MiniChart";
import CandlestickChart from "@/Components/Charts/CandleStick";
import { TrendingDown, TrendingUp } from "lucide-react";
import useStockData from "@/CustomHooks/UseStockData";
import useStockHistory from "@/CustomHooks/useStockHistory";
import useStockPeriod from "@/CustomHooks/useStockPeriod";
import Tables from "@/Components/DashboardPage/Tables";

import LatestNews from "@/Components/DashboardPage/LatestNews";
import useStockNews from "@/CustomHooks/useStockNews";

function Dashboard() {
  const { stockData, isLoading } = useStockData();
  const { data, isLoadingChart } = useStockHistory();
  const { candleStickData, HistoryLoader, currentBtn, handleCheckHistory } =
    useStockPeriod("^IXIC");

  //   const { newsData, newsLoadingData } = useLatestNews();
  const { data: newsData, isLoading: newsLoadingData } = useStockNews();
  const mockGainers = [
    { symbol: "NVDA", price: 875.4, changesPercentage: 8.24 },
    { symbol: "META", price: 512.3, changesPercentage: 5.67 },
    { symbol: "AMD", price: 178.2, changesPercentage: 4.91 },
    { symbol: "TSLA", price: 245.8, changesPercentage: 4.35 },
    { symbol: "MSFT", price: 415.6, changesPercentage: 3.78 },
    { symbol: "AAPL", price: 189.9, changesPercentage: 3.12 },
    { symbol: "GOOGL", price: 175.4, changesPercentage: 2.89 },
    { symbol: "AMZN", price: 198.7, changesPercentage: 2.54 },
    { symbol: "NFLX", price: 632.1, changesPercentage: 2.31 },
    { symbol: "CRM", price: 298.5, changesPercentage: 1.98 },
  ];

  const mockLosers = [
    { symbol: "INTC", price: 42.3, changesPercentage: -6.84 },
    { symbol: "PYPL", price: 63.2, changesPercentage: -5.21 },
    { symbol: "SNAP", price: 11.4, changesPercentage: -4.67 },
    { symbol: "UBER", price: 71.8, changesPercentage: -3.92 },
    { symbol: "LYFT", price: 14.2, changesPercentage: -3.45 },
    { symbol: "SPOT", price: 312.4, changesPercentage: -2.98 },
    { symbol: "HOOD", price: 18.6, changesPercentage: -2.67 },
    { symbol: "COIN", price: 198.3, changesPercentage: -2.34 },
    { symbol: "RBLX", price: 38.9, changesPercentage: -1.89 },
    { symbol: "PLTR", price: 24.7, changesPercentage: -1.54 },
  ];

  if (newsLoadingData || isLoading || isLoadingChart) {
    return <Loader />;
  }

  console.log(data);

  if (!stockData?.length || !data?.length) {
    return <Loader />;
  }

  if (HistoryLoader) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#30363D] border-t-green-500 rounded-full animate-spin" />
      </div>
    );
  }
  console.log(newsData);

  return (
    <section className="py-6 pb-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-8 lg:px-20 ">
        <MiniChart
          stockData={stockData[0][0]}
          data={data[0]}
          colors={{
            color: "#22c55e",
          }}
        />
        <MiniChart
          stockData={stockData[1][0]}
          data={data[1]}
          colors={{
            color: "#38bdf8",
          }}
          widthBar={200}
          heightBar={60}
        />
        <MiniChart
          stockData={stockData[2][0]}
          data={data[2]}
          colors={{
            color: "#eab308",
          }}
          widthBar={200}
          heightBar={60}
        />
        <MiniChart
          stockData={stockData[3][0]}
          data={data[3]}
          colors={{ color: "#a78bfa" }}
          widthBar={200}
          heightBar={60}
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 px-4 sm:px-8 lg:px-20 gap-7 mt-5">
        <div className="xl:col-span-9 grid-cols-1 gap-y-4 min-w-0">
          <div className="border-2 border-dashboard-border  bg-dashboard-card  rounded-2xl xl:-mr-0.5 p-2">
            <div>
              <div className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center p-3 sm:p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 min-w-0">
                  <h1 className="font-extrabold text-2xl sm:text-4xl px-1 py-0.5 text-text-secondary break-words">
                    {stockData[1][0]?.name}
                  </h1>
                  <span className="text-lg sm:text-xl text-text-secondary shrink-0">
                    {stockData[1][0]?.price?.toFixed(2)}
                  </span>
                  <div className="flex gap-2 items-center shrink-0">
                    <span
                      className={
                        stockData[1][0]?.changePercentage?.toFixed(2) > 0
                          ? "text-lg sm:text-xl text-positive"
                          : "text-lg sm:text-xl text-negative"
                      }
                    >
                      {stockData[1][0]?.changePercentage?.toFixed(2)}%
                    </span>
                    {stockData[1][0]?.changePercentage > 0 ? (
                      <TrendingUp className="text-positive" />
                    ) : (
                      <TrendingDown className="text-negative" />
                    )}
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
              <div className="p-6 border-dashboard-border bg-dashboard-page m-4  border-2 rounded-2xl">
                <CandlestickChart data={candleStickData} className="p-6" />
              </div>
            </div>
          </div>
          <div className="border-2 border-dashboard-border    rounded-xl mt-4">
            <div className="border-b border-b-dashboard-border bg-dashboard-card px-6 py-4 rounded-2xl">
              <h1 className="text-positive text-3xl  uppercase font-bold border-b border-b-[#21262D] ">
                Latest News
              </h1>
              {newsData?.slice(0, 5)?.map((news, index) => (
                <LatestNews data={news} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 xl:col-span-3 min-w-0">
          <div className="border-2 border-dashboard-border h-fit rounded-xl xl:-ml-1">
            <div className="p-6 flex items-center justify-between  bg-dashboard-card rounded-2xl">
              <h1 className="uppercase text-xl font-bold text-left text-positive">
                Top Gainers
              </h1>
              <p className="text-sm text-text-secondary">
                <span className="text-positive">●</span> Market Open{" "}
              </p>
            </div>
            <div className="overflow-x-auto rounded-b-2xl">
              <Tables
                color={"text-positive"}
                increasing={true}
                data={mockGainers}
              />
            </div>
          </div>
          <div className="border-2 border-dashboard-border h-fit rounded-xl xl:-ml-1">
            <div className="p-6 flex items-center justify-between bg-dashboard-card rounded-2xl">
              <h1 className="uppercase text-xl font-bold text-left text-negative ">
                Top losers
              </h1>
              <p className="text-sm text-text-secondary">
                <span className="text-positive">●</span> Market Open{" "}
              </p>
            </div>
            <div className="overflow-x-auto rounded-b-2xl">
              <Tables
                color={"text-negative"}
                increasing={false}
                data={mockLosers}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
