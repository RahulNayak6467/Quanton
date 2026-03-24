import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useWatchList from "@/CustomHooks/useWatchList";
import { TrendingUp, TrendingDown, Trash2 } from "lucide-react";
import { supabase } from "@/Supabase-client/SupabaseClient";
import useWatchListRealTime from "@/CustomHooks/CustomSupabaseHooks/UseWatchListRealTime";

function WatchListTable() {
  useWatchListRealTime();
  const { data: watchlistData, isLoading, isError } = useWatchList();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#30363D] border-t-green-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  console.log(watchlistData);

  const watchListStock = Object.values(watchlistData);

  const deleteFromWatchList = async (stock) => {
    const { data, error } = await supabase
      .from("WatchList")
      .delete()
      .eq("Symbol", stock.ticker);
    if (error) {
      throw new Error("An error occured");
    }
    console.log(data);
  };

  return (
    <Table className="w-full min-w-[560px] md:min-w-0 mx-auto text-text-primary">
      <TableHeader>
        <TableRow>
          <TableHead>Logo</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Change %</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {watchListStock?.map((stock) => {
          const change = stock.tngoLast - stock.prevClose;
          const percentChange = (change / stock.prevClose) * 100;

          return (
            <TableRow
              key={stock.ticker}
              className="hover:bg-[#161B22] transition-all cursor-pointer"
            >
              <TableCell>
                <img
                  src={`https://img.logo.dev/ticker/${stock.ticker}?token=pk_c_tteg2kSPKs1fwVTFOkTg&retina=true`}
                  alt={stock.ticker}
                  className="w-6 h-6 rounded-full relative left-[37%]"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </TableCell>
              <TableCell className="font-bold text-text-primary text-center">
                <span className="text-center w-full">{stock.ticker}</span>
              </TableCell>
              <TableCell className="text-text-primary font-medium">
                ${Number(stock.tngoLast).toFixed(2)}
              </TableCell>
              <TableCell
                className={change > 0 ? "text-green-400" : "text-red-400"}
              >
                {change > 0 ? "+" : ""}
                {change.toFixed(2)}
              </TableCell>
              <TableCell>
                <div
                  className={`flex items-center justify-between gap-1 ${
                    percentChange > 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  <div className="text-center w-full flex items-center justify-center gap-2">
                    {percentChange > 0 ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    {percentChange > 0 ? "+" : ""}
                    {percentChange.toFixed(2)}%
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-center">
                <div className="mx-auto">
                  <Trash2
                    onClick={() => deleteFromWatchList(stock)}
                    size={18}
                    className="relative left-[35%] cursor-pointer opacity-80 hover:opacity-100"
                  />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default WatchListTable;
