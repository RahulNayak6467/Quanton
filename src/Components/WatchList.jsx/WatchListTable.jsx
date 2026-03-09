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
import {
  MoreHorizontalIcon,
  TrendingUp,
  TrendingDown,
  Trash2,
} from "lucide-react";

const watchlist = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 257.46,
    change: -2.83,
    changePercentage: -1.09,
    exchange: "NASDAQ",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 408.96,
    change: 2.21,
    changePercentage: 0.54,
    exchange: "NASDAQ",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 298.52,
    change: -0.68,
    changePercentage: -0.23,
    exchange: "NASDAQ",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 177.82,
    change: 3.67,
    changePercentage: 2.11,
    exchange: "NASDAQ",
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc.",
    price: 644.86,
    change: 8.52,
    changePercentage: 1.34,
    exchange: "NASDAQ",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 198.63,
    change: -1.23,
    changePercentage: -0.62,
    exchange: "NASDAQ",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 396.73,
    change: -8.82,
    changePercentage: -2.17,
    exchange: "NASDAQ",
  },
  {
    symbol: "BRK.B",
    name: "Berkshire Hathaway",
    price: 483.21,
    change: 1.45,
    changePercentage: 0.3,
    exchange: "NYSE",
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase",
    price: 234.56,
    change: 3.12,
    changePercentage: 1.35,
    exchange: "NYSE",
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    price: 152.34,
    change: -0.87,
    changePercentage: -0.57,
    exchange: "NYSE",
  },
  {
    symbol: "V",
    name: "Visa Inc.",
    price: 312.45,
    change: 1.98,
    changePercentage: 0.64,
    exchange: "NYSE",
  },
  {
    symbol: "WMT",
    name: "Walmart Inc.",
    price: 98.76,
    change: 0.54,
    changePercentage: 0.55,
    exchange: "NYSE",
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil Corporation",
    price: 108.43,
    change: -1.12,
    changePercentage: -1.02,
    exchange: "NYSE",
  },
  {
    symbol: "UNH",
    name: "UnitedHealth Group",
    price: 512.67,
    change: 4.32,
    changePercentage: 0.85,
    exchange: "NYSE",
  },
  {
    symbol: "MA",
    name: "Mastercard Inc.",
    price: 498.32,
    change: 2.67,
    changePercentage: 0.54,
    exchange: "NYSE",
  },
  {
    symbol: "PG",
    name: "Procter & Gamble",
    price: 162.54,
    change: -0.43,
    changePercentage: -0.26,
    exchange: "NYSE",
  },
  {
    symbol: "HD",
    name: "Home Depot Inc.",
    price: 387.21,
    change: 3.45,
    changePercentage: 0.9,
    exchange: "NYSE",
  },
  {
    symbol: "BAC",
    name: "Bank of America",
    price: 43.67,
    change: 0.32,
    changePercentage: 0.74,
    exchange: "NYSE",
  },
  {
    symbol: "DIS",
    name: "Walt Disney Company",
    price: 112.34,
    change: -1.56,
    changePercentage: -1.37,
    exchange: "NYSE",
  },
  {
    symbol: "NFLX",
    name: "Netflix Inc.",
    price: 698.45,
    change: 12.34,
    changePercentage: 1.8,
    exchange: "NASDAQ",
  },
];

function WatchListTable() {
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
        {watchlist.map((stock) => (
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
              ${stock.price.toFixed(2)}
            </TableCell>
            <TableCell
              className={stock.change > 0 ? "text-green-400" : "text-red-400"}
            >
              {stock.change > 0 ? "+" : ""}
              {stock.change.toFixed(2)}
            </TableCell>
            <TableCell>
              <div
                className={`flex items-center justify-between gap-1 ${stock.changePercentage > 0 ? "text-green-400" : "text-red-400"}`}
              >
                <div className="text-center w-full flex items-center justify-center gap-2">
                  {stock.changePercentage > 0 ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  {stock.changePercentage > 0 ? "+" : ""}
                  {stock.changePercentage.toFixed(2)}%
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
