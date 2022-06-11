import React from "react";
import { Outlet } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import Topbar from "./components/Topbar";
import { client } from "./connectors";

const App: React.FC = () => (
  <div className=" h-screen">
    <WagmiConfig client={client}>
      <Topbar />
      <Outlet />
    </WagmiConfig>
  </div>
);

export default App;
