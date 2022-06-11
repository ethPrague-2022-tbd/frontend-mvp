import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import { WagmiConfig } from 'wagmi';
import { client } from './connectors';

const App: React.FC = () => (
  <div className=" h-screen">
    <WagmiConfig client={client}>
      <Topbar />
      <Outlet />
    </WagmiConfig>
  </div>
);

export default App;
