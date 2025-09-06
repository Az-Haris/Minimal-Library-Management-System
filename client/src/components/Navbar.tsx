import { useState } from "react";
import BookHive from "/BookHive.svg";
import { Button } from "./ui/button";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200">
      <div className="px-3 py-3 flex justify-between items-center container mx-auto">
        {/* Logo */}
        <Link to={"/"}>
          <h1 className="font-bold text-xl flex items-center gap-2 text-black">
            <img src={BookHive} className="w-10" alt="BookHive Logo" /> BookHive
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2">
          <NavLink to="/" end>
            {({ isActive }) => (
              <Button
                className="cursor-pointer"
                variant={isActive ? "secondary" : "ghost"}
              >
                Home
              </Button>
            )}
          </NavLink>

          <NavLink to="/books">
            {({ isActive }) => (
              <Button
                className="cursor-pointer"
                variant={isActive ? "secondary" : "ghost"}
              >
                All Books
              </Button>
            )}
          </NavLink>

          <NavLink to="/borrow-summary">
            {({ isActive }) => (
              <Button
                className="cursor-pointer"
                variant={isActive ? "secondary" : "ghost"}
              >
                Borrow Summary
              </Button>
            )}
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-3 pb-3 space-y-2 container mx-auto">
          <NavLink to="/" end>
            {({ isActive }) => (
              <Button
                className="w-full text-left"
                variant={isActive ? "secondary" : "ghost"}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Button>
            )}
          </NavLink>

          <NavLink to="/books">
            {({ isActive }) => (
              <Button
                className="w-full text-left"
                variant={isActive ? "secondary" : "ghost"}
                onClick={() => setIsOpen(false)}
              >
                All Books
              </Button>
            )}
          </NavLink>

          <NavLink to="/borrow">
            {({ isActive }) => (
              <Button
                className="w-full text-left"
                variant={isActive ? "secondary" : "ghost"}
                onClick={() => setIsOpen(false)}
              >
                Borrow
              </Button>
            )}
          </NavLink>

          <NavLink to="/borrow-summary">
            {({ isActive }) => (
              <Button
                className="w-full text-left"
                variant={isActive ? "secondary" : "ghost"}
                onClick={() => setIsOpen(false)}
              >
                Borrow Summary
              </Button>
            )}
          </NavLink>
        </div>
      )}
    </nav>
  );
}
