import { useEffect, useState } from "react"
import {create, UpdateAdmin , listAdminById} from "../../../lib/Admin/api"
import { Link , useLocation, useNavigate} from "react-router"
import axios from "axios"
const AdminProfile = ({user}) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
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
            const response = await UpdateAdmin( user.id , formData)
            console.log(response)
            console.log("It has worked")
        }
        catch(err) {
            console.log("Their is an error submiting " ,err)
        }
      
    }


    async function fetchAdmins() {
        try {
        const admins = await listAdminById(user.id)
        console.log( "This is  admins " , admins)
        console.log(admins.data._id)
        console.log(admins.data)
        setFormData(admins.data)
        }
        catch(err) {
            console.log("Thier is an error fetchin : " , err)
        }
      

    }


    const handleSubmitSignUp = async event => {
        event.preventDefault()
        console.log("I'm here is the hanldeSubmitSignUp")
        try {
            console.log("I'm here before the posgt call")
            console.log("This is the data before being entered" , formData)
          await axios.post('http://localhost:3000/auth/register', formData)
          

        //   const response = await create(formData)

          alert('User registered, please login')
          navigate('/admin/login')
        } catch (err) {
            console.log("This is the error for registreation" , err)
         // alert(err.response?.data?.message || 'Registration failed')
        }
      }
    


      useEffect(() => {
        console.log(user)
        console.log(user.id)
        fetchAdmins()
        

      },[])
return (
    <>
    

 
    <form onSubmit={handleSubmit} >

<h2> Profile  </h2>
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
<button type="submit">Submit</button>
</div>
</form>

    
    </>
)

}



export default AdminProfile