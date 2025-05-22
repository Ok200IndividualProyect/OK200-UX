import "./matches.css";



import React, { useEffect, useState } from "react";
import { getUserMatches } from "../../api/userService";
import UserCard from "./UserCard";
import Button from "../Button/Button";

function Matches({ userId }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDiscord, setShowDiscord] = useState(false);


  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getUserMatches(userId);
        setMatches(data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar matches");
        setLoading(false);
      }
    };

    fetchMatches();
  }, [userId]);

    const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % matches.length);
    setShowDiscord(false); 
  };

  const handleConnect = () => {
    setShowDiscord(true); 
  };

  if (loading) return <div>Cargando matches...</div>;
  if (error) return <div>{error}</div>;
  if (matches.length === 0) return <div>No hay matches por ahora.</div>;

  const currentMatch = matches[currentIndex];

return (
    <div className="matches-container">
      <UserCard user={currentMatch} showDiscord={showDiscord} />
      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <Button className = "shared-button" onClick={handleConnect}>Let's Connect</Button>
        <Button className = "shared-button" onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}
export default Matches;