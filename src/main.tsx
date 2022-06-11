import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./Pages/UserProfile";
import Home from "./Pages/Home";
import MyFeed from "./Pages/MyFeed";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="user" element={<UserProfile />} />
          <Route path="my-feed" element={<MyFeed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
