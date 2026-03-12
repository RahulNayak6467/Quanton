import { createContext, useContext, useState } from "react";

const WatchListContext = createContext();

export const useAddWatchList = () => {
  if (!WatchListContext) {
    throw new Error("No such context exist");
  }
  return useContext(WatchListContext);
};

const WatchListContextProvider = ({ children }) => {
  const [addStockSymbol, setAddStockSymbol] = useState("");

  const handleAddStock = (stockSymbol) => {
    if (stockSymbol.length === 0) {
      alert("Enter a valid Stock Symbol");
      return;
    }

    setAddStockSymbol(stockSymbol.trim().toUpperCase());
  };

  const value = {
    addStockSymbol,
    handleAddStock,
  };
  return (
    <WatchListContext.Provider value={value}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
