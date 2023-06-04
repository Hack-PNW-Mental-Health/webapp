

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
      
      if (disorder == 'school stress') {
        try {
          const names = await db.query("SELECT name FROM fourm_data.fourm_data WHERE disorder = 'school stress';");
        
                let nameArr = names.rows;
        let result = '';
        for (let i = 0; i < nameArr.length; i++) {
          result += nameArr[i].name;
        }
        } catch (err) { 
          console.error('Error executing the query: ' + err.stack);
          return res.render('unsuccessful_query');
        }
      }

      if (disorder == 'activities') {
        try {
          const names = await db.query("SELECT name FROM fourm_data.fourm_data WHERE disorder = 'activities';");
        
                let nameArr = names.rows;
        let result = '';
        for (let i = 0; i < nameArr.length; i++) {
          result += nameArr[i].name;
        }
        } catch (err) { 
          console.error('Error executing the query: ' + err.stack);
          return res.render('unsuccessful_query');
        }
      }

      if (disorder == 'financial') {
        try {
          const names = await db.query("SELECT name FROM fourm_data.fourm_data WHERE disorder = 'financial';");

        let nameArr = names.rows;
        let result = '';
        for (let i = 0; i < nameArr.length; i++) {
          result += nameArr[i].name + " ";
        }
        console.log(result);
        } catch (err) { 
          console.error('Error executing the query: ' + err.stack);
          return res.render('unsuccessful_query');
        }
      }

      if (disorder == 'social') {
        try {
          const names = await db.query("SELECT name FROM fourm_data.fourm_data WHERE disorder = 'social';");
        
                let nameArr = names.rows;
        let result = '';
        for (let i = 0; i < nameArr.length; i++) {
          result += nameArr[i].name;
        }
        } catch (err) { 
          console.error('Error executing the query: ' + err.stack);
          return res.render('unsuccessful_query');
        }
      }

      if (disorder == 'medical') {
        try {
          const names = await db.query("SELECT name FROM fourm_data.fourm_data WHERE disorder = 'medical';");
        
                let nameArr = names.rows;
        let result = '';
        for (let i = 0; i < nameArr.length; i++) {
          result += nameArr[i].name;
        }
        } catch (err) { 
          console.error('Error executing the query: ' + err.stack);
          return res.render('unsuccessful_query');
        }
      }

      if (disorder == 'family') {
        try {
          const names = await db.query("SELECT name FROM fourm_data.fourm_data WHERE disorder = 'family';");
        
                let nameArr = names.rows;
        let result = '';
        for (let i = 0; i < nameArr.length; i++) {
          result += nameArr[i].name;
        }
        } catch (err) { 
          console.error('Error executing the query: ' + err.stack);
          return res.render('unsuccessful_query');
        }
      }

      if (disorder == 'institutionalized stigma') {
        try {
          const names = await db.query("SELECT name FROM fourm_data.fourm_data WHERE disorder = 'institutionalized stigma';");
        
                let nameArr = names.rows;
        let result = '';
        for (let i = 0; i < nameArr.length; i++) {
          result += nameArr[i].name;
        }
        } catch (err) { 
          console.error('Error executing the query: ' + err.stack);
          return res.render('unsuccessful_query');
        }
      }

      if (disorder == 'other') {
        try {
          const names = await db.query("SELECT name FROM fourm_data.fourm_data WHERE disorder = 'other';");
        
                let nameArr = names.rows;
        let result = '';
        for (let i = 0; i < nameArr.length; i++) {
          result += nameArr[i].name;
        }
        } catch (err) { 
          console.error('Error executing the query: ' + err.stack);
          return res.render('unsuccessful_query');
        }
      }


            const render_items = {
              people: result
            }

            // Query executed successfully
            return res.render('succesful_query', render_items);



          });



router.post("/signature_upload", async (req, res) => {
  
  
  console.log("this still works")
  const { signature } = req.file.buffer;

  
  
  const query = "INSERT INTO fourm_data.signature (signature) VALUES ($1)"
  const send = await db.query(query,values, (err, result) => {  


    //if query not exectued succesfully
    if (err) {
      console.error('Error executing the query: ' + err.stack);
      return res.render('unsuccesful_query');
    }


    // Query executed successfully
    return res.render('succesful_query');

  });  
})








module.exports = router; 
