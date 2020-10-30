const express = require('express');
const path = require('path')
const mysql = require('mysql');
const { response } = require('express');
const { resolve } = require('path');
const { rejects } = require('assert');
const app = express();
const port = 3000;
const log = (msg) => console.log(msg)

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Coding2020!',
  database: 'pizza_db'
})

var img = document.createElement("img"); 
 
img.src = "image.png"; 
var src = document.getElementById("x"); 
 
src.appendChild(img); 

connection.connect((err) => {
  if (err) throw err
  log(`connection thread is ${connection.threadId}`);
})

app

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.send('Welcome to The Pizza Shack')
});

app.listen(port, () => {
  console.log('Example app listening on port ${port}!')
  console.log('Connected to The Pizza Shack on port 3000')
});