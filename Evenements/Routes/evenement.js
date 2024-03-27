const express =require('express');
const AsyncHandler=require('express-async-handler');
const mongoose=require('mongoose');
const {evenement }=require('../Models/Evenements');
const router=express.Router();
const {verfyToken}=require('../middleware/GenererToken')

router.get('/all',verfyToken,AsyncHandler(
    async(req,res)=>{
        const  evenements=await evenement.find();
        res.status(200).json(evenements);
    }
));

router.post('/add',verfyToken,AsyncHandler(
    async(req,res)=>{
        const  newevenement= new evenement({
            titre:req.body.titre,
            description:req.body.description,
            date:req.body.date,
            lieu:req.body.lieu,
            categorie:req.body.categorie,
        });
        const resulta= await newevenement.save();
        res.status(201).json(resulta);
    }
));

router.get('/evenements/:id', AsyncHandler(async (req, res) => {
    const evenements = await evenement.findById(req.params.id);
    if (!evenements) {
        return res.status(404).json({ message: 'evenement non trouvé' });
    }
    res.status(200).json(evenements);

}));

module.exports=router;