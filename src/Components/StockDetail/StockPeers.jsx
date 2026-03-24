import useStockPeers from "@/CustomHooks/useStockPeers";
import { Loader } from "lucide-react";
import StockPeersInfo from "./StockPeersInfo";

function StockPeers() {
  const { data, isLoading } = useStockPeers();

  if (isLoading) {
    return <></>;
  }

  return (
    <section className="border-2 border-dashboard-border bg-dashboard-card p-6 w-full lg:w-[65%] rounded-md min-w-0">
      <h1 className="text-accent font-bold text-xl mb-2">Similar Stocks</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4">
        {data.map((peer) => (
          <StockPeersInfo key={peer.symbol} stockPeer={peer} />
        ))}
      </div>
    </section>
  );
}

export default StockPeers;
