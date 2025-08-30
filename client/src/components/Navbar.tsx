import BookHive from "/BookHive.svg";

import { Button } from "./ui/button";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-200">
      <div className="px-3 py-3 flex justify-between items-center container mx-auto">
        <h1 className="font-bold text-xl flex items-center gap-2 text-black">
          <img src={BookHive} className="w-10" alt="" /> BookHive
        </h1>
        <div className="space-x-2">
          <NavLink to="/" end>
            {({ isActive }) => (
              <Button className="cursor-pointer" variant={isActive ? "secondary" : "ghost"}>Home</Button>
            )}
          </NavLink>

          <NavLink to="/books">
            {({ isActive }) => (
              <Button className="cursor-pointer" variant={isActive ? "secondary" : "ghost"}>
                All Books
              </Button>
            )}
          </NavLink>

          <NavLink to="/borrow">
            {({ isActive }) => (
              <Button className="cursor-pointer" variant={isActive ? "secondary" : "ghost"}>Borrow</Button>
            )}
          </NavLink>

          <NavLink to="/borrow-summary">
            {({ isActive }) => (
              <Button className="cursor-pointer" variant={isActive ? "secondary" : "ghost"}>
                Borrow Summary
              </Button>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
