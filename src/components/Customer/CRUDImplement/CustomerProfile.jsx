import { useEffect, useState } from "react"
import {create, UpdateAdmin , listAdminById , ListAllAdmin} from "../../../lib/Admin/api"
import { listCustomerById, UpdateCustoemr } from "../../../lib/Customer/apiCus"
import { Link , useLocation, useNavigate} from "react-router"
import axios from "axios"
const CustomerProfile = ({user}) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [admins , setAdmins] = useState([])
    const navigate = useNavigate()

    //MARK: making the formData listener
    const [formData , setFormData] = useState ({
        Name: '',
        email: '',
        password:''
    })

    const [ admin , setAdmin] = useState ({})



    //MARK: listening to whatever the user types in the form
    const handleChange  = (event) => { 
        const currentFormData = { ...formData }
        const inputName = event.target.name
        const inputValue = event.target.value
        currentFormData[inputName] = inputValue
        console.log(inputValue)
        setFormData(currentFormData)
    }

    //MARK: submiting the information to create ADMIN 
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await UpdateCustoemr( user.id , formData)
            console.log(response)
            console.log("It has worked")
        }
        catch(err) {
            console.log("Their is an error submiting " ,err)
        }
      
    }

    const  AdminsFetch =  async () => {
        try{
            console.log("This is the point before the fetching")
            const fetched = await ListAllAdmin()
            console.log("This is the point after the fetching " , fetched)
            
            setAdmins(fetched)

        } catch (err) {
            console.log("Their is an error fetching, " ,err)
        }
    }


    

    async function fetchCustomer() {
        try {
        const Customer = await listCustomerById(user.id)
        console.log( "This is  Customer " , Customer)
        console.log(Customer.data._id)
        console.log(Customer.data)
        setFormData(Customer.data)
        }
        catch(err) {
            console.log("Thier is an error fetchin : " , err)
        }
      

    }



    


      useEffect(() => {
        console.log(user)
        console.log(user.id)
        fetchCustomer()
        AdminsFetch()
        

      },[])
return (
    <>
    

 
    <form onSubmit={handleSubmit} >

<h2> Customer Profile  </h2>
<div id="adminForm"  > 
<label htmlFor="Name">Name:</label>
<input id="Name" name="Name" onChange={handleChange} value={formData.Name} className="AdminFormInput" />
<br/>
<br/>
<label htmlFor="email">Email:</label>
<input name="email" id="email" onChange={handleChange} value={formData.email} className="AdminFormInput" />
<br/>
<br/>
<label htmlFor="password">Password:</label>
<input id="password" name="password" onChange={handleChange} className="AdminFormInput" />
<br/>
<br/>


<label htmlFor="Admin">Admin:</label>
<select name="Admin" id="Admin" onChange={handleChange}>

{
    admins.map((admin , key) => {
        return (
            <>
            <option value = {`${admin._id}`}>  {admin.Name} </option>
            </>
        )
    })
}

</select>

<br />
<br />

<button type="submit">Submit</button>
</div>
</form>

    
    </>
)

}



export default CustomerProfile