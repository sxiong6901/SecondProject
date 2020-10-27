const express = require('express');
const path = require('path')
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Welcome to The Pizza Shack')
});

app.listen(port, () => {
  console.log('Connected to The Pizza Shack on port 3000')
});