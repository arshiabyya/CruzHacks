import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ClubDetail() {
  const { id } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/clubs/${id}`)
      .then(res => res.json())
      .then(data => setClub(data));
  }, [id]);

  if (!club) return <div>Loading...</div>;

  return (
    <div>
      <h2>{club.title}</h2>
      <p><strong>Topic:</strong> {club.topic}</p>
      <p><strong>Event:</strong> {club.event}</p>
      <p><strong>Location:</strong> {club.location}</p>
      <p>{club.description}</p>
    </div>
  );
}
