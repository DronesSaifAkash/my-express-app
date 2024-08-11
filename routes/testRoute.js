const express=require('express');
const TestController = require('../controllers/textController');
const SC = require('../controllers/showController');
const app= express.Router();


app.get('/',(req,res)=>{
   res.send("<h3>Welcome to my Express Application and Coding and be Happy</h3>");
})

app.get('/test1',(req,res)=>{
    res.send("<ul><li>hello kolkata</li><li>hello pune</li></ul>");
}) 

app.get('/test2',(req,res)=>{
     let emp={id:10,nm:'raj',age:33,city:['pune','goa','punjab']};
     res.json(emp);
})

app.post('/insert',(req,res)=>{
      let data=req.body;
      console.log(data);
      res.status(200).json({msg:"thank you data received"});
})

// app.post('/login',(req,res)=>{
    //  let data=req.body;
    //  if(data.uid=="sourav07" && data.pwd=="1234")
    //  {
    //     res.status(200).json({msg:"user is valid"});
    //  }
    //  else 
    //  {
    //     res.status(200).json({msg:"user is invalid"});
    //  }
// })

app.get('/edit/:uid',(req,res)=>{
    let id=req.params.uid;
    console.log("Required id :"+id);
    res.status(200).json({msg:"id received"});
})


// 10 aug, 2024
app.get('/allcontrolleramethod',SC);


app.get('/testwithcontroller',TestController.display);
app.post('/testloginwithcontroller',TestController.login)




module.exports= app;