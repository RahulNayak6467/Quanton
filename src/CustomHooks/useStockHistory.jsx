import { useQuery } from "@tanstack/react-query";

const apiKey = import.meta.env.VITE_FMP_API_KEY;

function useStockHistory() {
  const fetchData = async () => {
    const to = new Date().toISOString().split("T")[0];
    const from = new Date();
    from.setMonth(from.getMonth() - 6);
    const fromStr = from.toISOString().split("T")[0];
    const res = await Promise.all([
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^GSPC&from=${fromStr}&to=${to}&apikey=${apiKey}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^IXIC&from=${fromStr}&to=${to}&apikey=${apiKey}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^RUT&from=${fromStr}&to=${to}&apikey=${apiKey}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^FTSE&from=${fromStr}&to=${to}&apikey=${apiKey}`,
      ),
    ]);

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
  return { data, isLoadingChart };
}

export default useStockHistory;
