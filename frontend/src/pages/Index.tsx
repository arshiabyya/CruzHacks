
import React from 'react';
import Header from '../components/Header';
import ClubCard from '../components/ClubCard';

const Index = () => {
  // Sample club data
  const clubs = [
    { id: 1, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 2, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 3, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 4, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
  ];

  return (
    <div className="app-container">
      <Header />
      <main className="club-grid">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </main>
    </div>
  );
};

export default Index;