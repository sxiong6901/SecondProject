const express = require('express');
const path = require('path')
const mysql = require('mysql');
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

connection.connect((err) => {
  if (err) throw err
  log(`connection thread is ${connection.threadId}`);
})

// Routes
app.get("/", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM schools", function(err, result) {
    if (err) throw err;
    // We then begin building out HTML elements for the page.
    var html = "<h1> Magical Schools </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>School: " + result[i].name + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});


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