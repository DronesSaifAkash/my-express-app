class TestController
{
    static display = (req, res) => {
        res.status(200).json({id:1, nm:"ss", age:22});
    }

    static login = (req,res) => {
        let data=req.body;
        if(data.uid=="sourav07" && data.pwd=="1234")
        {
            res.status(200).json({msg:"user is valid"});
        }
        else 
        {
            res.status(200).json({msg:"user is invalid"});
        }
    }
}

module.exports = TestController;