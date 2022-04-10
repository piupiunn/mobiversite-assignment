import { BrowserRouter, Routes, Route } from "react-router-dom";

//comps

import React from "react";

import SecondPage from "./pages/SecondPage";

//style
import "./App.css";
import Details from "./pages/details/Details";
import Feed from "./pages/feed/Feed";
import UserList from "./components/user-list/UserList";
import MainPage from "./pages/MainPage";
import Navbar from "./components/navbar/Navbar";
import { allUsers } from "./data/users";
import { allFeed } from "./data/feed";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <UserList className="user-list" allUsers={allUsers} />
        <Feed className="feed" allFeed={allFeed} />
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
