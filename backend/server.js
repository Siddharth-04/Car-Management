require('dotenv').config(); // Make sure this is at the very top
const express = require('express');
const cors = require('cors');
const path = require('path'); 
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const carRoutes = require('./routes/carRoutes'); // Import car routes
const connectDB = require('./db');
const app = express();

// Connect to MongoDB
connectDB();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors({
  origin: 'http://localhost:3000',  // Make sure your frontend can access the backend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/auth', authRoutes); 
app.use('/cars', carRoutes); 

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
