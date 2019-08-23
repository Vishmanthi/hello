// var express = require('express');
// var route = require('path');
// var bodyParser = require('body-parser');
// var cors = require('cors');
    

//     const app = express();
//     app.use(bodyParser.json());
//     app.use(cors());
//     let port = process.env.PORT || 8081;

//     const server = app.listen(function(){
//         console.log('Listening on port ' + port);
//     });

//     app.get('/',function(req,res){
//         res.send("Hello world!");
//     });
    
//     app.get("/url", (req, res, next) => {
//         res.json("hjhkjjlklkl");
//        });

var express = require('express');
const mysql = require('mysql');
var route = require('path');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE,OPTIONS,PUT')
  next();
});
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

  app.post("/api/create",(req,res,next)=>{
    console.log("mnmnm");

    const user = req.body;
    console.log(user);
    connection.query('INSERT INTO table1 SET ?', user, (err, res) => {
      if(err) throw err;
     
    });
  
   })

   app.delete("/api/people/:id",(req,res,next)=>{
    id=req.params.id;
    console.log(id);
    connection.query('DELETE FROM table1 WHERE id=?', id, (err, res) => {
      if(err) throw err;
     
    });
    
 });
  
  app.get('/people',(req,res,next)=>{
    connection.query('SELECT * FROM table1', (err,rows) => {
        if(err) throw err;
        else{
            res.json(rows);
            console.log('Data received from Db:\n');
            console.log(rows);
        }
      
        
      });
    
  })
  
var port=process.env.PORT||8080;
app.get('/',function(req,res){
  res.send("Hello world!");
});

app.listen(port,function(){
  console.log("Running the server on the port"+port);
});

app.get("/url", (req, res, next) => {
  res.json("jdijdosjo");
 });

 