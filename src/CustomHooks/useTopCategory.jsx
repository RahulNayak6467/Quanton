import { useQuery } from "@tanstack/react-query";

function useTopCategories() {
  const fetchTopGainers = async () => {
    const response = await fetch(
      `https://financialmodelingprep.com/stable/biggest-gainers?apikey=q4Ku7CGedFTb5gyQ9AZhpaKjCo7ICL3p`,
    );
    const data = await response.json();
    const topGainers = data.slice(0, 5);

    return topGainers;
  };

  const { data: PositiveGain, isLoading: positiveLoading } = useQuery({
    queryKey: ["TopGainersStock"],
    queryFn: () => fetchTopGainers(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
  });

  const fetchTopLosers = async () => {
    const response = await fetch(
      `https://financialmodelingprep.com/stable/biggest-losers?apikey=q4Ku7CGedFTb5gyQ9AZhpaKjCo7ICL3p`,
    );
    const data = await response.json();
    const topGainers = data.slice(0, 5);

    return topGainers;
  };

  const { data: NegativeGain, isLoading: negativeLoading } = useQuery({
    queryKey: ["TopLosersStock"],
    queryFn: () => fetchTopLosers(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
  });

  return { PositiveGain, NegativeGain, positiveLoading, negativeLoading };
}

export default useTopCategories;
