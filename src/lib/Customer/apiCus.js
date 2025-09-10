import axios from "axios"

const baseUrl = "http://localhost:3000"

const createNewCus =async (data) =>{
    try{
        const url=`${baseUrl}/customer/new`
       const response=await axios.post(url,data)
       return response
    }
    catch(err){
return err
    }
}
const deleteCustomer=async (id) => {
      try{
        const url=`${baseUrl}/customer/${id}`
       const response=await axios.delete(url)
       return response
    }
    catch(err){
return err
    }
}
const ListAllCustomer=async () => {
      try{
        const url=`${baseUrl}/customer/`
        console.log(url)
       const response=await axios.get(url)
       console.log(response)
       return response.data
    }
    catch(err){
return err
    }
}
const UpdateCustoemr=async (id, data)=>{
      try{
        const url=`${baseUrl}/customer/${id}`
       const response=await axios.put(url, data)
       return response
    }
    catch(err){
return err
    }
}
const listCustomerById=async (id)=>{
      try{
        const url=`${baseUrl}/customer/${id}`
       const response=await axios.get(url)
       return response
    }
    catch(err){
return err
    }
}


export{
    createNewCus,
    deleteCustomer,
    ListAllCustomer,
    UpdateCustoemr,
    listCustomerById
}