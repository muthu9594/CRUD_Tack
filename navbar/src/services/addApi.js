import axios from "axios"


const URL="http://localhost:8000";


export const AddServerDetails =async(data)=>{
    try{
        console.log(data)
        return await axios.post(`${URL}/ServerDetail`,data)
        
    }catch(error){
        console.log("Error while adding SERVER DETAILS",error);
    }
}

export const AddProvidersDetails =async(data)=>{
    try{
        return await axios.post(`${URL}/ProvidersDetail`,data)
    }catch(error){
        console.log("Error while adding PROVIDER DETAILS",error);
    }
}

export const AddCustomerDetails =async(data)=>{
    try{
        return await axios.post(`${URL}/CustomerDetail`,data)
    }catch(error){
        console.log("Error while adding CUSTOMER DETAILS",error);
    }
}

export const AdddidDetails =async(data)=>{
    try{
        return await axios.post(`${URL}/didDetail`,data)
    }catch(error){
        console.log("Error while adding DID DETAILS",error);
    }
}

export const AddServicesDetails =async(data)=>{
    try{
        return await axios.post(`${URL}/ServicesDetail`,data)
    }catch(error){
        console.log("Error while adding SERVICES DETAILS",error);
    }
}

export const AddtelcoProviderDetails =async(data)=>{
    try{
        return await axios.post(`${URL}/telcoProviderDetail`,data)
    }catch(error){
        console.log("Error while adding TELCO PROVIDER DETAILS",error);
    }
}

export const AddPalatNumberDetails =async(data)=>{
    try{
        return await axios.post(`${URL}/PalatNumberDetail`,data)
    }catch(error){
        console.log("Error while adding PLATA NUMBER DETAILS",error);
    }
}





//call  this in component did mount
// const getAll = async ()=>{
//     let response = await getdata();
//     setdata(response.data)
// }

// //delete api
// const deleteusers = async(id)=>{
//     await deleteusers(id);
//     getAll()
// }

// state.map(s=>(
//     //all tabels cell
//     onclick={()=>delete(state._id)}
// ))

