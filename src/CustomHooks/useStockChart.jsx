import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchContext } from "@/Context/StockSearch";

function useStockChart() {
  const { debouncedQuery } = useSearchContext();
  const [checkHistory, setCheckHistory] = useState(300);
  const [currentBtn, setCurrentBtn] = useState(4);

  const handleCheckHistory = (dataHistory, currentBtnNumber) => {
    setCheckHistory(dataHistory);
    setCurrentBtn(currentBtnNumber);
  };

  const fetchStockHistoryData = async (checkHistory) => {
    const to = new Date().toISOString().split("T")[0];
    const from = new Date();
    from.setDate(from.getDate() - Math.trunc(checkHistory % 30));
    from.setMonth(from.getMonth() - (Math.trunc(checkHistory / 30) % 12));
    from.setFullYear(from.getFullYear() - Math.trunc(checkHistory / 365));
    const fromStr = from.toISOString().split("T")[0];
    try {
      const response = await fetch(
        ` https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=${debouncedQuery || "AAPL"}&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      );

      if (!response.ok) {
        // console.log(`An error occured ${response.status}`);
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
      // console.log(err.message);
    }
  };

  const { data: chartData, isLoading: chartLoader } = useQuery({
    queryKey: ["getStockHistory", checkHistory, debouncedQuery],
    queryFn: () => fetchStockHistoryData(checkHistory),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60, // keep in cache for 1 hour
    retry: false, // disable auto retry
    refetchOnWindowFocus: false,
    enabled: !!debouncedQuery,
  });

  return { chartData, chartLoader, currentBtn, handleCheckHistory };
}

export default useStockChart;
