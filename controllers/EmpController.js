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

}

module.exports = EmpController;