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
  onDelete?: (id: string) => void;
}

const ClubCard = ({ club, onDelete }: ClubCardProps) => {
  const handleDelete = (clubId: string) => {
    const confirmed = window.confirm(`Do you want to delete "${club.title}"?`);

    if (confirmed) {
      fetch(`http://localhost:5000/api/clubs/${clubId}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to delete');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Deleted club:', data);
          if (onDelete) {
            onDelete(clubId);
          }
        })
        .catch((error) => {
          console.error('Error deleting club:', error);
        });
    } else {
      console.log('Delete canceled'); // Log if the user cancels
    }
  };

  return (
    <div className="club-card bg-white rounded-xl shadow-md p-4">
      <div className="card-header flex justify-between items-start">
        <div className="card-title">
          <h3 className="text-lg font-semibold">{club.title}</h3>
          <p className="text-sm text-gray-500">{club.topic}</p>
        </div>

        <button
          className="delete-btn"
          onClick={() => handleDelete(club._id)}
        >
          Delete
        </button>
      </div>

      <div className="card-image my-2">
        <div className="placeholder-image bg-gray-100 h-32 w-full rounded-md"></div>
      </div>

      <div className="card-content space-y-2">
        <div className="event-info">
          <h4 className="text-md font-medium">{club.event}</h4>
          <p className="text-sm text-gray-600">{club.location}</p>
        </div>

        <p className="text-sm text-gray-700">{club.description}</p>

        <button className="open-btn bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
          Open
        </button>
      </div>
    </div>
  );
};

export default ClubCard;
