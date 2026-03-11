import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useWatchList from "@/CustomHooks/CustomSupabaseHooks/useWatchList";
import { useQuery } from "@tanstack/react-query";

import {
  MoreHorizontalIcon,
  TrendingUp,
  TrendingDown,
  Trash2,
} from "lucide-react";
import Loader from "../Loader";

function WatchListTable() {
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

  const watchListStock = Object.values(watchlistData);
  return (
    <Table className="w-7xl mx-auto text-text-primary">
      <TableHeader>
        <TableRow>
          <TableHead>Logo</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Change %</TableHead>
          <TableHead>Exchange</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {watchListStock.map((stock) => (
          <TableRow
            key={stock.symbol}
            className=" hover:bg-[#161B22] transition-all cursor-pointer"
          >
            <TableCell>
              <img
                src={`https://img.logo.dev/ticker/${stock.symbol}?token=pk_c_tteg2kSPKs1fwVTFOkTg&retina=true`}
                alt={stock.symbol}
                className="w-6 h-6 rounded-full relative left-[30%]"
                onError={(e) => (e.target.style.display = "none")}
              />
            </TableCell>
            <TableCell className="font-bold text-text-primary  text-center ">
              <span className="text-center w-full">{stock.symbol}</span>
            </TableCell>
            <TableCell className="text-[#8B949E]">{stock.name}</TableCell>
            <TableCell className="text-text-primary font-medium">
              ${Number(stock.close).toFixed(2)}
            </TableCell>
            <TableCell
              className={
                Number(stock.change) > 0 ? "text-green-400" : "text-red-400"
              }
            >
              {Number(stock.change) > 0 ? "+" : ""}
              {Number(stock.change).toFixed(2)}
            </TableCell>
            <TableCell>
              <div
                className={`flex items-center justify-between gap-1 ${Number(stock.percent_change) > 0 ? "text-green-400" : "text-red-400"}`}
              >
                <div className="text-center w-full flex items-center justify-center gap-2">
                  {Number(stock.percent_change) > 0 ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  {Number(stock.percent_change) > 0 ? "+" : ""}
                  {Number(stock.percent_change).toFixed(2)}%
                </div>
              </div>
            </TableCell>
            <TableCell className="text-[#6E7681]">{stock.exchange}</TableCell>
            <TableCell className="text-center">
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreHorizontalIcon />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
              <div className="mx-auto ">
                <Trash2
                  size={18}
                  className="relative left-[35%] cursor-pointer opacity-80 hover:opacity-100"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default WatchListTable;
