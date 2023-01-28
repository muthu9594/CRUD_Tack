import axios from "axios"


const URL="http://localhost:8000";



export const getServerDetails = async()=>{
    try{
      return  await axios.get(`${URL}/getSDetails`)
    }catch(error){
        console.log("Error while getting Server",error)
    }
}

export const getProvidersDetails = async()=>{
    try{
      return  await axios.get(`${URL}/getPDetails`)
    }catch(error){
        console.log("Error while getting Provider",error)
    }
}

export const getCustomerDetails = async()=>{
    try{
      return  await axios.get(`${URL}/getCDetails`)
    }catch(error){
        console.log("Error while getting Customer",error)
    }
}

export const getdidDetails = async()=>{
    try{
      return  await axios.get(`${URL}/getdDetails`)
    }catch(error){
        console.log("Error while getting DID",error)
    }
}

export const getServicesDetails = async()=>{
    try{
      return  await axios.get(`${URL}/getServDetails`)
    }catch(error){
        console.log("Error while getting Services",error)
    }
}

export const getTelcoProviderDetails = async()=>{
    try{
      return  await axios.get(`${URL}/getTelcoDetails`)
    }catch(error){
        console.log("Error while getting Telco Provider",error)
    }
}

export const getPalatNumberDetails = async()=>{
    try{
      return  await axios.get(`${URL}/getPalatDetails`)
    }catch(error){
        console.log("Error while getting Palat Number",error)
    }
}
