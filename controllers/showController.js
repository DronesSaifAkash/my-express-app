const showController = (req,res)=> {
    let data = {nm:"sk", age:40, field:"IT", loc:"ind"} ;
    res.status(200).json(data);
 }
module.exports = showController;


