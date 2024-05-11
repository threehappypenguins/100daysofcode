// validate.js
const { body, validationResult } = require('express-validator');

const validateInputs = [
  body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Group errors by field
      const errorByField = errors.array().reduce((acc, error) => {
        if (!acc[error.param]) {
          acc[error.param] = [];
        }
        acc[error.param].push(error.msg);
        return acc;
      }, {});

      return res.status(400).json({ errors: errorByField });
    }
    next();
  }
];

module.exports = validateInputs;
