var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Forever21!",
  database: "events"

});connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  comingUp();
});

function comingUp() {
  connection.query("SELECT * FROM comingUp", function(err, res) {
    if (err) throw err;
charityOptions(res);
  });
}
function charityOptions(comingUp) {
  inquirer
    .prompt([
    {    
      type: "input",
      name: "comingUp",
      message: "What is your event name?",
    },
    {    
        type: "input",
        name: "location",
        message: "Where will your event take place?",
      },
      {    
        type: "input",
        name: "time",
        message: "What time will your event take place?",
      },
      {    
        type: "input",
        name: "About",
        message: "About your event",
      
    //   validate: function(value) {
    //     if (isNaN(value) === false) {
    //       return true;
    //     }
    //     return false;
    // }
  }

    ])
    .then(function(answer) {
      console.log(answer);
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO ComingUp SET ?",
          {
            event_name: answer.comingUp,
            event_time: answer.time,
            event_location: answer.location,
            event_about: answer.About
          },
          function(err) {
            if (err) throw err;
            console.log("Your event was created successfully!");
          }
        );
      });
  


}