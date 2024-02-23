import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-1 w-full justify-around py-3">
      <div className="flex w-1/3 justify-between">
        <NavLink to="">Home</NavLink>
      </div>
    </div>
  );
}

export default Header;
