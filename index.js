var express=require('express');
var app=express();
var mysql=require('mysql');
//EL CORS Impide recibir llamadas desde otros dominios
var cors = require('cors');

app.use(cors());

app.get('/comments',function(req,res){
    //Setupi connection
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'BD_Comentarios'
    });
    //Open the connection
    connection.connect();
    /* MY Query
    SELECT name_user,lname_user,coments_user,points_obtained,time_comment
    FROM T_Comentarios;
    */
    // Send the query Comments
    var myQueryComments="SELECT name_user,lname_user,coments_user,points_obtained,time_comment FROM T_Comentarios";
    connection.query(myQueryComments,function(error,results,fields){
        // Proces  the results
        res.send(results);    
        connection.end();
    });
});

app.listen(3000,function(){console.log("We are in the port 3000 :D")})
