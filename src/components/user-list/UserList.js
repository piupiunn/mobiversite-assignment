import React from "react";
//comp
import ProfilePhoto from "../profile-photo/ProfilePhoto";
//style
import "./UserList.css";

export default function UserList({ dataUsers }) {
  return (
    <div className="user-list">
      <h2>Popular Users</h2>
      {dataUsers.map((user) => (
        <div>
          <div key={user} className="user-list-item">
            <span>{user.name}</span>
            <p>{user.entry}</p>
            <ProfilePhoto src={user.imgurl} />
          </div>
        </div>
      ))}
    </div>
  );
}
