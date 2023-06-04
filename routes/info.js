const express = require("express")
const router = express.Router(); 
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: true }));
const db = require("./db.js");


//These routes are for all the info pages for example /info/depression

// remember /info 



//blank info page do what you want with it 
router.get('', (req, res) => {
    console.log("This is for whatever you want to do with it"); 
    res.send("testing testing testing") 

}) 



//depression page /info/depression: 
router.get('/depression', (req, res)=> { 
    console.log("depression_page works") 
    res.render("info_depression") 
} ) 


//schizophrenia page yes I spelled it correctly
router.get('/schizophrenia', (req,res) => {  
    console.log("this works lets go") 
    res.render("info_schizophrenia")

})

//autism info page
router.get('/autism', (req,res) => {
    console.log("this works") 
    res.render("info_autism") 




}) 





module.exports = router; 
