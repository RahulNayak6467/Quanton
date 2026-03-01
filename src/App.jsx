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
import Dashboard1 from "./Pages/Dashboard";
import Layout from "./Pages/Layout";
import WatchList from "./Pages/WatchList";
import StockDetail from "./Pages/StockDetail";
import Alerts from "./Pages/Alerts";
import Discover from "./Pages/Discover";

const generateData = () => {
  const data = [];
  let value = 150;
  const startDate = new Date("2023-01-01");

  for (let i = 0; i < 25; i++) {
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

// const initialData = generateData();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      //   element: <UnsignedUser props={props} data={initialData} />,
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Dashboard1 />,
        },
        {
          path: "/WatchList",
          element: <WatchList />,
        },
        {
          path: "/StockDetail",
          element: <StockDetail />,
        },
        {
          path: "/Alerts",
          element: <Alerts />,
        },
        {
          path: "/Discover",
          element: <Discover />,
        },
      ],
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
      path: "/dashboard",
      element: (
        <ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>
      ),
    },
  ]);

  return (
    <div className=" bg-bg-page">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
