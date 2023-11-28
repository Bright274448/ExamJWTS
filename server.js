const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;

//ถ้านำไปใช้จริงจะต้องทำเป็น .env
const secretKey = process.env.SECRET_KEY || 'defaultSecretKey';

// Middleware
app.use(bodyParser.json());

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Access denied. Token not provided.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token.' });
    }

    req.decoded = decoded;
    next();
  });
}

// ตัวอย่าง API เมื่อ Authentication
app.get('/api/private', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the private API.' });
});

// API สำหรับการ login และสร้าง Token
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // ตรวจสอบ username และ password จริง ๆ จากฐานข้อมูล

  // สร้าง Token
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
