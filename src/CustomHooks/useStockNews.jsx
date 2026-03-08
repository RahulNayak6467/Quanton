import { useSearchContext } from "@/Context/StockSearch";
import { useQuery } from "@tanstack/react-query";

const finhubbApiKey = import.meta.env.VITE_FINNHUB_API_KEY;

function useStockNews() {
  //   const now = new Date();
  //   const to = now.toISOString().split("T")[0];
  //   const from = new Date(now - 5 * 24 * 60 * 60 * 1000)
  //     .toISOString()
  //     .split("T")[0]
  //     .toISOString()
  //     .split("T")[0];

  const now = new Date();
  const to = now.toISOString().split("T")[0];
  const from = new Date(now - 5 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const { debouncedQuery } = useSearchContext();

  // console.log(debouncedQuery);

  const fetchStockNews = async () => {
    // console.log(debouncedQuery);
    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/company-news?symbol=${debouncedQuery || "AAPL"}&from=${from}&to=${to}&token=${finhubbApiKey}`,
      );

      if (!response.ok) {
        console.log("An error occured", response.status);
      }
      const data = await response.json();

      // console.log(data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["FetchStockNews", debouncedQuery],
    queryFn: () => fetchStockNews(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    enabled: !!debouncedQuery,
  });

  return { data, isLoading };
}

export default useStockNews;
