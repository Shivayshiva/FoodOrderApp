import "./App.css";
import React, { createContext, useState } from "react";
// import React from "react";

import Navbar from "./Navbar";
import Summary from "./Summary";
import Menu, { data } from "./Menu";
// import Menu from "./Menu";

import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();

function App() {
  const [menudata, setMenudata] = useState([]);
  return (
    <>
      <UserContext.Provider value={menudata}>
        <Navbar totalorderdone={menudata} />
      </UserContext.Provider>
      {/* <Navbar /> */}
      <div className="Main">
        <Summary />
        <Menu setdata={setMenudata} />
      </div>
    </>
  );
}

export default App;
