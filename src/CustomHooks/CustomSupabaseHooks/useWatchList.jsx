import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/Supabase-client/SupabaseClient";

function useWatchList() {
  const twelveDataApiKey = import.meta.env.VITE_TWELVE_DATA_API_KEY;
  const getWatchListData = async () => {
    const { data, error } = await supabase.from("WatchList").select("*");
    if (error) {
      throw new Error("An error occured");
    }
    console.log(data);

    const symbolData = data.map((el) => el.Symbol).join(",");

    const response = await fetch(
      `https://api.twelvedata.com/quote?symbol=${symbolData}&apikey=${twelveDataApiKey}`,
    );

    if (!response.ok) {
      console.log("An error occured");
    }

    const watchListData = await response.json();

    console.log(watchListData);

    return watchListData;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["WatchList"],
    queryFn: () => getWatchListData(),
    staleTime: Infinity,
  });

  return { data, isLoading, isError };
}

export default useWatchList;
