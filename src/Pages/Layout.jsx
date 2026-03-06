import { Outlet } from "react-router-dom";
import Nav from "@/Components/DashboardPage/Nav";

function Layout() {
  return (
    <div className="min-h-screen bg-dashboard-page border-dashboard-border ">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;
