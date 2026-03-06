function StockName() {
  return (
    <div className="border-2 border-dashboard-border bg-dashboard-card  p-6  w-[30%] rounded-md  ">
      {/* // <div className="border-2 border-dashboard-border p-6 mt-10 w rounded-md w-[90%] mx-auto "> */}
      <div className="flex gap-4">
        <div>
          <img
            src="https://financialmodelingprep.com/image-stock/AAPL.png"
            alt=""
            className="h-14 w-14 rounded-full"
          />
        </div>
        <div className="flex-col">
          <p className="text-text-secondary text-4xl">AAPL</p>
          <p className="text-text-disabled text-md">
            APPLE INC Nasdaq Stock Market
          </p>
        </div>
      </div>
      <div className="flex-col mt-6">
        <div>
          <p className="text-text-secondary text-sm">
            <span className="text-3xl text-text-secondary">258.74</span> USD{" "}
            <span className="text-negative text-lg ml-4"> −3.92 (−1.49%)</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-text-secondary">
            <span className="uppercase text-accent text-[10px] mr-2">
              Market Open
            </span>
            (as of 00:17 GMT+5:30){" "}
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <div className="flex-col">
          <p className="text-text-primary text-lg">April 30</p>
          <p className="uppercase text-text-secondary text-xs">
            Upcoming Earnings
          </p>
        </div>
        <div className="flex-col">
          <p className="text-text-primary text-lg">7.93</p>
          <p className="uppercase text-text-secondary text-xs">eps</p>
        </div>
        <div className="flex-col">
          <p className="text-text-primary text-lg">3.79T</p>
          <p className="uppercase text-text-secondary text-xs">market cap</p>
        </div>
        <div className="flex-col">
          <p className="text-text-primary text-lg">0.00%</p>
          <p className="uppercase text-text-secondary text-xs">div yield</p>
        </div>
        <div className="flex-col">
          <p className="text-text-primary text-lg">33.21</p>
          <p className="uppercase text-text-secondary text-xs">p/e</p>
        </div>
      </div>
    </div>
  );
}

export default StockName;
