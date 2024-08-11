// seedEmployees.js
const mongoose = require('./database/dbconnect');
const Employee = require('./models/EmpModel'); // Adjust the path as needed

const seedEmployees = async () => {
    const employees = [
        { empnm: "John Doe", empage: 28, email: "john.doe@example.com", dept: "Sales", loc: "NY" },
        { empnm: "Jane Smith", empage: 34, email: "jane.smith@example.com", dept: "Marketing", loc: "LA" },
        { empnm: "Alice Johnson", empage: 26, email: "alice.johnson@example.com", dept: "Development", loc: "SF" },
        { empnm: "Bob Brown", empage: 45, email: "bob.brown@example.com", dept: "HR", loc: "NY" },
        { empnm: "Charlie White", empage: 31, email: "charlie.white@example.com", dept: "Development", loc: "TX" },
        { empnm: "Diana Green", empage: 29, email: "diana.green@example.com", dept: "Marketing", loc: "LA" },
        { empnm: "Edward Black", empage: 38, email: "edward.black@example.com", dept: "Sales", loc: "NY" },
        { empnm: "Fiona Blue", empage: 25, email: "fiona.blue@example.com", dept: "Support", loc: "TX" },
        { empnm: "George Red", empage: 33, email: "george.red@example.com", dept: "HR", loc: "LA" },
        { empnm: "Helen Yellow", empage: 30, email: "helen.yellow@example.com", dept: "Support", loc: "SF" }
    ];

    try {
        await Employee.insertMany(employees);
        console.log('10 Employee records inserted successfully!');
    } catch (err) {
        console.error('Error inserting employee records:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedEmployees();
