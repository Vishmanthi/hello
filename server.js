var express = require('express');
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