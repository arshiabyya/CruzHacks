import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ClubList() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clubs')
      .then(res => res.json())
      .then(data => setClubs(data));
  }, []);

  return (
    <div>
      {clubs.map(club => (
        <div key={club._id}>
          <h3><Link to={`/club/${club._id}`}>{club.title}</Link></h3>
          <p>{club.topic}</p>
        </div>
      ))}
    </div>
  );
}
