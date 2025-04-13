import React, { JSX, useEffect, useState } from 'react';
import Header from '../components/Header';
import ClubCard from '../components/ClubCard';

interface Club {
  _id: string;
  title: string;
  topic: string;
  event: string;
  location: string;
  description: string;
}

// Explicitly type the component
const Index = (): JSX.Element => {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clubs')
      .then(res => res.json())
      .then(data => {
        console.log(data); // 👀 Make sure it logs in console
        setClubs(data);
      });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="club-grid">
        {clubs.length > 0 ? (
          clubs.map((club) => (
            <ClubCard key={club._id} club={club} />
          ))
        ) : (
          <p>Loading clubs...</p>
        )}
      </main>
    </div>
  );
};

export default Index;
