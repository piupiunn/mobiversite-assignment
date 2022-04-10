import React from "react";
//comp

//style
import "./UserList.css";

export default function UserList({ allUsers }) {
  return (
    <div className="user-list">
      <div className="title">
        <p>Popular Users</p>
      </div>
      {allUsers.map((user) => (
        <div key={user.id}>
          <div className="user-list-item">
            <img src={user.imgurl} alt="" />
            <div className="top-users">
              <p className="tops">{user.name}</p>
              <p>{user.entry}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
