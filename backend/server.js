const express = require('express');
const app = express();
const port = 4000;

const secret = process.env.my_sec;

app.get('/api', (req, res) => {
  res.json({ message: `Le secret est : ${secret}` });
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
