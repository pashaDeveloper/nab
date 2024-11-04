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

// تعریف روترها و مسیرهای وبسایت اصلی
app.post('/api/website/register', (req, res) => {
  // مسیر برای ثبت نام کاربران
  res.send('User registered');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Website backend running on port ${PORT}`);
});
