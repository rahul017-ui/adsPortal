const mongoose= require("mongoose")


const adsSchema=new mongoose.Schema({
    companyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "company"
    },
    primaryText:{
        type:String,
        required:true
    },
    headline:{
        type:String,
        required:true

    },
    description:{
       type:String,
       required:true
    },
    cta:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
},{
    timestamps:true
});


const ads = mongoose.model('ads', adsSchema);


exports.ads = ads;
