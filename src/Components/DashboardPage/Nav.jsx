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
    <header className="p-3 mb-18">
      <nav className=" backdrop-blur-md border-b  flex justify-between items-center font-sans border border-zinc-800  p-2 rounded-2xl">
        <div className=" flex items-center gap-3">
          <CircleDollarSign size={48} className=" fill-accent " />
          <p className="text-text-primary text-xl ">Quanton</p>
        </div>
        <div className=" py-1 px-4 mr-5 ">
          <ul className="flex justify-between gap-15 text-lg text-text-secondary">
            <NavMenu
              features={"Dashboard"}
              route={"/"}
              Icon={<LayoutDashboard size={20} />}
            ></NavMenu>
            <NavMenu
              features={"WatchList"}
              route={"/WatchList"}
              Icon={<BookMarked size={20} />}
            ></NavMenu>
            <NavMenu
              features={"StockDetail"}
              route={"/StockDetail"}
              Icon={<ChartNoAxesCombined size={20} />}
            ></NavMenu>
            <NavMenu
              features={"Alerts"}
              route={"/Alerts"}
              Icon={<Bell size={20} />}
            ></NavMenu>
            <NavMenu
              features={"Discover"}
              route={"/Discover"}
              Icon={<Search size={20} />}
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
