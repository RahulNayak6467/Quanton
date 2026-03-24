import Loader from "@/Components/Loader";
import StockPeers from "@/Components/StockDetail/StockPeers";
import StockDisplayChart from "@/Components/StockDetail/StockDisplayChart";
import StockInfo from "@/Components/StockDetail/StockInfo";
import StockName from "@/Components/StockDetail/StockName";
import StockNews from "@/Components/StockDetail/StockNews";
import StockProfile from "@/Components/StockDetail/StockProfile";
import { useSearchContext } from "@/Context/StockSearch";
import { X, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const apiKey = import.meta.env.VITE_FMP_API_KEY;

function StockDetail() {
  const {
    debouncedQuery,
    searchQuery,
    handleSearchQuery,
    handleDebouncedQuery,
  } = useSearchContext();

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = (boolean) => setIsOpen(boolean);

  const searchRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleDebouncedQuery(searchQuery);
        handleIsOpen(false);
        searchRef.current.blur();
      }
    };

    const input = searchRef.current;

    if (input) {
      input.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (input) {
        input.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [searchQuery, handleDebouncedQuery, handleSearchQuery]);
  const fetchSuggestions = async () => {
    try {
      const response = await fetch(
        `https://financialmodelingprep.com/stable/search-name?query=${debouncedQuery || "microsoft"}&limit=8&apikey=${apiKey}`,
      );

      if (!response.ok) {
        console.log("An error occured", response.status);
      }

      const data = await response.json();

      console.log(data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data: suggestionsData, isLoading: suggestionsLoading } = useQuery({
    queryKey: ["fetchSuggestions", debouncedQuery],
    queryFn: () => fetchSuggestions(),
    // staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    // enabled: !!debouncedQuery,
  });

  if (suggestionsLoading) {
    return;
  }

  console.log(suggestionsData);

  // console.log(suggestionsLoading);

  const searchInputBase =
    "outline-none text-lg text-text-disabled h-12 w-full pl-12 pr-12 bg-dashboard-card cursor-pointer z-[999]";
  const searchInputClosed = `${searchInputBase} focus:ring-2 focus:ring-dashboard-card border-[#30303D] border-2 focus:border-dashboard-page rounded-full`;
  const searchInputOpen = `${searchInputBase} rounded-none rounded-b-2xl`;

  return (
    <section className="pb-20 px-4 sm:px-6 overflow-x-hidden">
      <div className="relative w-full max-w-3xl mx-auto mt-4 isolate">
        <span
          className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-12 items-center justify-center text-text-disabled"
          aria-hidden
        >
          <Search size={20} strokeWidth={2} className="shrink-0" />
        </span>
        <input
          ref={searchRef}
          onClick={() => {
            handleIsOpen(true);
          }}
          onChange={(e) => handleSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          placeholder="Enter your favourite stock by company name or symbol..."
          className={isOpen ? searchInputOpen : searchInputClosed}
        />
        <button
          type="button"
          onClick={() => {
            if (isOpen) handleIsOpen(false);
            handleSearchQuery("");
          }}
          className="absolute inset-y-0 right-0 z-[999] flex w-12 items-center justify-center text-text-disabled hover:text-text-primary"
          aria-label="Clear search"
        >
          <X size={20} strokeWidth={2} className="shrink-0" />
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"></div>
      ) : (
        ""
      )}
      {isOpen ? (
        <div className="relative z-[999] w-full max-w-3xl mx-auto -mt-4">
          <div className="w-full rounded-b-2xl border-t-0 border-[#30303D] bg-dashboard-card overflow-hidden border border-[#30303D]">
            {suggestionsData?.length === 0 ? (
              <p className="text-[#8B949E] text-sm px-4 py-3">
                No results found.
              </p>
            ) : (
              suggestionsData?.map((stock) => (
                <div
                  key={stock.symbol}
                  className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#21262D] transition-colors duration-150"
                >
                  <div>
                    <span className="text-white font-medium">
                      {stock.symbol}
                    </span>
                    <span className="text-[#8B949E] text-sm ml-2">
                      {stock.name}
                    </span>
                  </div>
                  <span className="text-[#6E7681] text-xs">
                    {stock.exchange}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col lg:flex-row mt-10 gap-8 w-full max-w-[1400px] mx-auto">
        <StockName />
        <StockPeers />
      </div>

      <div className="flex flex-col xl:flex-row w-full max-w-[1400px] gap-8 mx-auto mt-10 min-w-0">
        <StockDisplayChart />
        <StockInfo />
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-[1400px] gap-8 mx-auto mt-10 min-w-0">
        <StockNews />
        <StockProfile />
      </div>
    </section>
  );
}

export default StockDetail;
