    const jwt = require('jsonwebtoken');
    const expressJwt = require('express-jwt');

    // Middleware to authorize routes using JWT
    function authorize(req, res, next) {
        // Extract the token from the Authorization header
        const authorizationHeader = req.headers.authorization;

        // Check if authorization header is provided
        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Authorization header is missing' });
        }
        
        // Extract the token part (without the "Bearer " prefix)
        const token = authorizationHeader.split(' ')[1];

        // Check if token is provided
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        // Verify the token using the secret key from the .env file
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            // Attach the decoded user information to the request object
            req.user = decoded;
            next();
        });
    }

    module.exports = authorize;