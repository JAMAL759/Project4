import { useState } from "react"
import {create} from "../../../lib/Admin/api"
import { Link , useNavigate} from "react-router"
import axios from "axios"
import {jwtDecode} from 'jwt-decode'

import Logo from '../../../assets/1.png'
import Logo2 from '../../../assets/2.jpg'


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
    

    <div id="MainPage"> 
        <div id="NavContainer"> 
<div id="Nav"> 

    <img  id="navBarImage" src={Logo} alt="" />

    <Link to="/login">  <p class="navBarImageP"> Login </p></Link>
    <Link to="/login">  <p class="navBarImageP">Login1</p></Link>
    <Link to="/login"> <p class="navBarImageP"> Login2 </p> </Link>
    <Link to="/login"> <p class="navBarImageP"> Login3 </p> </Link>

    <div id="CustomerView">  <Link to="login"><p> CustomerView </p></Link></div>
</div>
</div>
    


    <div id="RegestratoinForm"> 
        
    <form onSubmit={handleSubmitSignIn} >


<div id="adminForm"> 


<div id="RegestratoinFormH2"> 
<h2> login  as admin  </h2>
</div>


<div id="ThreePartsFrom"> 




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
<br />
<br />
<button id="RegestrationFormButton" type="submit">Submit</button>
</div>




<div id="HighlightRegestrationForm"> 

    <img src={Logo2} alt="" />
</div>




</div>
</form>
</div>
</div>

    </>
)

}



export default AdminAdditionLogin