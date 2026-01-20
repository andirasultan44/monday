const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoute');
const courseRoutes = require('./routes/courseRoute');
const uploadRoutes = require('./routes/uploadRoute');


app.use(express.json());

// Semua route user akan prefiks "/api"
app.use('/api', userRoutes);
app.use('/api', courseRoutes);
app.use('/api', uploadRoutes);

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});

