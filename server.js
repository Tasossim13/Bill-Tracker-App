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

  const { email, password } = req.body; 
  console.log('Received email: ', email);
  console.log('Received password: ', password);
  let dynamicArray = [{email:"tasos", password:123}];
//na ftiaksw ena while gia iterate se olo ton pinaka
  if(dynamicArray[0].email==email){
    console.error("Already In array");
  }else{
    dynamicArray.push({email: email, password:password});
    console.log("email and password: "+ dynamicArray[0].email + dynamicArray[0].password);
  }

  // Επιστροφή απόκρισης
  res.status(200).json({message: 'Data received'});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
