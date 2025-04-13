require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB URI from environment variables
const mongoURI = 'mongodb+srv://User:123@cluster0.uen4yeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Club model
const Club = mongoose.models.Club || mongoose.model('Club', {
    title: String,
    topic: String,
    event: String,
    location: String,
    description: String,
  });
  

// Club routes
app.get('/api/clubs', async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).send('Error fetching clubs');
  }
});

app.get('/api/clubs/:id', async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) {
      return res.status(404).send('Club not found');
    }
    res.json(club);
  } catch (error) {
    res.status(500).send('Error fetching club');
  }
});

app.post('/api/clubs', async (req, res) => {
    console.log('Received POST /api/clubs:', req.body); // Debug log
  
    try {
      const body = {
        ...req.body,
        title: req.body.club, // Map club to title
        topic: 'General', // Add topic if needed
      };
  
      const newClub = new Club(body);
      await newClub.save();
      res.status(201).json(newClub);
    } catch (err) {
      console.error('Error saving to MongoDB:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.delete('/api/clubs/:id', async (req, res) => {
  console.log('Received DELETE request for club ID:', req.params.id); // Log the incoming request

  try {
    const clubId = req.params.id;  // Get the club ID from the URL parameters
    console.log('Deleting club with ID:', clubId); // Log to make sure the correct ID is received

    // Attempt to delete the club by its ID
    const deletedClub = await Club.findByIdAndDelete(clubId);  // This is where the deletion happens

    if (!deletedClub) {
      return res.status(404).json({ message: 'Club not found' });  // If the club doesn't exist
    }

    console.log('Club deleted successfully:', deletedClub); // Log successful deletion
    res.status(200).json({ message: 'Club deleted successfully' });  // Send success response
  } catch (error) {
    console.error('Error deleting club:', error);  // Log any errors
    res.status(500).json({ message: 'Error deleting club' });  // Send error response
  }
});

  
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
