import { useEffect, useState } from "react"
import { create } from "../../../lib/Admin/api"
import { Link, useNavigate } from "react-router"
import axios from "axios"
import { createNewVacaction } from "../../../lib/Vacation/apiVac"
const VacationAddition = ({user}) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [admins , setAdmins] = useState([])
    const navigate = useNavigate()

    //MARK: making the formData listener
    const [formData, setFormData] = useState({
        state: "",
        StartTime: new Date("2022-03-25"),
        EndTime: new Date("2022-03-25"),
        Paid: false,
        Country:"",
        Admin: user.id,
        Customer: "",

    })



    //MARK: listening to whatever the user types in the form
    const handleChange = (event) => {
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
            const response = await createNewVacaction(formData)
            console.log(response)
            console.log("It has worked")
        }
        catch (err) {
            console.log("Their is an error submiting ", err)
        }

    }

    async function fetchAdmins() {
        try {
        const admins = await listAdminById(user.id)
        console.log( "This is  admins " , admins)
        console.log(admins.data._id)
        console.log(admins.data)
        setAdmins(admins.data)
        }
        catch(err) {
            console.log("Thier is an error fetchin : " , err)
        }
      

    }

    useEffect(()=> {
        fetchAdmins()
        console.log("This is the user " , user)
    } , [user])




    return (
        <>

            <form onSubmit={handleSubmit} >

                <h2> Register as admin  </h2>
                <div id="adminForm"  >

                    <label htmlFor="state" >state</label>
                    <select name="state" onChange={handleChange} >

                        <option value="available"> available </option>
                        <option value="unavailable"> unavailable </option>
                    </select>
                    <br />

                    <label htmlFor="StartTime" >StartTime</label>
                    <input
                        type="date"
                        name="StartTime"
                        onChange={handleChange}
                        value={formData.StartTime}
                    />
                    <br />


                    <label htmlFor="EndTime" >EndTime</label>
                    <input
                        type="date"
                        name="EndTime"
                        onChange={handleChange}
                        value={formData.EndTime}
                    />
                    <br />



                    <label htmlFor="Paid" >Paid</label>
                    <select name="Paid" onChange={handleChange} >

                        <option value={true}> True </option>
                        <option value={false}> False </option>
                    </select>


                    <br />


                    <label htmlFor="Country" >Country</label>

                    <select name="Country" id="Country" onChange={handleChange} >


                         
                        <option value="Turkey"> Turkey </option>
                        <option value="Malasiya"> Malasiya </option>
                        <option value="Indonisia"> Indonisia </option>
                        <option value="Morocco"> Morocco </option>


                    </select>
                     




                    <label htmlFor="Admin" hidden>Admin</label>





                    <input

                        name="Admin"
                        onChange={handleChange}
                        value={formData.Admin}
                        hidden
                    />

                    <br />
                    <br />


                 




                    <input

                        name="Customer"
                        onChange={handleChange}
                        value={formData.Customer}
                        hidden
                    />

                    <br />
                    <br />



                    <button type="submit">Submit</button>
                </div>
            </form>


        </>
    )

}



export default VacationAddition