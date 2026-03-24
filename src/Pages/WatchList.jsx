import WatchListPage from "@/Components/WatchList.jsx/WatchListPage";
import WatchListTable from "@/Components/WatchList.jsx/WatchListTable";

function WatchList() {
  return (
    <div className="px-4 sm:px-6 w-full max-w-7xl mx-auto overflow-x-hidden">
      <WatchListPage />
      <div className="border-2 border-dashboard-border w-full mt-10 overflow-x-auto rounded-xl">
        <WatchListTable />
      </div>
    </div>
  );
}

export default WatchList;
