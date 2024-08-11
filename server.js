const express=require('express');

const testroute = require('./routes/testRoute');
const userroute = require('./routes/userRoute');
const emproute = require('./routes/empRoute');
const Employee = require('./models/EmpModel');

const app=express();
const port=4000; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', testroute);
app.use('/user', userroute);
app.use('/emp', emproute);

app.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
})