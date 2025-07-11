const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const appRoutes = require('./routes/applicationRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', appRoutes); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch(err => console.log('MongoDB error:', err));

