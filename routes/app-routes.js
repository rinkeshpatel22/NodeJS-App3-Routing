const appConfig = require("./../config/appConfig")

let getEmployees = (req, res) =>{
    res.send('This is getEmployees method response');
}
let getUsers = (req, res) =>{
    res.send('This is getUsers method response');
}
let generateMessage = (req, res) =>{
    res.send('check routes: http://127.0.0.1:3000/employees  and  http://127.0.0.1:3000/users');
}
// set routes with their callbacks. 
let setRouter = (app) => {
    app.get('/employees', getEmployees);
    app.get('/users', getUsers);
    app.get('/', generateMessage);
}

// export routes module
module.exports = {
    setRouter: setRouter
}