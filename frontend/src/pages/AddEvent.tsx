import React, { useState } from 'react';
import { Button } from '../components/ui/button.js';
import { Input } from '../components/ui/input.js';
import { Textarea } from '../components/ui/textarea.js';
import Header from '../components/Header.tsx';
import ClubCard from '../components/ClubCard.tsx';  // Correct the extension to .tsx

// Define the type for the form data
interface FormData {
  club: string;
  event: string;
  description: string;
  location: string;
}

const AddEvent = () => {
  const [formData, setFormData] = useState<FormData>({
    club: '',
    event: '',
    description: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted'); // Check if this logs when clicking "Post"

    fetch('http://localhost:5000/api/clubs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        setFormData({
          club: '',
          event: '',
          description: '',
          location: '',
        });
      })
      .catch((error) => console.error('Error submitting form:', error));
  };

  const handleCancel = () => {
    setFormData({
      club: '',
      event: '',
      description: '',
      location: '',
    });
  };

  // Sample club data for preview
  const previewClub = {
    _id: 'placeholder-id',  // Add a placeholder _id here
    title: formData.club || 'Club',
    topic: 'Category',
    event: formData.event || 'Event',
    location: formData.location || 'Location + Time',
    description: formData.description || 'Description'
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="add-event-container">
        <div className="form-container">
          <h2 className="form-title">Add an Event</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="club">Club Name:</label>
              <Input
                id="club"
                name="club"
                placeholder="Type Something..."
                value={formData.club}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="event">Event:</label>
              <Input
                id="event"
                name="event"
                placeholder="Type Something..."
                value={formData.event}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <Textarea
                id="description"
                name="description"
                placeholder="Type Something..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Time and Location:</label>
              <Input
                id="location"
                name="location"
                placeholder="Type Something..."
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-actions">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleCancel}
                className="cancel-button"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="post-button"
              >
                Post
              </Button>
            </div>
          </form>
        </div>
        
        <div className="preview-container">
          <ClubCard club={previewClub} />
        </div>
      </main>
    </div>
  );
};

export default AddEvent;
