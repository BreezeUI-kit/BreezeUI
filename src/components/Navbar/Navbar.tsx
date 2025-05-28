import React from "react";
import "../../index.css";

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">BreezeUI</div>
      <div className="space-x-4 text-sm text-gray-600">
        <a href="#" className="hover:text-blue-600">
          Home
        </a>
        <a href="#" className="hover:text-blue-600">
          Docs
        </a>
        <a href="#" className="hover:text-blue-600">
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
