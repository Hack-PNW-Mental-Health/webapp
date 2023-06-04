const express = require('express') 
const app = express();   
//database connection
const db = require("./db.js")
app.use(express.json()) // => req.body



app.listen(3000) 
app.set('view engine', 'ejs') 



app.get("/", (req, res) => {
    res.render("index")  
    
})  


app.post("/database_query", (req, res) => {  
    const { name } = req.body;
    const { age } = req.body; 
    const { gender } = req.body; 
    const { disorder } = req.body; 


    console.log("end")
    res.send(name)  

})

