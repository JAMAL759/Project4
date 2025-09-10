import axios from "axios"

const baseUrl = "http://localhost:3000"

const create =async (data) =>{
    console.log(data)
    try{
        console.log("I'm here in creatino for admin ")
        const url=`${baseUrl}/admin/new`

       const response=await axios.post(url,data)
       return response
    }
    catch(err){
           console.log("I'm here in creatino for admin(error) ")
      
return err
    }
}

const deleteAdmin=async (id) => {
      try{
        const url=`${baseUrl}/admin/${id}`
       const response=await axios.delete(url)
       return responses
    }
    catch(err){
return err
    }
}
const ListAllAdmin=async () => {
      try{
        const url=`${baseUrl}/admin/`
        console.log(url)
       const response=await axios.get(url)
       console.log(response)
       return response.data
    }
    catch(err){
return err
    }
}

const UpdateAdmin=async (id, data)=>{
      try{
        const url=`${baseUrl}/admin/${id}`
       const response=await axios.put(url, data)
       return response
    }
    catch(err){
return err
    }
}

const listAdminById=async (id)=>{
      try{
        const url=`${baseUrl}/admin/${id}`
       const response=await axios.get(url)
       return response
    }
    catch(err){
return err
    }
}

export{
    create,
    deleteAdmin,
    ListAllAdmin,
    listAdminById,
    UpdateAdmin

}

