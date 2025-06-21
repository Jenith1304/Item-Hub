const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/items', itemRoutes);
app.use('/api/enquire', enquiryRoutes);

// Serve React frontend
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Connect DB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(' MongoDB Connected');
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(` Server running on port ${port}`));
})
.catch(err => console.error(' DB Connection Error:', err));
