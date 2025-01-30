const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Request body is missing');
  }
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required');
  }
  // ... process user data
  console.log(name, email);
  res.status(201).send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));