const jwt = require('jsonwebtoken');
require('dotenv').config();

const userId = process.env.USER_ID;
const jwtSecret = process.env.JWT_SECRET;

// Generate a JWT token
const token = jwt.sign({ userId }, jwtSecret);
console.log('Generated Token:', token);