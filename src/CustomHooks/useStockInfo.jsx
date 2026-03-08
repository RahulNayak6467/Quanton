import { useSearchContext } from "@/Context/StockSearch";
import { useQuery } from "@tanstack/react-query";

function useStockInfo() {
  const { debouncedQuery } = useSearchContext();
  const apiKey = import.meta.env.VITE_FMP_API_KEY;
  const getStockInfo = async () => {
    try {
      const responses = await Promise.all([
        fetch(
          `https://financialmodelingprep.com/stable/quote?symbol=${debouncedQuery || "AAPL"}&apikey=${apiKey}`,
        ),
        fetch(
          `https://financialmodelingprep.com/stable/profile?symbol=${debouncedQuery || "AAPL"}&apikey=${apiKey}`,
        ),
      ]);

      responses.forEach((res) => {
        if (!res.ok) {
          // console.log(`An error occured, ${res.status}`);
        }
      });

      const data = await Promise.all(responses.map((res) => res.json()));

      // console.log(data);

      return data;
    } catch (error) {
      // console.log(error.message);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["IndividualStockInfo", debouncedQuery],
    queryFn: () => getStockInfo(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    enabled: !!debouncedQuery,
  });

  return { data, isLoading };
}

export default useStockInfo;
