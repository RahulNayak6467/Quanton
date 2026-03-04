import { useQuery } from "@tanstack/react-query";
const apiKey = import.meta.env.VITE_FMP_API_KEY;

function useStockData() {
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
  return { stockData, isLoading };
}

export default useStockData;
