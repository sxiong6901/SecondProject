require('dotenv').config()
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
  password: process.env.PASSWORD,
  database: 'pizza_db'
})

connection.connect((err) => {
  if (err) throw err
  log(`connection thread is ${connection.threadId}`);
})

const onConnection = () => {
  return new Promise ((resolve, rejects) => {
    connection.query("SELECT * FROM pizza", (err, result) => {
      if (err) {
        log(err)
        rejects(err)
      }
      log(result)
      resolve(result)
    })
  })
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.send('Welcome to The Pizza Shack')
});

app.listen(port, () => {
  console.log('Connected to The Pizza Shack on port 3000')
});