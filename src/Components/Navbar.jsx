import { CircleDollarSign } from "lucide-react";
function Navbar() {
  return (
    <header className="p-6 mb-18">
      <nav className="flex justify-between items-center font-sans border-2 border-zinc-800 p-2 rounded-2xl">
        <div className="w-50 flex items-center gap-3">
          <CircleDollarSign size={64} className="bg-bg-page fill-accent" />
          <p className="text-text-primary text-2xl -mt-1">Quanton</p>
        </div>
        <div className="ml-4  py-1 px-4 ">
          <ul className="flex justify-between gap-15 text-xl text-text-primary">
            <li className="cursor-pointer hover:text-accent hover:underline ">
              Features
            </li>
            <li className="cursor-pointer hover:text-accent hover:underline">
              How it Works
            </li>
            <li className="cursor-pointer hover:text-accent hover:underline">
              Pricing
            </li>
          </ul>
        </div>
        <div className="w-50">
          <div className="flex gap-5">
            <button className="px-4 py-1 cursor-pointer rounded-2xl bg-transparent  hover:bg-[#1A2332] text-[#F1F5F9] border-2 border-solid  border-[#1E2D3D]">
              Login
            </button>
            <button className="px-2 py-2 cursor-pointer rounded-2xl  bg-[#10B981] hover:bg-accent-hover text-white flex items-center">
              Sign Up &#8594;
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
