import React from "react";

//style
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={"../assets/Group 368.svg"} alt="" />
      </div>
      <div>
        <form className="search">
          <label>
            <span>
              <img className="search-img" src={"../assets/search.svg"} alt="" />
            </span>
            <input type="text" />
          </label>
        </form>
        <div className="nav-user">
          <img src={"../assets/girl-small.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
