import {
  CircleDollarSign,
  Menu,
  X,
  ChartNoAxesCombined,
  LayoutDashboard,
  BookMarked,
} from "lucide-react";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { supabase } from "@/Supabase-client/SupabaseClient";

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const userLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error("Please try again");
    }
  };

  return (
    <header className="p-3 mb-2 backdrop-blur-3xl">
      <nav className="border-b backdrop-blur-3xl flex flex-col gap-3 md:flex-row md:justify-between md:items-center font-sans border shadow-[0_0_20px_rgba(0,0,0,0.7)] border-dashboard-border bg-dashboard-card px-2 py-2 md:py-0.5 rounded-2xl">
        <div className="flex items-center justify-between gap-3 md:justify-start min-w-0 w-full md:w-auto">
          <Link
            to="/LoggedIn"
            className="flex items-center gap-3 min-w-0"
            onClick={() => setMobileOpen(false)}
          >
            <CircleDollarSign size={48} className="fill-accent shrink-0" />
            <p className="text-text-primary text-xl truncate">Quanton</p>
          </Link>
          <button
            type="button"
            className="md:hidden text-text-secondary p-2 rounded-lg hover:bg-dashboard-page shrink-0"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`${mobileOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row py-1 px-2 md:px-4 md:mr-5 w-full md:w-auto border-t md:border-t-0 border-dashboard-border md:border-0`}
        >
          <ul className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 lg:gap-15 text-base md:text-lg text-text-secondary py-3 md:py-1">
            <li onClick={() => setMobileOpen(false)}>
              <NavMenu
                features={"Dashboard"}
                route={"/LoggedIn"}
                Icon={<LayoutDashboard size={20} />}
              />
            </li>
            <li onClick={() => setMobileOpen(false)}>
              <NavMenu
                features={"WatchList"}
                route={"/LoggedIn/WatchList"}
                Icon={<BookMarked size={20} />}
              />
            </li>
            <li onClick={() => setMobileOpen(false)}>
              <NavMenu
                features={"StockDetail"}
                route={"/LoggedIn/StockDetail"}
                Icon={<ChartNoAxesCombined size={20} />}
              />
            </li>
          </ul>
        </div>

        <div
          className={`${mobileOpen ? "flex" : "hidden"} md:flex border-t md:border-t-0 border-dashboard-border pt-3 md:pt-0`}
        >
          <div className="flex gap-3 md:gap-5 items-center w-full md:w-auto pb-3 md:pb-0">
            <Avatar className="shrink-0">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-text-secondary text-md font-bold truncate min-w-0">
              Rahul Nayak
            </p>
            <button
              onClick={() => userLogOut()}
              className="text-red-500  bg-bg-elevated px-4 py-2 cursor-pointer hover:bg-bg-page rounded-2xl"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
