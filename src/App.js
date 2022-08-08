import "./App.css";
import React, { createContext } from "react";
// import React from "react";

import Navbar from "./Navbar";
import Summary from "./Summary";
import Menu, { data } from "./Menu";
// import Menu from "./Menu";

import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();

function App() {
  return (
    <>
      <UserContext.Provider value={data}>
        <Navbar totalorderdone={data} />
      </UserContext.Provider>
      {/* <Navbar /> */}
      <div className="Main">
        <Summary />
        <Menu />
      </div>
    </>
  );
}

export default App;
