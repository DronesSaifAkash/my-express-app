const express= require('express');
const app= express.Router();

app.get('/', (req,res) => {
    res.send("Emp route working...")
})

const EmpController = require('../controllers/EmpController');
app.get('/showAll',EmpController.showAll);

module.exports = app; 