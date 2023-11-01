//REST API demo in Node.js
// const express = require('express'); // require the express framework
// const app = express();
// const fs = require('fs');
// const CONFIG = require("./config/config"); //require file system object
// const bodyParser = require("body-parser"); 
// const connectToDb = require("./db/mongodb");

//Add Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//Connect to Mongodb Database
// connectToDb();

// app.get("/", (req, res) => {
//     res.send("Hello Product Store");
// });



// Endpoint to Get a list of users
// app.get('/getUsers', function(req, res){
//     fs.readFile(__dirname + "/" + "product.json", 'utf8', function(err, data) {
//         console.log(data);
//         res.end(data); // you can also use res.send()
//     });
// })

// Create a server to listen at port 8080
// var server = app.listen(8080, function() {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("REST API demo app listening at http://localhost:8080", host, port);
// });

// app.listen(CONFIG.PORT, () => {
//     console.log(`Server started on http://localhost:${CONFIG.PORT}`);
// });
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./product.json');
const port = process.env.PORT||4000;
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// console.log(data);
// key={ image, name, description }

server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
});

