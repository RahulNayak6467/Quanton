import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import StockChart from "./Components/Charts/LightWeightCharts";
import FeaturesList from "./Components/FeaturesList";
import { useEffect } from "react";
import { useState } from "react";
import Features from "./Components/Features";
import Testimonails from "./Components/Testimonials";
import HowItWorks from "./Components/HowItWorks";
import HowIt from "./Components/HowIt";
import CTA from "./Components/CTA";
import { RetroGrid } from "./components/ui/retro-grid";
import Footer from "./Components/Footer";
// const apiKey = "d6dcmb1r01qgk7mlfdm0d6dcmb1r01qgk7mlfdmg";
const apiKey = "nwzfb_5OVbQO1cH5UpqpNgB5VJlE0E9G";
const generateData = () => {
  const data = [];
  let value = 150;
  const startDate = new Date("2023-01-01");

  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    // skip weekends like real stock market
    if (date.getDay() === 0 || date.getDay() === 6) continue;

    // small random change each day — realistic movement
    value = value + (Math.random() - 0.48) * 5;

    data.push({
      time: date.toISOString().slice(0, 10),
      value: parseFloat(value.toFixed(2)),
    });
  }
  return data;
};

const initialData = generateData();

function App(props) {
  const [dataArr, setDataArr] = useState([]);

  // useEffect(() => {
  //   const tickers = ["AAPL", "TSLA", "GOOGL", "AMZN", "MSFT", "NVDA", "META"];
  //   const fetchStocks = async () => {
  //     const today = new Date().toISOString().slice(0, 10);
  //     const oneYearAgo = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
  //       .toISOString()
  //       .slice(0, 10);

  //     const results = await Promise.all(
  //       tickers.map((ticker) =>
  //         fetch(
  //           `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${oneYearAgo}/${today}?sort=asc&apiKey=${apiKey}`,
  //         ).then((res) => res.json()),
  //       ),
  //     );

  //     console.log(results);

  //     return results;
  //   };

  //   fetchStocks();
  // }, []);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const to = Math.floor(Date.now() / 1000); // current time
  //       const from = to - 365 * 24 * 60 * 60; // 1 year ago
  //       const res = await fetch(
  //         `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2024-01-01/${to}?adjusted=true&sort=asc&apiKey=${apiKey}`,
  //       );
  //       if (!res.ok) {
  //         throw new Error(`An error occured ${res.status}`);
  //       }
  //       const data = await res.json();
  //       // const dataInFormat = data["Time Series (Daily)"];
  //       // const object = Object.entries(dataInFormat);
  //       const format = data.results.slice(data.length - 101, data.length);

  //       const formattedResults = format.map((s) => {
  //         return {
  //           time: new Date(s.t).toISOString().slice(0, 10),
  //           value: s.c,
  //         };
  //       });
  //       setDataArr([...formattedResults]);
  //       console.log(formattedResults);
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <div className=" min-h-screen bg-bg-page p-6 overflow-x-hidden">
      <RetroGrid />
      <Navbar />
      <Hero initialData={initialData} props={props} data={initialData} />
      {/* <StockChart {...props} data={dataArr} />*/}
      {/* <FeaturesList />*/}
      <Features />
      <Testimonails />
      <HowItWorks />
      <HowIt />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
