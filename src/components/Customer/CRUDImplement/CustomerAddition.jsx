import { useEffect, useState } from "react"
import {create , ListAllAdmin } from "../../../lib/Admin/api"
import {createNewCus} from "../../../lib/Customer/apiCus"
import { Link , useNavigate} from "react-router"
import axios from "axios"
const CustomerAddition = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [admins , setAdmins] = useState([])
    const navigate = useNavigate()

    //MARK: making the formData listener
    const [formData , setFormData] = useState ({
        Name: '',
        email: '',
        password:'',
        Admin: ''
    })



    //MARK: listening to whatever the user types in the form
    const handleChange  = (event) => { 
        const currentFormData = { ...formData }
        const inputName = event.target.name
        const inputValue = event.target.value
        currentFormData[inputName] = inputValue
        console.log(inputValue)
        setFormData(currentFormData)
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

    //MARK: submiting the information to create ADMIN 
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await createNewCus(formData)
            console.log(response)
            console.log("It has worked")
        }
        catch(err) {
            console.log("Their is an error submiting " ,err)
        }
      
    }


    const handleSubmitSignUp = async event => {
        event.preventDefault()
        console.log("I'm here is the hanldeSubmitSignUp")
        try {
            console.log("I'm here before the posgt call")
            console.log("This is the data before being entered" , formData)
          await axios.post('http://localhost:3000/authC/register', formData)
          

        //   const response = await create(formData)

          alert('User registered, please login')
          navigate('/Customer/login')
        } catch (err) {
            console.log("This is the error for registreation" , err)
         // alert(err.response?.data?.message || 'Registration failed')
        }
      }

useEffect ( () => {
    AdminsFetch()
} , [])
    


return (
    <>
    
    <form onSubmit= {handleSubmitSignUp} >

<h2> Register as admin  </h2>
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
<input id="password" name="password" onChange={handleChange} value={formData.password} className="AdminFormInput" />
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
<button type="submit">Submit</button>
</div>
</form>

    
    </>
)

}



export default CustomerAddition