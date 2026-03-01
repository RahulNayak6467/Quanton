import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import StockChart from "../Charts/LightWeightCharts";

function MiniChart() {
  const apiKey = import.meta.env.VITE_FMP_API_KEY;

  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://financialmodelingprep.com/stable/quote?symbol=^GSPC&apikey=${apiKey}`,
  //     );

  //     if (!response.ok) {
  //       throw new Error("An error occured");
  //     }

  //     const data = await response.json();

  //     console.log(data);

  //     return data;
  //   };

  //   const { data, isLoading } = useQuery({
  //     queryKey: ["Indexes"],
  //     queryFn: () => fetchData(),
  //     staleTime: Infinity,
  //     gcTime: 1000 * 60 * 60, // keep in cache for 1 hour
  //     retry: false, // disable auto retry
  //     refetchOnWindowFocus: false,
  //     select: (data) => data[0],
  //   });

  const fetchData = async () => {
    const to = new Date().toISOString().split("T")[0];
    const from = new Date();
    from.setMonth(from.getMonth() - 3);
    const fromStr = from.toISOString().split("T")[0];

    const res = await fetch(
      `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=^GSPC&from=${fromStr}&to=${to}&apikey=${import.meta.env.VITE_FMP_API_KEY}`,
    );

    const data = await res.json();

    const requiredData = data.reverse().map((d) => {
      return {
        time: d.date,
        value: d.close,
      };
    });

    console.log(requiredData);

    return requiredData;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["Indexes"],
    queryFn: () => fetchData(),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60, // keep in cache for 1 hour
    retry: false, // disable auto retry
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }
  // S&P 500
  // 6878.88
  // ^GSPC

  // -0.43394
  return (
    <div className="grid grid-cols-2 gap-x-4 p-6 py-3 border-2 items-center w-90 rounded-2xl mx-auto bg-[#161B22 ] border-[#30363D]">
      <div>
        <h3 className="text-text-primary text-sm">S&P 500</h3>
        <span className="text-text-secondary text-sm">6878.88</span>
        <div className="flex gap-2 items-center ">
          <p className="text-text-secondary text-sm">^GSPC</p>
          <p className="text-negative">-0.43394</p>
        </div>
      </div>
      <div>
        <StockChart data={data} />
      </div>
    </div>
  );
}
export default MiniChart;
