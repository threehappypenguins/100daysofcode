const rateLimit = require('express-rate-limit');

// Configure the rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per windowMs
    message: {
        status: 429,
        message: "Too many requests, please try again later."
    }
});

module.exports = limiter;