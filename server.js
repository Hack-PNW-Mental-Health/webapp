const express = require('express') 
const app = express();   


app.listen(3000) 
app.set('view engine', 'ejs') 

app.get("/", (req, res) => {
    console.log("here") 
    res.render('index')
})  


