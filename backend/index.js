var express = require('express');
var app = express();

var cors = require('cors');
var mysql = require('mysql');

app.use(cors());
app.use(express.json());

app.get('/comments',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });

    connection.connect();

    var myQueryComments="SELECT name_user, lname_user, coments_user, points_obtained, time_comment FROM comentarios";
    
    connection.query(myQueryComments,function(error,results,fields){
        //console.log(error);
        res.send(results);
        connection.end();
    });
});

app.post('/comments', function(req, res){
    // Step 0: Definir la conexion a la BD
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });   
   connection.connect();
   var myQuery =   " INSERT INTO comentarios (lugar_id, name_user,lname_user,coments_user,points_obtained,time_comment)"+
                    "VALUES (?, ? , ? , ? , ? , NOW())"

   var myValues = [req.body.lugar_id, req.body.name_user, req.body.lname_user, req.body.coments_user, req.body.points_obtained, req.body.time_comment];

   connection.query(myQuery, myValues, function(error, results, fields){
       if (error) throw error;       
       res.send(results);
       connection.end();
   });
});

app.delete('/comments/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });
    connection.connect();

    var myQuery= "DELETE FROM comentarios WHERE id = ?;";
    var myValues=[req.params.name_user];

    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;        
        res.send(results);    
        connection.end();
    });
});

app.listen(3000,function(){
    console.log("Port 3000 is listening :D")
})