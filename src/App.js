import React, { useEffect } from "react";
import "./App.css";
import Home from "./Components/HomePage/Home";
import Sidebar from "./Components/SideMenuBar/Sidebar";

function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
