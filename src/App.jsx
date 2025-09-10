import AdminAddition from "./components/Admin/CRUDImplement/AdminAddition"
import CustomerAddition from "./components/Customer/CRUDImplement/CustomerAddition"

import {BrowserRouter as Router, Route , Routes} from 'react-router'
import axios from "axios"
import AdminAdditionLogin from "./components/Admin/CRUDImplement/AdminAdditionLogin"
import AdminProfile from "./components/Admin/CRUDImplement/AdminProfile"
import { useEffect, useState } from "react"
import {jwtDecode} from 'jwt-decode'   
import CustomerAdditionLogin from "./components/Customer/CRUDImplement/CustomerAdditionLogin"
import CustomerProfile from "./components/Customer/CRUDImplement/CustomerProfile"
import VacationAddition from "./components/Vacation/CRUDImplement/VacationAddition"
import VacationAdditionC from "./components/Vacation/CRUDImplement/VacationAdditionC"
import MainPage from "./components/Customer/CRUDImplement/MainPage"
import LogoutButton from "./LogoutButton"

const App = () => {


  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(null)


  function handleLogin(newToken) {
    setToken(newToken)
  }


  function handleLogout() {
    setToken(null)
    localStorage.removeItem('token')
  }

  // function handleLogout() {
  //   setToken(null)
  //   localStorage.removeItem('token')
  // }

  // This is how to decode the token and gget the 
  // information that you added to the payload in your login 
  // route in the backend
  // if (token) {
  //   console.log( "This is the token " , token)
  //   const decodedToken = jwtDecode(token)
  //   console.log(decodedToken)
  // }

  useEffect(()=>{
    // send login request to backend with the token in localstorage
    // then set the user to the logged in user
    if (token) {
      const decodedToken = jwtDecode(token)
      setUser(decodedToken)
      console.log(decodedToken)
    }


  },[token])

  return (

    <>
    
    
  <Router> 

  {token ? <LogoutButton onLogout={handleLogout} /> : null}
    <Routes>


    <Route path="/admin" element={<AdminAddition/>}/>
    <Route path="/admin/login" element={<AdminAdditionLogin onLogin={handleLogin} setUser = {setUser}/>}/>
    <Route path="/Customer" element={<CustomerAddition />}/>
    {/* <Route path="/Vacation" element={<VacationAddition/>}/> */}
    <Route path="/admin/Profile" element={<AdminProfile user={user} />}/>
    <Route path = "/Customer" element = { <CustomerAddition/> } /> 
    <Route path = "/Customer/login" element = { <CustomerAdditionLogin onLogin={handleLogin} setUser = {setUser} /> } /> 
    <Route path="Main/Customer/Profile" element={<CustomerProfile user={user} />}/>
    <Route path="/Vacation" element={<VacationAddition user={user} />}/>
    <Route path="Main/VacationC" element={<VacationAdditionC user={user} />}/>
    <Route path="Main/Logout" element={<LogoutButton />}/>
    <Route path="/Main" element={<MainPage user={user} />}/>
    </Routes>


  </Router>
    
    
    
    
    
    </>
  )
}


export default  App
