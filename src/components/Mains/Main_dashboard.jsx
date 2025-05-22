import "./main.css";
import React, { useEffect, useState } from "react";
import Matches from "../Matches/Matches";

function MainDashboard() {
  <div className="content-main"></div>
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
    <div className="content-main">
      <h1 className="content-text">
        <div className="heading">Start connecting with people not just to build 
        great programs and solutions, but to create  friendships along the way.</div></h1>
      <Matches userId={loggedUserId} />
    </div>

  );

}

export default MainDashboard;

