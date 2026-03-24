import { CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChartNoAxesCombined,
  Bell,
  LayoutDashboard,
  Search,
  BookMarked,
} from "lucide-react";

function Nav() {
  return (
    <header className="p-3 mb-2 backdrop-blur-3xl">
      <nav className="  border-b backdrop-blur-3xl flex justify-between items-center font-sans border shadow-[0_0_20px_rgba(0,0,0,0.7)]  border-dashboard-border bg-dashboard-card  px-2 py-0.5 rounded-2xl">
        <div className=" flex items-center gap-3">
          <CircleDollarSign size={48} className=" fill-accent " />
          <p className="text-text-primary text-xl ">Quanton</p>
        </div>
        <div className=" py-1 px-4 mr-5 ">
          <ul className="flex justify-between gap-15 text-lg text-text-secondary">
            <NavMenu
              features={"Dashboard"}
              route={"/LoggedIn"}
              Icon={<LayoutDashboard size={20} />}
            ></NavMenu>
            <NavMenu
              features={"WatchList"}
              route={"/LoggedIn/WatchList"}
              Icon={<BookMarked size={20} />}
            ></NavMenu>
            <NavMenu
              features={"StockDetail"}
              route={"/LoggedIn/StockDetail"}
              Icon={<ChartNoAxesCombined size={20} />}
            ></NavMenu>
          </ul>
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-text-secondary text-md font-bold">Rahul Nayak</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
