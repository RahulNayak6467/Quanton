import Nav from "@/Components/DashboardPage/Nav";
import Navbar from "@/Components/Navbar";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/Components/Loader";
import MiniChart from "@/Components/DashboardPage/MiniChart";
const apiKey = import.meta.env.VITE_FMP_API_KEY;

function Dashboard1() {
  const fetchStockData = async () => {
    const response = await Promise.all([
      fetch(
        `https://financialmodelingprep.com/stable/quote?symbol=^GSPC&apikey=${apiKey}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/quote?symbol=^IXIC&apikey=${apiKey}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/quote?symbol=^RUT&apikey=${apiKey}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/quote?symbol=^FTSE&apikey=${apiKey}`,
      ),
    ]);

    const data = await Promise.all(response.map((res) => res.json()));

    return data;
  };

  const { data: stockData, isLoading } = useQuery({
    queryKey: ["IndexesName"],
    queryFn: () => fetchStockData(),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60, // keep in cache for 1 hour
    retry: false, // disable auto retry
    refetchOnWindowFocus: false,
  });

  const fetchData = async () => {
    const to = new Date().toISOString().split("T")[0];
    const from = new Date();
    from.setMonth(from.getMonth() - 3);
    const fromStr = from.toISOString().split("T")[0];
    const res = await Promise.all([
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^GSPC&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^IXIC&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^RUT&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      ),
      fetch(
        `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^FTSE&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
      ),
    ]);
    // if (!res.ok) {
    //   console.log("An error occured", res.status);
    //   return;
    // }
    const data = await Promise.all(res.map((r) => r.json()));

    console.log(data);

    const requiredData = data.map((el) =>
      el.reverse().map((d) => {
        return {
          time: d.date,
          value: d.close,
        };
      }),
    );
    console.log(requiredData);
    return requiredData;
  };

  const { data, isLoading: isLoadingChart } = useQuery({
    queryKey: ["IndexesHistory"],
    queryFn: () => fetchData(),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60, // keep in cache for 1 hour
    retry: false, // disable auto retry
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isLoadingChart) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#30363D] border-t-green-500 rounded-full animate-spin" />
      </div>
    );
  }
  return (
    <div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20">
        <MiniChart
          stockData={stockData[0][0]}
          data={data[0]}
          colors={{
            color: "#22c55e",
          }}
        />
        <MiniChart
          stockData={stockData[1][0]}
          data={data[1]}
          colors={{
            color: "#38bdf8",
          }}
          widthBar={200}
          heightBar={60}
        />
        <MiniChart
          stockData={stockData[2][0]}
          data={data[2]}
          colors={{
            color: "#eab308",
          }}
          widthBar={200}
          heightBar={60}
        />
        <MiniChart
          stockData={stockData[3][0]}
          data={data[3]}
          colors={{ color: "#a78bfa" }}
          widthBar={200}
          heightBar={60}
        />
      </div>
      <div className="grid grid-cols-20 px-20 gap-7 mt-5">
        <div className="col-span-15 grid-cols-1 gap-y-4">
          <div className="border-2 border-accent  h-110 rounded-xl -mr-0.5"></div>
          <div className="border-2 border-accent  h-70  rounded-xl -mr-0.5"></div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 col-span-5">
          <div className="border-2 border-red-500  h-100 rounded-xl -ml-1"></div>
          <div className="border-2 border-red-500 h-100 rounded-xl -ml-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard1;
