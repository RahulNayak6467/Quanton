import { useQuery } from "@tanstack/react-query";

function useStockInfo() {
  const apiKey = import.meta.env.VITE_FMP_API_KEY;
  const getStockInfo = async () => {
    try {
      const response = await Promise.all([
        fetch(
          `https://financialmodelingprep.com/stable/quote?symbol=AAPL&apikey=${apiKey}`,
        ),
        fetch(
          `https://financialmodelingprep.com/stable/profile?symbol=AAPL&apikey=${apiKey}`,
        ),
      ]);

      if (!response.ok) {
        console.log(`An error occured, ${response.status}`);
      }

      const data = await Promise.all(response.map((res) => res.json()));

      console.log(data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["IndividualStockInfo"],
    queryFn: () => getStockInfo(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
  });

  return { data, isLoading };
}

export default useStockInfo;
