import axios from "axios"

const baseUrl = "http://localhost:3000"

const createNewVacaction =async (data) =>{
    try{
     
        const url=`${baseUrl}/vacation/new`
       const response=await axios.post(url,data)
       return response
    }
    catch(err){
return err
    }
}
const deletevacation=async (id) => {
      try{
        const url=`${baseUrl}/vacation/${id}`
       const response=await axios.delete(url)
       return response
    }
    catch(err){
return err
    }
}
const ListAllvacation=async () => {
      try{
        const url=`${baseUrl}/vacation/`
        console.log(url)
       const response=await axios.get(url)
       console.log(response)
       return response.data
    }
    catch(err){
return err
    }
}
const UpdateVacation=async (id, data)=>{

      try{
        console.log("This is the  data " , data , " and this is the id " , id)
        const url=`${baseUrl}/vacation/${id}`
       const response=await axios.put(url, data)
       return response
    }
    catch(err){
    console.log(err)
    }
}
const listvacationById=async (id)=>{
      try{
        const url=`${baseUrl}/vacation/${id}`
       const response=await axios.get(url)
       return response
    }
    catch(err){
return err
    }
}


export{
    createNewVacaction,
    deletevacation,
    ListAllvacation,
    UpdateVacation,
    listvacationById
}