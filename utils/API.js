

// export default {

module.exports=function(connection, router){
    router.get('/events', function(req, res){
        connection.query('SELECT * FROM comingUp', function (err, data){
            (err)?res.send(err):res.json({comingUp:data});
            console.log(data)
            res.send(JSON.stringify(data));
        })
    });

    router.post('/event', function(req, res){
        connection.query(
          "INSERT INTO ComingUp SET ?",
          {
            event_name: req.eventName,
            event_time: req.eventTime,
            event_location: req.eventLocation,
            event_host: req.eventHost,
            event_about: req.eventAbout
          },
          function(err) {
            if (err) throw err;
            console.log("Your event was created successfully!");
          }
        );
    
      })

      return router;
};


// export default {
//     getEvents: function() { 
//         console.log("getEvents function called")
//         // app.get('/', function(req, res){
//             // connection.query('SELECT * FROM comingUp', function (err, data){
//                 // (err)?res.send(err):res.json({users:data});
//                 // console.log(data)
//             // })
//         // });
//     },
//     saveEvent: function(eventData) {
//         console.log("saveEvents function called")
//         // app.post('/', function(req, res, data){
//             // connection.query('INSERT INTO ComingUp SET', function (err, data){
//                 // (err)?res.send(err):res.json({users:data});
//             // })
//         // });
//     }
// };