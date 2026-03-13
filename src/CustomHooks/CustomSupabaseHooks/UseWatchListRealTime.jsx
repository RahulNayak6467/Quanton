import { useEffect } from "react";
import { supabase } from "@/Supabase-client/SupabaseClient";
import { useQueryClient } from "@tanstack/react-query";

function useWatchListRealTime() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const channel = supabase.channel("realtime-WatchList");

    channel
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "WatchList",
        },
        () => {
          queryClient.invalidateQueries(["WatchList"]);
        },
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [queryClient]);
}

export default useWatchListRealTime;
