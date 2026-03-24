import LatestNews from "../DashboardPage/LatestNews";
import Loader from "../Loader";
import useStockNews from "@/CustomHooks/useStockNews";

function StockNews() {
  const { data: newsData, isLoading: newsLoadingData } = useStockNews();

  if (newsLoadingData) {
    return <></>;
  }

  return (
    <div className="w-full lg:w-[70%] min-w-0">
      <div className=" border border-dashboard-border bg-dashboard-card  rounded-2xl p-6">
        <h1 className="uppercase text-xl text-accent border-b border-dashboard-border">
          Latest News
        </h1>
        {/* {newsData?.feed?.slice(0, 5)?.map((news, index) => (
          <LatestNews data={news} index={index + 1} />
        ))} */}
        {newsData?.slice(0, 5).map((news, index) => (
          <LatestNews data={news} index={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default StockNews;
