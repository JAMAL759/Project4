import { useState } from "react"
import {create} from "../../../lib/Admin/api"
import { Link , useNavigate} from "react-router"
import "../../../App.css"
import axios from "axios"
const AdminAddition = () => {

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
            const response = await create(formData)
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
          await axios.post('http://localhost:3000/auth/register', formData)
          

        //   const response = await create(formData)

          alert('User registered, please login')
          navigate('/admin/login')
        } catch (err) {
            console.log("This is the error for registreation" , err)
         // alert(err.response?.data?.message || 'Registration failed')
        }
      }
    


return (
    <>

    <div id="MainPage"> 
        <div id="NavContainer"> 
<div id="Nav"> 
    <Link to="/login">  Login</Link>
    <Link to="/login">  Login1</Link>
    <Link to="/login">  Login2</Link>
    <Link to="/login">  Login3</Link>
</div>
</div>
    
    <form onSubmit={handleSubmitSignUp} >

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
<button type="submit">Submit</button>
</div>
</form>

</div>

    
    </>
)

}



export default AdminAddition