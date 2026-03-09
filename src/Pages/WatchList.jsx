import WatchListPage from "@/Components/WatchList.jsx/WatchListPage";
import WatchListTable from "@/Components/WatchList.jsx/WatchListTable";

function WatchList() {
  return (
    <div>
      <WatchListPage />
      <div className="border-2 border-dashboard-border w-fit mx-auto mt-10 ">
        <WatchListTable />
      </div>
    </div>
  );
}

export default WatchList;
