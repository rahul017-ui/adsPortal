const mongoose= require("mongoose")


const companySchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
},{
    timestamps:true
});


const company = mongoose.model('companys', companySchema);

exports.company = company;
