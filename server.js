const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

// bodyParser: trasform raw data -> javascript object -> req.body(saved into req.body)
const bodyParser = require("body-parser");
// const Person = require('./models/person');
// const Menu = require('./models/Menu');
app.use(bodyParser.json());

// app.post("/person", async(req, res) =>{
//     try{
//         const data = req.body;
//         const newPerson = new Person(data);
//         const response = await newPerson.save();
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'server error'});
//     }
// });

// app.get("/person", async(req, res) =>{
//     try{
//         const data = await Person.find();
//         res.status(200).json(data);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: 'server error'});
//     }
// })

// app.get("/person/:worktype", async(req, res) =>{
//     try{
//         const worktype = req.params.worktype;  //This line retrieves the value of the worktype route parameter from the req.params object.
//         if(worktype == 'chef' || worktype == 'waiter' || worktype == 'manager'){
//             const response = await Person.find({work: worktype});
//             res.status(200).json(response);
//         }
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: 'server error.'});
//     }
// })

const menuRoutes = require('./routes/menuRoutes');  //import menuRoutes
// use router
app.use('/menu', menuRoutes);

//import personRoutes
const personRoutes = require('./routes/personRoutes');
// use router
app.use('/person', personRoutes);




app.get('/', function(req, res){
    res.send("hello.");
});

app.get('/food', (req, res) =>{
    var custumized_food = {
        name: "Roti",
        size: "15 cm",
        dal: "false",
        sabaji: "true"
    }
    res.send(custumized_food);
});









const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("lestening on server 3000")
});