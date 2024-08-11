const emp = require('../models/EmpModel');

class EmpController {

    static showAll = async (req, res) => {
        try {
            let data = await emp.find();
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
        }
    };


    static showbyid = async (req, res) => {
        try{ 
            let eid = req.params.eid;

            let data = await emp.findById(eid);

            res.status(200).json(data)
            
        }catch(error){
            console.log(error);
        }
    // http://localhost:4000/emp/showbyid/66b844b286296489435919bd
    }


    static showbyloc = async (req, res) => {
        try{ 
            let loc = req.params.loc;

            let data = await emp.find({loc: loc});

            if(data.length === 0 ){
                return res.status(404).json({'mesg':'Boo! no emp.'})
            }
            res.status(200).json(data)
            
        }catch(error){
            console.log(error);
        }
    // http://localhost:4000/emp/showbyloc/kol
    }


}

module.exports = EmpController;