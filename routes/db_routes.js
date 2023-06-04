

const express = require("express")
const router = express.Router(); 
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: true }));





const db = require("./db.js");
const multer = require('multer'); 
const upload = multer() 



//posting to database
router.post("/fourm_data", async (req, res) => {  
    console.log("this works") 
    const { 
        name, 
        age, 
        gender, 
        disorder, 
        story } = req.body;
        
        //the query to update the fourm
        const values = [name, age, gender, disorder, story];   

        const query = 'INSERT INTO fourm_data.fourm_data (name, age, gender, disorder, story) VALUES ($1, $2, $3, $4, $5)';

        const send = await db.query(query,values, (err, result) => {
            if (err) {
              console.error('Error executing the query: ' + err.stack);
              return res.render('unsuccesful_query');
            }
        })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      try {
        const depressionQuery = 'SELECT name FROM fourm_data WHERE disorder = "autism"';
        const value_disorder = ["depression"];
        console.log("before the query")

        
        const get_depression_names = await db.query("SELECT name FROM fourm_data.fourm_data WHERE disorder = 'autism';");
      
       console.log(get_depression_names);
      } catch (err) { 
        console.log("errorsssssssssssss")
        console.error('Error executing the query: ' + err.stack);
        return res.render('unsuccessful_query');
      }


////////////////////////////////////////
  
      return res.render('succesful_query');



          });



router.post("/signature_upload", (req, res) => {
  
  
  console.log("this still works")
  const { signature } = req.file.buffer;




  res.send("this works")



})








module.exports = router; 
