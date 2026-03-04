import { useQuery } from "@tanstack/react-query";
function useLatestNews() {
  const alphaVantageApiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

  const fetchNews = async () => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=financial_markets&apikey=${alphaVantageApiKey}`,
    );
    const data = await response.json();

    console.log(data);

    return data;
  };

  const { data: newsData, isLoading: newsLoadingData } = useQuery({
    queryKey: ["latestNews"],
    queryFn: () => fetchNews(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
  });

  return { newsData, newsLoadingData };
}

export default useLatestNews;
