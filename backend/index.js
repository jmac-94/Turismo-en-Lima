var express = require('express');

var app = express;
var mysql = require('mysql');

//EL CORS Impide recibir llamadas desde otros dominios
var cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/comments',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'BD_Comentarios'
    });

    connection.connect();

    var myQueryComments="SELECT name_user, lname_user, coments_user, points_obtained, time_comment FROM T_Comentarios";
    
    connection.query(myQueryComments,function(error,results,fields){
        res.send(results);    
        connection.end();
    });
});

app.listen(3000,function(){
    console.log("Port 3000 is listening :D")
})