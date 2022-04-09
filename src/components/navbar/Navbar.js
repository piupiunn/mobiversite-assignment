import React from "react";

//style
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <h1>Cooking Ninja</h1>

        <Searchbar />
      </nav>
    </div>
  );
}
