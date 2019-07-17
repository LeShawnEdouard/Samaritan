

// export default {

module.exports=function(connection, router){
    router.get('/events', function(req, res){
        connection.query('SELECT * FROM comingUp', function (err, data){
            if (err) {
              res.send(err)
            }
            else {
              res.json({comingUp:data});
            }
        })
    });

    router.post('/event', function(req, res){


        connection.query(

          // "INSERT INTO quotes (author, quote) VALUES (?, ?)", [req.body.author, req.body.quote]
          "INSERT INTO comingUp SET ?", 
            {
            event_name: req.body.event_name,
            event_time: req.body.event_time,
            event_location: req.body.event_location,
            event_host: req.body.event_host,
            event_about: req.body.event_about
            },
          function(err) {
            if (err) throw err;
            console.log("Your event was created successfully!");
            res.json({status: 'success'})
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