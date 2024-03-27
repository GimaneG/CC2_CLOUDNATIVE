const mongoose=require('mongoose');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
require('./Models/Utilisateur');
const User=mongoose.model('Utilisateur');
app.get('/',(req,res)=>{
   res.send('welcom to user service')
})
const uri = 'mongodb+srv://GimaneG:wuSI214YuSdxqZTJ@bdmongo.tjz7yob.mongodb.net/?retryWrites=true&w=majority&appName=BDMongo'
mongoose.connect(uri)
.then(()=>console.log('Connected to mongodb !!'))
.catch(()=>console.log('Could not connected to mongodb'))


app.post('/utilisateur',async(req,res)=>{
   try{
      const newUtilisateur=new User(req.body)
      const user= await newUtilisateur.save()
    
     res.json({'message':'inscription correcte','user':user})
   }catch(error)
   {
      res.json({'message':'erreur inscription','erreur':error.message})
  
   }
})



app.post("/utilisateur/login",async (req,res)=>{
   const {email,mdp} = req.body
      const user = await User.findOne({email,mdp})
      if (user) {
         res.send(user)
         
      }else{
         res.send({message : "User not exist"})
      }
})


app.listen(3000,()=> console.log('up and running ! -- this is our user service'))
