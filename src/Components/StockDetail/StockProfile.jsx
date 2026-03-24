import useStockInfo from "@/CustomHooks/useStockInfo";

function StockProfile() {
  const { data: StockInfoData, isLoading } = useStockInfo();

  if (isLoading) {
    return <></>;
  }
  const stockData = StockInfoData[1][0];

  return (
    <div className="flex-col w-[30%]  border border-dashboard-border p-6 rounded-md bg-dashboard-card">
      <div>
        <h1 className="text-xl text-accent">Profile</h1>
      </div>
      <div className="mt-4 text-text-secondary text-md">
        <p>Sector: {stockData?.sector}</p>
        <p>Industry: {stockData?.industry}</p>
        <p>Employees: {(stockData?.fullTimeEmployees / 1000).toFixed(0)}K</p>
      </div>
      <div className="mt-4 text-text-secondary text-sm leading-normal line-clamp-18">
        {stockData?.description}
      </div>
    </div>
  );
}

export default StockProfile;
