import React from "react";
import Matches from "../Matches/Matches";

function MainDashboard() {
  const loggedUserId = 1; // Reemplaza con el id real del usuario conectado

  return (
    <div className="main-dashboard">
      <h1>Welcome to your Dashboard</h1>
      <Matches userId={loggedUserId} />
    </div>
  );
}

export default MainDashboard;
