import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header.tsx';
import ClubCard from './components/ClubCard.tsx';
import AddEvent from './pages/AddEvent.tsx';

function App() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clubs')
      .then((res) => res.json())
      .then((data) => setClubs(data))
      .catch((err) => console.error('Error fetching clubs:', err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/add-event" element={<AddEvent />} />
        <Route
          path="/"
          element={
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
