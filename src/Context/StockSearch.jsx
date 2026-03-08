import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

export const useSearchContext = () => {
  if (!SearchContext) {
    throw new Error("No such context exist");
  }
  return useContext(SearchContext);
};

const SearchContextProvider = ({ children }) => {
  //   const [searchQuery, setSearchQuery] = useState();
  //   const [debouncedQuery, setDebouncedQuery] = useState();

  //   const handleSearchQuery = (query) => {
  //     setSearchQuery(query);
  //   };

  //   useEffect(() => {
  //     const timeDelay = setTimeout(() => {
  //       setDebouncedQuery(searchQuery);
  //     }, 300);

  //     return () => clearTimeout(timeDelay);
  //   }, [searchQuery]);

  //   const value = {
  //     searchQuery,
  //     handleSearchQuery,
  //     debouncedQuery,
  //   };

  const [searchQuery, setSearchQuery] = useState("AAPL");
  const [debouncedQuery, setDebouncedQuery] = useState("AAPL");

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const handleDebouncedQuery = (query) => {
    setDebouncedQuery(query);
  };

  //   useEffect(() => {
  //     const timeDelay = setTimeout(() => {
  //       handleDebouncedQuery(searchQuery);
  //     }, 300);

  //     return () => clearTimeout(timeDelay);
  //   }, [searchQuery]);

  const value = {
    searchQuery,
    handleSearchQuery,
    debouncedQuery,
    handleDebouncedQuery,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
