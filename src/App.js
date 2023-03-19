import React from "react";
import "./index.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App w-4/5 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
