const mongoose =require('mongoose');

const servicesSchema=mongoose.Schema({
    Name :{
        type:String,
        require:true
    },
    NodeVersion :{
        type:String,
        require:true
    },
    Description :{
        type:String,
        require:true
    },
    Port :{
        type:String,
        require:true
    },
    ServiceType	:{
        type:String,
        require:true
    },
    firstCustomer:{
        type:Array,
        require:true
    }
   
})


const ServicesDetails = mongoose.model('ServicesDetail',servicesSchema);

module.exports=ServicesDetails;