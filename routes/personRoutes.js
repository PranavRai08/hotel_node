const express = require("express");
const router = express.Router();

const Person = require('../models/person');


router.get("/", async(req, res) =>{
    try{
        const data = await Person.find();   // It retrieves all documents
        res.status(200).json(data);    //This line sends the response back to the client.
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'server error.'});  //Sends an error response to the client.
    }
});

router.post("/", async(req, res) =>{
    try{
        const data = req.body;     //Extracts the data sent by the client in the request body (req.body).
        const newPerson = new Person(data);  //Creates a new instance of the Person model using the extracted data. The Person model defines the structure and schema of a person entity.
        const response = await newPerson.save();  //This line saves the new Person object to the database.
        res.status(200).json(response);  //This line sends the response back to the client.
    }catch(err){
        console.log(err);
        res.status(500).json({error: "serve error."});
    }
});

router.get("/:worktype", async(req, res) =>{
    try{
        const worktype = req.params.worktype;  //This line retrieves the value of the worktype parameter from the URL.
        if(worktype == 'chef' || worktype == 'waiter' || worktype == 'manager'){  //Check the condition.
            const response = await Person.find({work: worktype});  //Here we will find worktype.
            res.status(200).json(response);
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "server error."});
    }
});

router.put('/:id', async(req, res) =>{
    try{
        const personId = req.params.id;  //get id
        const updatePerson = req.body;   //create instance updatePerson
        const response = await Person.findByIdAndUpdate(personId, updatePerson, {
            new: true,  // update details
            runValidators: true
        } )
        if(!response){
            res.status(404).json({error: "not found."});
        }
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "server error."});
    }
});

router.delete("/:id", async(req, res) =>{
    try{
        const personId = Person.find.id;
        const response = await Person.findByIdAndRemove(personId);
        if(!response){
            res.status(404).json({error: "not found."});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "server error."});
    }
})






module.exports = router;