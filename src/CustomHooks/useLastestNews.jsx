import { useSearchContext } from "@/Context/StockSearch";
import { useQuery } from "@tanstack/react-query";
function useLatestNews() {
  const { debouncedQuery } = useSearchContext();
  const alphaVantageApiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

  const fetchNews = async () => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${debouncedQuery || "AAPL"}&limit=10&apikey=${alphaVantageApiKey}`,
    );
    const data = await response.json();

    // console.log(data);

    return data;
  };

  const { data: newsData, isLoading: newsLoadingData } = useQuery({
    queryKey: ["latestNews", debouncedQuery],
    queryFn: () => fetchNews(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    enabled: !!debouncedQuery,
  });

  return { newsData, newsLoadingData };
}

export default useLatestNews;
