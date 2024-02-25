import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-1 w-full justify-around py-3 border-b-2">
      <div className="flex w-1/3 justify-center">
        <h1 className="font-semibold text-2xl">Cointab SE-ASSIGNMENT</h1>
        {/* <NavLink className="text-center" to="">
          Home
        </NavLink> */}
      </div>
    </div>
  );
}

export default Header;
