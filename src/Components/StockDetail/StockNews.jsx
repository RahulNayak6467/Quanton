import LatestNews from "../DashboardPage/LatestNews";
import useLatestNews from "@/CustomHooks/useLastestNews";
import Loader from "../Loader";

function StockNews() {
  const { newsData, newsLoadingData } = useLatestNews();

  if (newsLoadingData) {
    return <Loader />;
  }

  return (
    <div className="w-[70%] ">
      <div className=" border border-dashboard-border bg-dashboard-card  rounded-2xl p-6">
        <h1 className="uppercase text-xl text-accent border-b border-dashboard-border">
          Latest News
        </h1>
        {newsData.feed.slice(5, 11).map((news, index) => (
          <LatestNews data={news} index={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default StockNews;
