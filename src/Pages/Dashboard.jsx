import Nav from "@/Components/DashboardPage/Nav";
import Navbar from "@/Components/Navbar";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/Components/Loader";
import MiniChart from "@/Components/DashboardPage/MiniChart";
const apiKey = import.meta.env.VITE_FMP_API_KEY;

const fetchStockData = async () => {
  try {
    const response = await fetch(
      `https://financialmodelingprep.com/stable/search-symbol?query=AAPL&apikey=${apiKey}`,
    );
    if (!response.ok) {
      throw new Error(`An error occured error status: ${response.status} `);
    }
    const data = await response.json();

    console.log(data);
    return data;
  } catch (err) {
    console.log("An error occured", err.message);
    throw err;
  }
};

function Dashboard1() {
  //   const { isLoading } = useQuery({
  //     queryFn: () => fetchStockData(),
  //     queryKey: ["Fetch Stocks"],
  //     staleTime: Infinity,
  //     gcTime: 1000 * 60 * 60, // keep in cache for 1 hour
  //     retry: false, // disable auto retry
  //     refetchOnWindowFocus: false, // prevent refetch on focus
  //   });

  //   if (isLoading) {
  //     return <Loader />;
  //   }
  return (
    <div>
      <h1 className="text-center  text-2xl text-white">
        Welcome to the dashboard Page
      </h1>
      <MiniChart />
    </div>
  );
}

export default Dashboard1;
