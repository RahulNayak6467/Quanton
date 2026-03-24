import { CircleDollarSign, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-3 sm:p-6 mb-6 sm:mb-18">
      <nav className="flex justify-between items-center font-sans border-2 border-zinc-800 p-2 sm:p-4 rounded-2xl">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <CircleDollarSign size={48} className="sm:size-64 bg-bg-page fill-accent w-12 h-12 sm:w-16 sm:h-16" />
          <p className="text-text-primary text-lg sm:text-2xl -mt-1">Quanton</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-4 py-1 px-4">
          <ul className="flex justify-between gap-8 lg:gap-15 text-base lg:text-xl text-text-primary">
            <NavMenu features={"Features"}></NavMenu>
            <NavMenu features={"How it Works"}></NavMenu>
            <NavMenu features={"Pricing"}></NavMenu>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-5">
          <Link
            to="/Login"
            className="px-4 py-1 cursor-pointer rounded-2xl bg-transparent hover:bg-[#1A2332] text-[#F1F5F9] border-2 border-solid border-[#1E2D3D] whitespace-nowrap"
          >
            Login
          </Link>
          <Link
            to="/SignUp"
            className="px-2 py-2 cursor-pointer rounded-2xl bg-[#10B981] hover:bg-accent-hover text-white flex items-center whitespace-nowrap"
          >
            Sign Up &#8594;
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 border-2 border-zinc-800 rounded-2xl p-4 bg-bg-card">
          <ul className="flex flex-col gap-4 text-text-primary mb-4">
            <li><NavMenu features={"Features"}></NavMenu></li>
            <li><NavMenu features={"How it Works"}></NavMenu></li>
            <li><NavMenu features={"Pricing"}></NavMenu></li>
          </ul>
          <div className="flex flex-col gap-3">
            <Link
              to="/Login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 cursor-pointer rounded-2xl bg-transparent hover:bg-[#1A2332] text-[#F1F5F9] border-2 border-solid border-[#1E2D3D] text-center"
            >
              Login
            </Link>
            <Link
              to="/SignUp"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 cursor-pointer rounded-2xl bg-[#10B981] hover:bg-accent-hover text-white flex items-center justify-center gap-1"
            >
              Sign Up &#8594;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
