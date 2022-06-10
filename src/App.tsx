import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import UserProfile from "./components/UserProfile";

const App: React.FC = () => (
  <div className=" h-screen">
    <Topbar />
    <Outlet />
  </div>
);

export default App;
