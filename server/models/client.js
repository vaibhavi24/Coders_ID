const mongoose= require('mongoose')


const EmployeeSchema = new mongoose. Schema ({
role : String,
name: String,
email: String,
password: String,
phone: String,
city : String,
state : String
})


const EmployeeModel = mongoose.model("User", EmployeeSchema)
module.exports = EmployeeModel
