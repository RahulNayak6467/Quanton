import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/Supabase-client/SupabaseClient";

function useWatchList() {
  const getWatchListData = async () => {
    const { data, error } = await supabase.from("WatchList").select("*");
    if (error) throw new Error("An error occured");

    const symbols = data.map((el) => el.Symbol);
    console.log("Symbols:", symbols);

    // const session = await supabase.auth.getSession();
    // const token = session.data.session?.access_token;
    const session = await supabase.auth.getSession();
    const token = session.data.session?.access_token;
    console.log("Token:", token); // check if this is undefined

    const { data: quotesData, error: fnError } =
      await supabase.functions.invoke("watchlist-quotes", {
        body: { symbols },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (fnError) throw new Error("Failed to fetch quotes");

    console.log("Quotes:", quotesData);
    return quotesData;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["WatchList"],
    queryFn: () => getWatchListData(),
    staleTime: Infinity,
  });

  return { data, isLoading, isError };
}

export default useWatchList;
