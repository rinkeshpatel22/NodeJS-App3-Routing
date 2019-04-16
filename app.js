const express = require('express');
const app = express();
const appConfig = require('./config/appConfig');
let route = require('./routes/app-routes');   //import routes
route.setRouter(app); // set routes

app.listen(appConfig.port, () => { console.log('Server running at http://127.0.0.1:3000/') });