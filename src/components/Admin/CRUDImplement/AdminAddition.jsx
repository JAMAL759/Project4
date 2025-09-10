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

    <img  id="navBarImage" src="./1.png" alt="" />

    <Link to="/login">  <p class="navBarImageP"> Login </p></Link>
    <Link to="/login">  <p class="navBarImageP">Login1</p></Link>
    <Link to="/login"> <p class="navBarImageP"> Login2 </p> </Link>
    <Link to="/login"> <p class="navBarImageP"> Login3 </p> </Link>

    <div id="CustomerView">  <Link to="login"><p> CustomerView </p></Link></div>
</div>
</div>
    


    <div id="RegestratoinForm"> 
    <form onSubmit={handleSubmitSignUp} >


<div id="adminForm"> 


<div id="RegestratoinFormH2"> 
<h2> Register as admin  </h2>
</div>


<div id="ThreePartsFrom"> 

<div class="adminFormFirstPart"> 
<label htmlFor="Name">Name:</label>
<br />
<input id="Name" name="Name" onChange={handleChange} value={formData.Name} className="AdminFormInput" />
</div>


<br/>

<div id="adminFormSecondPart"> 
<label htmlFor="email">Email:</label>
<input name="email" id="email" onChange={handleChange} value={formData.email} className="AdminFormInput" />
</div>

<br/>

<div id="adminFormThirddPart"> 
<label htmlFor="password">Password:</label>
<input id="password" name="password" onChange={handleChange} value={formData.password} className="AdminFormInput" />
</div>

</div>


<br/>


<button id="RegestrationFormButton" type="submit">Submit</button>
</div>
</form>
</div>
</div>

    
    </>
)

}



export default AdminAddition