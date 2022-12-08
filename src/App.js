import React, { useEffect } from "react";
import "./App.css";
import Home from "./Components/HomePage/Home";
import Sidebar from "./Components/SideMenuBar/Sidebar";

function App() {
  return (
    <div className="d-flex w-100 p-1">
      <div className="w-20 p-1 bg-danger text-white">
        <Sidebar />
      </div>

      <div className="d-flex  w-100 p-1 flex-column align-items-center">
        <Home />
      </div>
    </div>
  );
}

export default App;
