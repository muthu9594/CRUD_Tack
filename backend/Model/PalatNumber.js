const mongoose =require('mongoose');

const PalatNumberschema=mongoose.Schema({
    did_number :{
        type:String,
        require:true
    },
       channel :{
        type:String,
        require:true
    }
    

})


const PalatNumberDetails = mongoose.model('PalatNumber',PalatNumberschema);

module.exports=PalatNumberDetails;