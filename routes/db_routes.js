

const express = require("express")
const router = express.Router(); 
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: true }));



const db = require("./db.js");



//posting to database
router.post("/fourm_data", async (req, res) => {  
    console.log("this works") 
    const { 
        name, 
        age, 
        gender, 
        disorder, 
        story } = req.body;
        
        //the query  
        const values = [name, age, gender, disorder, story];   

        const query = 'INSERT INTO fourm_data.fourm_data (name, age, gender, disorder, story) VALUES ($1, $2, $3, $4, $5)';

        const send = await db.query(query,values, (err, result) => {
            if (err) {
              console.error('Error executing the query: ' + err.stack);
              return res.render('unsuccesful_query');
            }
        
            // Query executed successfully
            return res.render('succesful_query');
          });
        });





module.exports = router; 