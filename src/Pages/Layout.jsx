import { Outlet } from "react-router-dom";
import Nav from "@/Components/DashboardPage/Nav";

function Layout() {
  return (
    <div className="min-h-screen bg-[#0D1117] ">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;
