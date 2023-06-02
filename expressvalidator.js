const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.json());

// Example route that validates a POST request body
app.post('/user', [
  // Validate and sanitize the 'name' field
  body('name').trim().isLength({ min: 3 }),

  // Validate and sanitize the 'email' field
  body('email').isEmail().normalizeEmail(),

  // Validate the 'age' field
  body('age').isInt({ min: 18, max: 99 })
], (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // If the request passes validation, process the data
  // ...

  res.status(200).json({ message: 'User created successfully' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});