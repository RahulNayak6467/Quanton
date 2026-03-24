import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loader from "../Loader";
import { TrendingDown, TrendingUp } from "lucide-react";
import WatchListStar from "../WatchList.jsx/WatchListStar";
import useWatchList from "@/CustomHooks/useWatchList";

function Tables({ color, increasing, data }) {
  const { data: watchlistData, isLoading: watchListLoading } = useWatchList();
  if (watchListLoading) {
    return <Loader />;
  }

  const stockSymbol = Object.keys(watchlistData);

  //   const checkWatchList = stockSymbol.some((el) => el === );
  const handleStockWatchList = (stock) => {
    return stockSymbol.some((el) => el === stock.symbol);
  };

  return (
    <Table className=" mx-auto h-140 bg-dashboard-card p-2">
      <TableHeader>
        <TableRow>
          <TableHead className="border-r border-t border-t-dashboard-border  text-text-secondary text-xs border-r-dashboard-border uppercase">
            Logo
          </TableHead>
          <TableHead className="border-r border-t  border-t-dashboard-border   text-text-secondary text-xs border-r-dashboard-border uppercase">
            Symbol
          </TableHead>
          <TableHead className="border-r border-t  border-t-dashboard-border   text-text-secondary text-xs border-r-dashboard-border  uppercase">
            Price
          </TableHead>
          <TableHead className="border-r border-t  border-t-dashboard-border   text-text-secondary text-xs border-r-dashboard-border  uppercase">
            Change
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((gainers) => (
          <TableRow key={gainers.symbol}>
            <TableCell className="font-medium text-text-secondary text-center border-r border-r-dashboard-border">
              {/* <img
                src={`https://financialmodelingprep.com/image-stock/${gainers.symbol}.png`}
                alt={gainers.symbol}
                className="w-7 h-7 rounded-full ml-7 mt-2"
              /> */}
              {/* // `https://img.logo.dev/ticker/${stock.symbol}?token=YOUR_KEY` */}
              <img
                src={`https://img.logo.dev/ticker/${gainers.symbol}?token=pk_c_tteg2kSPKs1fwVTFOkTg&retina=true`}
                className="h-8 w-8 ml-7 rounded-full"
              />
            </TableCell>
            <TableCell className="border-r  text-text-secondary text-center border-r-dashboard-border">
              {gainers.symbol}
            </TableCell>
            <TableCell className="border-r  text-text-secondary text-center border-r-dashboard-border">
              ${gainers.price.toFixed(2)}
            </TableCell>
            <TableCell
              className={`border-r flex h-full justify-center items-center gap-1 w-full  ${color} text-center border-r-dashboard-border`}
            >
              {gainers.changesPercentage.toFixed(2)}%
              {increasing ? (
                <TrendingUp size={16} className={color} />
              ) : (
                <TrendingDown size={16} className={color} />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Tables;
