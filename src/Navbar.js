import React from "react";
import "./Navbar.css";
import Cart from "./Cart";
// import { contentprovider } from "./Menu";

const Navbar = () => {
  //   const usevalue = useContext(contentprovider);
  return (
    <div className="header">
      <div className="title">ReactFoods</div>
      <Cart />
    </div>
  );
};

export default Navbar;
