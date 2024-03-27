const mongoose=require('mongoose');

const SchemaInscription=new mongoose.Schema({
   utilisateur_id:{
        type:BigInt,
        required:true,
        trim :true,
        unique:true
    } ,
    evenement_id:{
        type:BigInt,
        required:true,
        trim :true,
        unique:true
    }
    
},{
    timestamps:true
});
 
const inscription=mongoose.model('inscription',SchemaInscription);
module.exports={
    inscription
}



