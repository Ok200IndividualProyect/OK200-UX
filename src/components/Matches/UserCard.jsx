import React from "react";
import "./matches.css"

function UserCard({ user, showDiscord }) {
  return (
    <div className="user-card">
      <h3 className="username">{user.username}</h3>
      <p className="description">{user.description}</p>
      <p className="technologies">Technologies: {user.technologies.join(", ")}</p>

      {user.discordLink && showDiscord && (
        <a href={user.discordLink} target="_blank" rel="noopener noreferrer" className="discordLink">
          Chat on Discord
        </a>
      )}
    </div>
  );
}

export default UserCard;
