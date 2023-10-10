const mongoose= require('mongoose')

const CompanySchema = new mongoose.Schema({
    CompanyName : String,
    location : String,
    city : String,
    date : String,

})



const CompanyModel = mongoose.model("Company" , CompanySchema)
module.exports = CompanyModel