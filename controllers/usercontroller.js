const fs = require('fs');
const users = require('../users.json');
function getAllUsers(req, res) {
    res.json(users);
}
function getParticularUsers(req, res) {
    let id = parseInt(req.params.id);
    let user = users.find(user=> user.id === id);
    res.json(user);
}
function addUser(req, res) {
    console.log(req.body)
    req.body.id = users.length +1;
    fs.writeFile('users.json',JSON.stringify(req.body),(err)=> {
        if(err){
            console.log("error")
        }else{
            res.end("added sucessfully...")
        }
    })
    
}
module.exports = {
    getAllUsers,
    getParticularUsers,
    addUser
}