import { useSearchContext } from "@/Context/StockSearch";
import { useQuery } from "@tanstack/react-query";

const apiKey = import.meta.env.VITE_FMP_API_KEY;

function useStockPeers() {
  const { debouncedQuery } = useSearchContext();

  const fetchStockPeers = async () => {
    try {
      const response = await fetch(
        // `https://financialmodelingprep.com/stable/stock-peers?symbol=${debouncedQuery ?? "AAPL"}&apikey=${apiKey}`,
        ` https://financialmodelingprep.com/stable/stock-peers?symbol=${debouncedQuery || "AAPL"}&apikey=${apiKey}`,
      );
      if (!response.ok) {
        // console.log(`An error occured, ${response.status}`);
      }

      const data = await response.json();

      // console.log(data);

      return data;
    } catch (error) {
      // console.log(error.message);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["StockPeers", debouncedQuery],
    queryFn: () => fetchStockPeers(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    enabled: !!debouncedQuery,
  });

  return { data, isLoading };
}

export default useStockPeers;
