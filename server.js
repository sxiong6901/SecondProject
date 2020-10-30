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

$("#Sauce").on("click",function(event) {
  event.preventDefault();
var pizzasauce = document.getElementById("Sauce").value
if (pizzasauce = "Tomato") {
  var img = new Image(); 
  var div = document.getElementById('pizzcrust'); 
 
img.onload = function() { 
  div.appendChild(img); 
}; 
 
img.src = './images/download.jpg' 
}});

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