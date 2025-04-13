import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import ClubCard from './components/ClubCard.js';
import AddEvent from './pages/AddEvent.js';


function App() {
  // Sample club data
  const clubs = [
    { id: 1, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 2, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 3, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 4, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 5, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 6, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 7, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
    { id: 8, title: 'Club', topic: 'Topic', event: 'Event', location: 'Location', description: 'Description' },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/" element={
          <div className="app-container">
            <Header />
            <main className="club-grid">
              {clubs.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;