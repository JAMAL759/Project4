import { useState } from "react"
import {create} from "../../../lib/Admin/api"
import { Link , useNavigate} from "react-router"
import axios from "axios"
import {jwtDecode} from 'jwt-decode'

const AdminAdditionLogin = ({ onLogin , setUser}) => {

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

  
    const handleSubmitSignIn = async event => {
        event.preventDefault()
        console.log("I'm here is the hanldeSubmitSignUp")
        try {
            console.log("I'm here before the posgt call")
            console.log("This is the data before being entered" , formData)
            const res =    await axios.post('http://localhost:3000/auth/login', formData)
            console.log(res)
          

        //   const response = await create(formData)

          alert('  logged in succesfull')
          localStorage.setItem('token', res.data.token)
          onLogin(res.data.token)
          console.log( "This is the token: " ,res.data.token)
          setUser(jwtDecode(res.data.token))

          navigate('/Vacation')
        } catch (err) {
            console.log("This is the error for registreation" , err)
         // alert(err.response?.data?.message || 'Registration failed')
        }
      }
    


return (
    <>
    
    <form onSubmit={handleSubmitSignIn} >

<h2> Register as admin  </h2>
<div id="adminForm"  > 
<label htmlFor="Name">Admin login Form:</label>
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



export default AdminAdditionLogin