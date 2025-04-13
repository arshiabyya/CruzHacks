import React, { useState } from 'react';
import { Button } from '../components/ui/button.js';
import { Input } from '../components/ui/input.js';
import { Textarea } from '../components/ui/textarea.js';
import Header from '../components/Header.js';
import ClubCard from '../components/ClubCard.js';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    club: '',
    event: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically submit the data to a server
    console.log('Form submitted:', formData);
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