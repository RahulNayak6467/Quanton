import Nav from "@/Components/DashboardPage/Nav";
import Navbar from "@/Components/Navbar";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/Components/Loader";
import MiniChart from "@/Components/DashboardPage/MiniChart";
import CandlestickChart from "@/Components/Charts/CandleStick";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
const apiKey = import.meta.env.VITE_FMP_API_KEY;

function Dashboard() {
  const [checkHistory, setCheckHistory] = useState(300);
  const [currentBtn, setCurrentBtn] = useState(4);

  const handleCheckHistory = (dataHistory, currentBtnNumber) => {
    setCheckHistory(dataHistory);
    setCurrentBtn(currentBtnNumber);
  };

  const fetchStockData = async () => {
    const response = await Promise.all([
      fetch(
        `https://financialmodelingprep.com/stable/quote?symbol=^GSPC&apikey=${apiKey}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/quote?symbol=^IXIC&apikey=${apiKey}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/quote?symbol=^RUT&apikey=${apiKey}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/quote?symbol=^FTSE&apikey=${apiKey}`,
      ),
    ]);

    const data = await Promise.all(response.map((res) => res.json()));

    return data;
  };

  const { data: stockData, isLoading } = useQuery({
    queryKey: ["IndexesName"],
    queryFn: () => fetchStockData(),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60, // keep in cache for 1 hour
    retry: false, // disable auto retry
    refetchOnWindowFocus: false,
  });

  const fetchData = async () => {
    const to = new Date().toISOString().split("T")[0];
    const from = new Date();
    // from.setDate(from.getDate() - Math.trunc(checkHistory % 30));
    // from.setMonth(from.getMonth() - (Math.trunc(checkHistory / 30) % 12));
    // from.setFullYear(from.getFullYear() - Math.trunc(checkHistory / 365));
    from.setMonth(from.getMonth() - 6);
    const fromStr = from.toISOString().split("T")[0];
    const res = await Promise.all([
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^GSPC&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^IXIC&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^RUT&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^FTSE&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      ),
    ]);
    // if (!res.ok) {
    //   console.log("An error occured", res.status);
    //   return;
    // }
    const data = await Promise.all(res.map((r) => r.json()));

    console.log(data);

    const requiredData = data.map((el) =>
      el.reverse().map((d) => {
        return {
          time: d.date,
          value: d.close,
        };
      }),
    );

    // const candlestickSeries = data[0].map((d) => ({
    //   time: d.date,
    //   open: d.open,
    //   high: d.high,
    //   low: d.low,
    //   close: d.close,
    //   volume: d?.volume,
    // }));
    // const candlestickSeries = data[0].map((el) =>
    //   el.reverse().map((d) => {
    //     return {
    //       time: d.date,
    //       open: d.open,
    //       high: d.high,
    //       low: d.low,
    //       close: d.close,
    //     };
    //   }),
    // );

    console.log(requiredData);
    // console.log(candlestickSeries);
    return requiredData;
  };

  const { data, isLoading: isLoadingChart } = useQuery({
    queryKey: ["IndexesHistory"],
    queryFn: () => fetchData(),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60, // keep in cache for 1 hour
    retry: false, // disable auto retry
    refetchOnWindowFocus: false,
  });
  const fetchHistoryData = async (checkHistory) => {
    const to = new Date().toISOString().split("T")[0];
    const from = new Date();
    from.setDate(from.getDate() - Math.trunc(checkHistory % 30));
    from.setMonth(from.getMonth() - (Math.trunc(checkHistory / 30) % 12));
    from.setFullYear(from.getFullYear() - Math.trunc(checkHistory / 365));
    const fromStr = from.toISOString().split("T")[0];
    try {
      const response = await fetch(
        ` https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^IXIC&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      );

      if (!response.ok) {
        console.log(`An error occured ${response.status}`);
      }
      const data = await response.json();

      const candlestickSeries = data.reverse().map((d) => ({
        time: d.date,
        open: d.open,
        high: d.high,
        low: d.low,
        close: d.close,
        volume: d?.volume,
      }));
      return candlestickSeries;
    } catch (err) {
      console.log(err.message);
    }
  };

  const { data: candleStickData, isLoading: HistoryLoader } = useQuery({
    queryKey: ["getIndexHistory", checkHistory],
    queryFn: () => fetchHistoryData(checkHistory),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60, // keep in cache for 1 hour
    retry: false, // disable auto retry
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isLoadingChart) {
    return <Loader />;
  }
  if (HistoryLoader) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#30363D] border-t-green-500 rounded-full animate-spin" />
      </div>
    );
  }
  console.log(data);
  return (
    <div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20">
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
      <div className="grid grid-cols-20 px-20 gap-7 mt-5">
        <div className="col-span-15 grid-cols-1 gap-y-4">
          <div className="border-2 border-[#21262D]  bg-[#0D1117]  rounded-2xl -mr-0.5 p-2">
            <div>
              <div className="flex justify-between items-center  p-4">
                <div className="flex gap-4 items-center">
                  <h1 className="font-extrabold text-4xl px-1 py-0.5 text-text-secondary">
                    {stockData[1][0]?.name}
                  </h1>
                  <span className="text-xl text-text-secondary">
                    {stockData[1][0]?.price?.toFixed(2)}
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
                    {stockData[1][0]?.changePercentage > 0 ? (
                      <TrendingUp className="text-positive" />
                    ) : (
                      <TrendingDown className="text-negative" />
                    )}
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
              <div className="p-6 border-[#21262D] m-4  border-2 rounded-2xl">
                <CandlestickChart data={candleStickData} className="p-6" />
              </div>
            </div>
          </div>
          {/* <div className="border-2 border-accent  h-70  rounded-xl -mr-0.5"></div> */}
        </div>
        <div className="grid grid-cols-1 gap-y-4 col-span-5">
          <div className="border-2 border-red-500  h-100 rounded-xl -ml-1"></div>
          <div className="border-2 border-red-500 h-100 rounded-xl -ml-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
