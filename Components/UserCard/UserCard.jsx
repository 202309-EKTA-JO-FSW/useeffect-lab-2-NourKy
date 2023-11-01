import React from "react";
export default function UserCard({userData}) {
  return (
    <div className="user-card">
      <div>
        <img alt="avatar" />
      </div>
      <div>
        <h5> Name:{userData.login}</h5>

        <p> Username:{userData.url} </p>
      </div>
    </div>
  );
}
