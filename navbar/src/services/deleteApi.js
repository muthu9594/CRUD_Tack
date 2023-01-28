import axios from "axios"


const URL="http://localhost:8000";

export const deleteServerDetails = async(id)=>{
    try{
      return  await axios.post(`${URL}/ServerDetails`, { id : id })
    }catch(error){  
        console.log("Error while deleting Server data",error)
    }
}

export const deleteProvidersDetails = async(id)=>{
    try{
      return  await axios.post(`${URL}/ProvidersDetails`, { id : id })
    }catch(error){
        console.log("Error while deleting Provider data",error)
    }
}
export const deleteCustomerDetails = async(id)=>{
    try{
      return  await axios.post(`${URL}/CustomerDetails`, { id : id })
    }catch(error){
        console.log("Error while deleting Customer data",error)
    }
}
export const deletedidDetails = async(id)=>{
    try{
      return  await axios.post(`${URL}/didDetails`,{ id : id })
    }catch(error){
        console.log("Error while deleting DID data",error)
    }
}
export const deleteServicesDetails = async(id)=>{
    try{
      return  await axios.post(`${URL}/ServicesDetails`, { id : id })
    }catch(error){
        console.log("Error while deleting Services  data",error)
    }
}
export const deleteTelcoProviderDetails = async(id)=>{
    try{
      return  await axios.post(`${URL}/telcoProviderDetails`, { id : id })
    }catch(error){
        console.log("Error while deleting Telco Provider data",error)
    }
}
export const deletePalatNumberDetails = async(id)=>{
    try{
      return  await axios.post(`${URL}/PalatNumberDetails`, { id : id })
    }catch(error){
        console.log("Error while deleting Palat Number data",error)
    }
}

