const mongoose = require('mongoose')

const serverdetails=require('../Model/ServerDetails.js')
const ProvidersDetails=require('../Model/Providers.js')
const CustomerDetails=require('../Model/Customers.js')
const didDetails=require('../Model/did.js')
const ServicesDetails=require('../Model/Services.js')
const telcoProviderDetails=require('../Model/telcoProviders.js')
const PalatNumberDetails=require('../Model/PalatNumber.js')


const data=[ProvidersDetails,serverdetails]

const addServerDetails =async (req,res)=>{
    const details=req.body;
    console.log(details)
    const addDetails= new serverdetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        console.log("Error while adding Server details",error)
    }
}


const addProvidersDetails =async (req,res)=>{
    const details=req.body;
    const addDetails= new ProvidersDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        console.log("Error while adding Server details",error)
    }
}



const addCustomerDetails =async (req,res)=>{
    const details=req.body;
    const addDetails= new CustomerDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        console.log("Error while adding Server details",error)
    }
}



const adddidDetails =async (req,res)=>{
    const details=req.body;
    const addDetails= new didDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        console.log("Error while adding Server details",error)
    }
}



const addServicesDetails =async (req,res)=>{
    const details=req.body;
    const addDetails= new ServicesDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        console.log("Error while adding Server details",error)
    }
}



const addtelcoProviderDetails =async (req,res)=>{
    const details=req.body;
    const addDetails= new telcoProviderDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        console.log("Error while adding Server details",error)
    }
}


const addPalatNumberDetails =async (req,res)=>{
    const details=req.body;
    const addDetails= new PalatNumberDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({data:addDetails})
    }catch(error){
        console.log("Error while adding Server details",error)
    }
}






module.exports={addServerDetails,addProvidersDetails,addCustomerDetails,adddidDetails,addServicesDetails,addtelcoProviderDetails,addPalatNumberDetails}