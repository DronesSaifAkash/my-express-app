// const mongoose = require('mongoose');
const mongoose = require('../database/dbconnect');

const empSchema = new mongoose.Schema({
    empnm: {
        type: String,
        required: true,
    },
    empage: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dept: {
        type: String,
    },
    loc: {
        type: String,
        default: "Kol",
    },
},{
    timestamps: true
});

const Employee = mongoose.model('employee', empSchema);

module.exports = Employee;
