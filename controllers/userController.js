class TestController
{
    static getRegisteredPage= (req, res) => {
        let openForm = `<h1>Registered Form</h1>`
        res.status(200).json(openForm);
    };
    
    static registerSubmit = (req,res )=> {
        let data=req.body;
        console.log(data);
        res.status(200).json({msg:"thank you data received"});
    };
    
    static getLoginPage= (req, res) => {
        let openForm = `<h1>Login Form</h1>`
        res.status(200).json(openForm);
    };

    static submitLogin= (req, res) => {
        let data=req.body;
        if(data.uid=="sourav07" && data.pwd=="1234")
        {
            res.status(200).json({msg:"user is valid"});
        }
        else 
        {
            res.status(200).json({msg:"user is invalid"});
        }
    };

    static dashboard = (req, res) => {
        res.status(200).json({id:1, nm:"sourav07", age:22});
    }



    // static display = (req, res) => {
    //     res.status(200).json({id:1, nm:"ss", age:22});
    // }

    // static login = (req,res) => {
    //     let data=req.body;
    //     if(data.uid=="sourav07" && data.pwd=="1234")
    //     {
    //         res.status(200).json({msg:"user is valid"});
    //     }
    //     else 
    //     {
    //         res.status(200).json({msg:"user is invalid"});
    //     }
    // }
}

module.exports = TestController;