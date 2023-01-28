const express =require("express");
const {addServerDetails,addProvidersDetails,addCustomerDetails,adddidDetails,addServicesDetails,addtelcoProviderDetails,addPalatNumberDetails}= require("../controller/AddDetails")

//get Details
const {getServerDetails,getProvidersDetails,getCustomerDetails,getdidDetails,getServicesDetails,getTelcoProviderDetails,getPalatNumberDetails} = require("../controller/GetDetails")

//delete details
const {deleteServerDetails,deleteProvidersDetails,deleteCustomerDetails,deletedidDetails,deleteServicesDetails,deletetelcoProviderDetails,deletePalatNumberDetails} = require("../controller/DeleteDetails");
const { connection } = require("mongoose");

//get details for edit data
const {getServerDetail,getProviderDetail,getCustomerDetail,getDidDetail,getServiceDetail,getTelcoProviderDetail,getPalatNumberDetail} = require("../controller/GetDetail")

//add edited data
const{ EditedServerDetails,EditedProvidersDetails,EditedCustomerDetails,EditeddidDetails,EditedServicesDetails,EditedlcoProviderDetails,EditedPalatNumberDetails}=require("../controller/EditData")

const { getData } = require("../controller/GetDetail");


const router=express.Router();
const {check}=require('express-validator')

router.post('/ServerDetail',addServerDetails)
router.post('/ProvidersDetail',addProvidersDetails)
router.post('/CustomerDetail',addCustomerDetails)
router.post('/didDetail',adddidDetails)
router.post('/ServicesDetail',addServicesDetails)
router.post('/telcoProviderDetail',addtelcoProviderDetails)
router.post('/PalatNumberDetail',addPalatNumberDetails)



router.get('/getSDetails',getServerDetails)
router.get('/getPDetails',getProvidersDetails)
router.get('/getCDetails',getCustomerDetails)
router.get('/getdDetails',getdidDetails)
router.get('/getServDetails',getServicesDetails)
router.get('/getTelcoDetails',getTelcoProviderDetails)
router.get('/getPalatDetails',getPalatNumberDetails)



router.post(`/ServerDetails`,deleteServerDetails)
router.post('/ProvidersDetails',deleteProvidersDetails)
router.post('/CustomerDetails',deleteCustomerDetails)
router.post('/didDetails',deletedidDetails)
router.post('/ServicesDetails',deleteServicesDetails)
router.post('/telcoProviderDetails',deletetelcoProviderDetails)
router.post('/PalatNumberDetails',deletePalatNumberDetails)



router.get('/serverdEdit/:id',getServerDetail)
router.get('/providerdEdit/:id',getProviderDetail)
router.get('/customerdEdit/:id',getCustomerDetail)
router.get('/diddEdit/:id',getDidDetail)
router.get('/servicesdEdit/:id',getServiceDetail)
router.get('/telecoproviderdEdit/:id',getTelcoProviderDetail)
router.get('/palatnumberdEdit/:id',getPalatNumberDetail)





router.post('/serverdEdit/:id',EditedServerDetails)
router.post('/providerdEdit/:id',EditedProvidersDetails)
router.post('/customerdEdit/:id',EditedCustomerDetails)
router.post('/diddEdit/:id',EditeddidDetails)
router.post('/servicesdEdit/:id',EditedServicesDetails)
router.post('/telecoproviderdEdit/:id',EditedlcoProviderDetails)
router.post('/palatnumberdEdit/:id',EditedPalatNumberDetails)







module.exports=router;

