import { Outlet } from "react-router-dom";
import Nav from "@/Components/DashboardPage/Nav";

function Layout() {
  return (
    <div className="min-h-screen bg-dashboard-page border-dashboard-border">
      <Nav />
      <div className="px-3 sm:px-4 md:px-6 w-full max-w-[100vw] overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
