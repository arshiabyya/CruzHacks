import React from 'react';

interface ClubCardProps {
  club: {
    _id: string;
    title: string;
    topic: string;
    event: string;
    location: string;
    description: string;
  };
}

const ClubCard = ({ club }: ClubCardProps) => {
  return (
    <div className="club-card">
      <div className="card-header">
        <div className="card-avatar">A</div>
        <div className="card-title">
          <h3>{club.title}</h3>
          <p>{club.topic}</p>
        </div>
        <button className="menu-btn">⋮</button>
      </div>
      
      <div className="card-image">
        <div className="placeholder-image"></div>
      </div>
      
      <div className="card-content">
        <div className="event-info">
          <h4>{club.event}</h4>
          <p>{club.location}</p>
        </div>
        
        <p className="description">{club.description}</p>
        
        <button className="open-btn">Open</button>
      </div>
    </div>
  );
};

export default ClubCard;
