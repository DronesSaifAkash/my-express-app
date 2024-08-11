//register   -> login    -> view
//post -  -  -> post      -> get
//nm,pass,ag -> nm,pass  -> valid/invalid
//routeUSER->ControllerUSER separate
//

const express= require('express');
const userController = require('../controllers/userController');

const app= express.Router();

app.get('/getRegisteredPage',userController.getRegisteredPage);
app.post('/registerSubmit',userController.registerSubmit);

app.get('/getLoginPage',userController.getLoginPage);
app.post('/submitLogin',userController.submitLogin)

app.get('/dashboard',userController.dashboard);




module.exports= app;