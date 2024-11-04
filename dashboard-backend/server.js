require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// اتصال به دیتابیس
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err));

// تعریف روترها و مسیرهای داشبورد
app.get('/api/dashboard/users', (req, res) => {
  // مسیر برای لیست کاربران
  res.send('List of users');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Dashboard backend running on port ${PORT}`);
});
