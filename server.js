const express = require('express') 
const app = express();   
//database connection
const db = require("./db.js")
app.use(express.json()) // => req.body
app.use(express.urlencoded({ extended: true }));



app.listen(3000) 
app.set('view engine', 'ejs') 


//inistal /get
app.get("/", (req, res) => {
    res.render("index")  
    
})  


//all requests going to db_routes
const db_routes = require('./routes/db_routes.js')
app.use("/db_routes", db_routes) 


