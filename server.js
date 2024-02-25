const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Middleware για την ανάλυση JSON bodies
app.use(bodyParser.json());

// Δημιουργία POST endpoint
app.post('/save-name', (req, res) => {

  const email = req.body.email;
  console.log('Received name:', email);


  // Επιστροφή απόκρισης
  res.status(200).send('Name received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
