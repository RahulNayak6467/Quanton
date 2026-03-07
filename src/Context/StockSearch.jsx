// import { createContext, useContext, useState } from "react";

// const SearchContext = createContext();

// export const useSearchContext = () => {
//   if (!SearchContext) {
//     throw new Error("No such context exist");
//   }
//   return useContext(SearchContext);
// };

// const SearchContextProvider = ({ children }) => {
//   const [searchQuery, setSearchQuery] = useState();
//   const [debouncedQuery, setDebouncedQuery] = useState();

//   const handleSearchQuery = (query) => {
//     setSearchQuery(query);
//   };

//   const handleDebouncedQuery = (query) => {
//     setDebouncedQuery(query);
//   };

//   const value = {
//     searchQuery,
//     handleSearchQuery,
//     debouncedQuery,
//     handleDebouncedQuery,
//   };

//   return (
//     <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
//   );
// };

// export default SearchContextProvider;
