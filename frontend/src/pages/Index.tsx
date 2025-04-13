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

const Index = (): JSX.Element => {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clubs')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setClubs(data);
      });
  }, []);

  const handleDelete = async (id: string) => {
    console.log("Sending DELETE request for club ID:", id); // This should log when you click "OK" in the confirmation
    try {
      const res = await fetch(`http://localhost:5000/api/clubs/${id}`, {
        method: 'DELETE',
      });
  
      if (res.ok) {
        console.log("Club deleted successfully");
        setClubs((prev) => prev.filter((club) => club._id !== id)); // Update state to remove the deleted club
      } else {
        const errorText = await res.text();
        console.error('Failed to delete:', errorText);
      }
    } catch (error) {
      console.error('Error deleting club:', error);
    }
  };
  
  
  
  

  return (
    <div className="app-container">
      <Header />
      <main className="club-grid">
        {clubs.length > 0 ? (
          clubs.map((club) => (
            <ClubCard key={club._id} club={club} onDelete={handleDelete} />
          ))
        ) : (
          <p>Loading clubs...</p>
        )}
      </main>
    </div>
  );
};

export default Index;
