// const http = require('http');
// const express = require('express');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const app = express();

// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message('The Robots are coming! Head for the hills!');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });
// Dependencies

const express = require("express");
var mysql = require("mysql");
var axios = require("axios");
var cheerio = require("cheerio");

const PORT = process.env.PORT || 3001;
const app = express();
var router = express.Router();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var index = require ('../utils/API');


var connection = mysql.createConnection({
  host: "localhost",
  // port: 3306,
  user: "root",
  password: "The1992vision",
  database: "events"

});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  // comingUp();
});

app.use("/api", require('./utils/API')(connection, router));

app.listen(PORT, () => {
  console.log("app running on port")
})




