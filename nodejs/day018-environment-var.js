// Load environment variables from .env.day018 file
require('dotenv').config({ path: '.env.day018' });

// Access environment variables
const PORT = process.env.PORT || '3000';
const DB_HOST = process.env.DB_HOST || 'localhost';
const API_KEY = process.env.API_KEY;

// Using environment variables in the application
console.log(`Server is running on port ${PORT}`);
console.log(`Database host: ${DB_HOST}`);
console.log(`API key: ${API_KEY || 'No API key provided'}`);