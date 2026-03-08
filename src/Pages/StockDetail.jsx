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
        // handleSearchQuery(null);
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

  return (
    <section className="pb-20">
      <div className="flex justify-center items-center h-15 relative">
        <Search
          size={20}
          className="text-text-disabled text-center absolute left-[30%] top-[45%] cursor-pointer hover:text-text-primary "
        />
        <input
          ref={searchRef}
          onClick={() => {
            handleIsOpen(true);
          }}
          onChange={(e) => handleSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          placeholder="Enter your favourite stock by company name or symbol..."
          className={
            isOpen
              ? "outline-none  text-lg text-text-disabled mt-4  h-full  mx-auto w-200  px-2 bg-dashboard-card pl-12   cursor-pointer z-999"
              : " outline-none focus:ring-2 focus:ring-dashboard-card text-lg text-text-disabled mt-4 border-[#30303D]  h-full  mx-auto w-200 border-2 px-2 bg-dashboard-card focus:border-dashboard-page pl-12 rounded-full  cursor-pointer"
          }
        />
        <X
          size={20}
          onClick={() => {
            if (isOpen) handleIsOpen(false);
            handleSearchQuery("");
          }}
          className={
            isOpen
              ? "text-text-disabled absolute right-[30%] top-[45%] cursor-pointer hover:text-text-primary z-999"
              : "text-text-disabled absolute right-[30%] top-[45%] cursor-pointer hover:text-text-primary"
          }
        />
      </div>

      {isOpen ? (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"></div>
      ) : (
        ""
      )}
      {isOpen ? (
        <div className="flex relative justify-center z-999 rounded-full">
          <div className="w-200  rounded-b-2xl mx-auto  border-t-0 border-[#30303D] bg-dashboard-card overflow-hidden">
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

      <div className="flex  mt-10 gap-8 w-[90%] mx-auto">
        <StockName />
        <StockPeers />
      </div>

      <div className="flex w-[90%] gap-8 mx-auto mt-10">
        <StockDisplayChart />
        <StockInfo />
      </div>

      <div className="flex w-[90%] gap-8 mx-auto mt-10">
        <StockNews />
        <StockProfile />
      </div>

      {/* Dropdown */}
      {/* <div className="flex justify-center">
        <div className="w-200 rounded-b-2xl border-2 border-t-0 border-[#30303D] bg-dashboard-card overflow-hidden">
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
                  <span className="text-white font-medium">{stock.symbol}</span>
                  <span className="text-[#8B949E] text-sm ml-2">
                    {stock.name}
                  </span>
                </div>
                <span className="text-[#6E7681] text-xs">{stock.exchange}</span>
              </div>
            ))
          )}
        </div>
      </div> */}
    </section>
  );
}

export default StockDetail;
