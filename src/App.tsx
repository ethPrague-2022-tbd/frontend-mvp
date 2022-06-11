import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import { Provider } from 'wagmi';
import { connectors } from './connectors';

const App: React.FC = () => (
  <div className=" h-screen">
    <Provider autoConnect connectors={connectors}>
      <Topbar />
      <Outlet />
    </Provider>
  </div>
);

export default App;
