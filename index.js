const http = require('http');
const mym = require('./mym');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World <h1> How are You?</h1>'+mym.printData());
});

//console.log(WebAssembly);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//var mysql = require('mysql');
/* var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"mydb1"
});

con.connect(function(err){
  if(err) throw err;
  console.log("server connected.")
  con.query("select * from tb1",function(err, result){
    if(err) throw err;
    console.log(result);
    console.log("Table created.")
  })
}); */
/* var fs = require('fs'); 
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  console.log('The file is open'); 
});
var events = require('events');
var eventEmitter = new events.EventEmitter();
const myEventHandler = function (){
  console.log("runs on a call of scream event");
}
eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream') */
/* const express = require('express')
const app = express()
//run express app using npm run dev
const port = 8080

//  app.get('/', (req, res, next) => {
//   console.log("hello");
//   setTimeout(next, 5);
// },(req, res) => {
//   res.send('Hello World!')
// }) 
app.get('/', (req, res) => {
  res.send('Hello World from Express app!')
})

//run express app using npm run dev
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */