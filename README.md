# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project structure

  The project was structured using three main folders which are :

  Components             lib          mainFile 

  The component file is where all the CRUD functionality get implemented for each model , the models acts an an entity where it provides the necessary actions for each role starting from craete to delete. 

  Each of the component also  provides the necessary updates that are needed for each page , while it's not all applied, however, it does provides the majority of it.


  The lib folder is where we apply the axios call , see the axios is a Ajax functinoality that offers the capability of fetching data without the need of reloading the page. This techonlogy was used for all of the 
CRUD functionality where it takes the link of the localhost to reach the backend and perform the required fields.




## CRUD Functionality



        
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

The functionality was used with a try catch method where it provides an error whenever their is.




## How to use the project 


(1) Downlaod the prject from github 

(2) Download the backend project from github

(3) Make sure that you run the frontend by calling  npm run dev 

(4) make sure to run the backend by typing nodemon server.js if you don't have nodemon type npm i -g nodemon

(5) Make sure that the cors is connected to localHost://5173 , it has to be 5173 if not you could simply change it depending on what the frontend Run's at it's provided on the console when you runt it 



