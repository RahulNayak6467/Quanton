// import { useSearchContext } from "@/Context/StockSearch";
// import { useEffect } from "react";

// function useStocksSearch() {
//   const { searchQuery, handleDebouncedQuery } = useSearchContext();

//   useEffect(() => {
//     const timeDelay = setTimeout(() => {
//       handleDebouncedQuery(searchQuery);
//     }, 300);

//     return () => clearTimeout(timeDelay);
//   }, [handleDebouncedQuery, searchQuery]);
// }

// export default useStocksSearch;
