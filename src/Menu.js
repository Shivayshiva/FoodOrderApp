import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="main-content">
      <div className="main-content-details">
        <div className="font">Chicken Biryani</div>
        <div className="font-sub">
          Hyderabadi style biryani, used basmati rice with fortune oil.
        </div>
        <div className="font-sub">Price: 240 INR</div>
      </div>
      <div className="main-content-addon">
        <div className="font">Total: 5</div>
        <button type="button" class="btn btn-primary btn-lg m-2">
          + Add
        </button>
      </div>
    </div>
  );
};

export default Menu;
