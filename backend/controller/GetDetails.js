const serverdetails=require('../Model/ServerDetails.js')
const ProvidersDetails=require('../Model/Providers.js')
const CustomerDetails=require('../Model/Customers.js')
const didDetails=require('../Model/did.js')
const ServicesDetails=require('../Model/Services.js')
const telcoProviderDetails=require('../Model/telcoProviders.js')
const PalatNumberDetails=require('../Model/PalatNumber.js')


const getServerDetails =async (req,res)=>{
    try{
         const data= await serverdetails.find({}).sort("-createdAt")
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}


const getProvidersDetails =async (req,res)=>{
    try{
         const data= await ProvidersDetails.find({})
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}


const getCustomerDetails =async (req,res)=>{
    try{
         const data= await CustomerDetails.find({})
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}



const getdidDetails =async (req,res)=>{
    try{
         const data= await didDetails.find({})
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}



const getServicesDetails =async (req,res)=>{
    try{
         const data= await ServicesDetails.find({})
        
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}



const getTelcoProviderDetails =async (req,res)=>{
    try{
         const data= await telcoProviderDetails.find({})
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}



const getPalatNumberDetails =async (req,res)=>{
    try{
         const data= await PalatNumberDetails.find({})
            res.status(200).json(data)
    }catch(error){
        res.status(404).json({msg:error})
    }
}


module.exports={getServerDetails,getProvidersDetails,getCustomerDetails,getdidDetails,getServicesDetails,getTelcoProviderDetails,getPalatNumberDetails}