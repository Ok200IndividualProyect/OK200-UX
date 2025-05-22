import React, { useEffect, useState } from "react";
import { getUserMatches } from "../../api/userService";
import UserCard from "../UserCard/UserCard";

function Matches({ userId }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div>Cargando matches...</div>;
  if (error) return <div>{error}</div>;
  if (matches.length === 0) return <div>No hay matches por ahora.</div>;

  return (
    <div className="matches-container">
      {matches.map((user) => (
        <UserCard key={user.username} user={user} />
      ))}
    </div>
  );
}

export default Matches;