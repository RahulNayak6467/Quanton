function StockPeersInfo({ stockPeer }) {
  const mktCap =
    stockPeer.mktCap > 10 ** 9
      ? stockPeer.mktCap > 10 ** 12
        ? `${(stockPeer.mktCap / 10 ** 12).toFixed(2)}T`
        : `${(stockPeer.mktCap / 10 ** 9).toFixed(2)}B`
      : `${(stockPeer.mktCap / 10 ** 6).toFixed(2)}M`;

  return (
    <div className="p-2 border-2 border-dashboard-border  flex-col rounded-md hover:bg-[#161B22] cursor-pointer transition-all duration-150">
      <div className="flex gap-2 items-center text-xl ">
        <img
          className="h-5 w-5 rounded-full "
          src={`https://img.logo.dev/ticker/${stockPeer.symbol}?token=pk_c_tteg2kSPKs1fwVTFOkTg&retina=true`}
          alt=""
        />
        <p className="text-md text-text-primary font-semibold">
          {stockPeer.symbol}
        </p>
      </div>
      <div className="">
        <p className="text-sm text-text-secondary font-semibold line-clamp-1">
          {" "}
          {stockPeer.companyName}
        </p>
      </div>
      <div className="flex gap-2">
        <span className="text-text-disabled text-sm">
          ${stockPeer.price.toFixed(2)}
        </span>
        <span className="text-text-disabled text-sm">{mktCap}</span>
      </div>
    </div>
  );
}

export default StockPeersInfo;
