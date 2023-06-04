

const express = require("express")
const router = express.Router(); 
router.use(express.urlencoded({ extended: true }));

router.post("/fourm_data", async (req, res) => {  
    console.log("this works") 
    const { 
        name, 
        age, 
        gender, 
        disorder, 
        story } = req.body;

    console.log(name)  
    console.log(age)
    console.log(gender)
    console.log(disorder)
    console.log(story)
})

module.exports = router; 