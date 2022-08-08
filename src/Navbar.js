import React from "react";
import "./Navbar.css";
import Cart from "./Cart";
// import { UserContext } from "./App";

const Navbar = () => {
    // const usevalue = useContext(UserContext);
  return (
    <div className="header">
      <div className="title">ReactFoods</div>
      <Cart />
    </div>
  );
};

export default Navbar;
