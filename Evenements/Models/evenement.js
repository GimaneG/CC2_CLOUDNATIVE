const mongoose=require('mongoose');

const SchemaEvenement=new mongoose.Schema({
   titre:{
        type:String,
        required:true,
        trim :true,
        unique:true
    } ,
    description:{
        type:String,
        required:true,
        trim :true
    } ,
    date:{
        type:Date,
        required:true,
        trim :true
    } ,
    lieu:{
        type:String,
        required:true,
        trim :true
    } ,    
    categorie:{
        type:String,
        required:true,
        trim :true
    } ,
    
},{
    timestamps:true
});
 
const evenement=mongoose.model('evenement',SchemaEvenement);
module.exports={
    evenement
}