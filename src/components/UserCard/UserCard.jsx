import React from "react";

function UserCard({ user, showDiscord }) {
  return (
    <div className="user-card">
      <h3>{user.username}</h3>
      <p>{user.description}</p>
      <p>Technologies: {user.technologies.join(", ")}</p>

      {user.discordLink && showDiscord && (
        <a href={user.discordLink} target="_blank" rel="noopener noreferrer">
          Chat on Discord
        </a>
      )}
    </div>
  );
}

export default UserCard;
