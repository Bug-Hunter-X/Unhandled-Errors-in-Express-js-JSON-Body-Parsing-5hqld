const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if req.body is empty or invalid
  console.log(user.name); // Potential error if user.name is undefined
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));