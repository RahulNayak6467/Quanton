// import { supabase } from "@/Supabase-client/SupabaseClient";
// import { useQuery } from "@tanstack/react-query";

// function useWatchList2() {
//   const fetchWatchList = async () => {
//     const { data, error } = await supabase.from("WatchList").select("*");
//     if (error) {
//       console.log(error.message);
//     }
//     console.log(data);

//     return data;
//   };

//   const { data, isLoading } = useQuery({
//     queryKey: ["WatchListStocksData"],
//     queryFn: () => fetchWatchList(),
//     staleTime: Infinity,
//     gcTime: 60 * 60 * 1000,
//   });

//   return { data, isLoading };
// }

// export default useWatchList2;
