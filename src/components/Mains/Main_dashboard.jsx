import React, { useEffect, useState } from "react";
import Matches from "../Matches/Matches";

function MainDashboard() {
  const [loggedUserId, setLoggedUserId] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("loggedUserId");
    if (userId) {
      setLoggedUserId(Number(userId));
    }
  }, []);

  if (!loggedUserId) {
    return <div>Por favor regístrate para ver tus matches</div>;
  }

  return (
    <div className="main-dashboard">
      <h1>Bienvenido a tu Dashboard</h1>
      <Matches userId={loggedUserId} />
    </div>
  );
}

export default MainDashboard;

