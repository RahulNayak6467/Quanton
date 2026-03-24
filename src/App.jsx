import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import StockChart from "./Components/Charts/LightWeightCharts";
import FeaturesList from "./Components/FeaturesList";
import Features from "./Components/Features";
import Testimonails from "./Components/Testimonials";
import HowItWorks from "./Components/HowItWorks";
import HowIt from "./Components/HowIt";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UnsignedUser from "./Pages/UnsignedUser";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoutes from "./Context/ProtectedRoutes";
import AuthProvider from "./Context/AuthContext";
import Layout from "./Pages/Layout";
import WatchList from "./Pages/WatchList";
import StockDetail from "./Pages/StockDetail";

import Tables from "./Components/DashboardPage/Tables";
import LatestNews from "./Components/DashboardPage/LatestNews";
import SearchContextProvider from "./Context/StockSearch";
import WatchListContextProvider from "./Context/AddWatchListStocks";
// import SearchContextProvider from "./Context/StockSearch";

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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UnsignedUser props={props} data={initialData} />,
      //   element: <Tables />,
      //   element: <LatestNews />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/Login",
      element: <LoginPage />,
    },
    {
      path: "/LoggedIn",
      element: <Layout />,
      children: [
        {
          path: "",
          element: (
            <ProtectedRoutes>
              <SearchContextProvider>
                <Dashboard />
              </SearchContextProvider>
            </ProtectedRoutes>
          ),
        },
        {
          path: "WatchList",
          element: (
            <ProtectedRoutes>
              <WatchListContextProvider>
                <WatchList />
              </WatchListContextProvider>
            </ProtectedRoutes>
          ),
        },
        {
          path: "StockDetail",
          element: (
            <SearchContextProvider>
              <StockDetail />
            </SearchContextProvider>
          ),
        },
      ],
    },
  ]);

  return (
    // <div className=" bg-bg-page">
    <div className="bg-bg-page">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
