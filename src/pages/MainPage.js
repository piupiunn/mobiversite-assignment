import React from "react";
import UserList from "../components/user-list/UserList";
import Details from "./details/Details";
import Feed from "./feed/Feed";
import { allFeed } from "../data/feed";

//style
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="main">
      <Details className="details" allFeed={allFeed} />
    </div>
  );
}
