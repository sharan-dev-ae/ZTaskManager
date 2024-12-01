import React from "react";
import ToggleTheme from "./ToggleTheme";

function Header() {
  return (
    <header className="bg-purple-900 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#">Z Task Manager</a>
        </div>
        <div>
        <ToggleTheme/>
        </div>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/" className="hover:text-blue-300">
            Home
          </a>
          <a href="#" className="hover:text-blue-300">
            About
          </a>
          <a href="#" className="hover:text-blue-300">
            Services
          </a>
          <a href="#" className="hover:text-blue-300">
            Contact
          </a>
         
        </div>
      </nav>
    </header>
  );
}

export default Header;
