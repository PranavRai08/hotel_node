console.log("server is running...");

var fs = require('fs');
var os = require('os');
const notes = require('./notes.js');
var _ = require('lodash');

// callback function
// function callback(){
//     console.log("This is callback function.");
// }
// function add(a, b, callback){
//     var result = a+b;
//     console.log(result);
//     callback();
// }
// add(1, 2, callback);

// -----------------------------



//os module
var user = os.userInfo();
console.log(user.username);
//fs module
fs.appendFile('greeting.txt', ' hi ' + user.username + '\n', ()=>{
    console.log("file is created.");
})


var age = notes.age;
console.log(age);

var add = notes.addNumber(age+2, 4);
console.log(add);


var data = ["person", "person", 1, 2, 1, 2, 'name', 'age', '2'];
var filter = _.uniq(data);
console.log("Filter data = " +  filter);

// json to object

const jsonString = '{"name": "Pranav", "age": 24}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

//object to json

const object = { name: 'Pranav', age: 24 };
const json = JSON.stringify(object);
console.log(json);