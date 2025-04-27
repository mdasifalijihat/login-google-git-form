import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}> Home </NavLink>
      <NavLink to={"/"}> About </NavLink>
      <NavLink to={"/"}> Blog </NavLink>
      <NavLink to={"/login"}> LogIn </NavLink>
      <NavLink to={"/register"}> Register </NavLink>
      <NavLink to={"/UserAccount"}> User Account </NavLink>
      
    </>
  );

  return (
    <div>
      <ul>
        <li className="flex justify-center items-center gap-6 space-x-4">
          {links}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
