function WatchListPage() {
  return (
    <div className="border-dashboard-border border bg-dashboard-card flex items-center justify-between w-[90%] rounded-full mx-auto py-3">
      <h1 className="text-text-primary text-2xl font-sans font-bold ml-20">
        My WatchList
      </h1>
      <button className="p-2 px-4 bg-accent text-text-primary rounded-2xl mr-20 cursor-pointer hover:bg-accent-hover transition-all">
        Add Stock
      </button>
    </div>
  );
}

export default WatchListPage;
