import { useEffect, useState } from "react"
import { create } from "../../../lib/Admin/api"
import { Link, useNavigate } from "react-router"
import axios from "axios"
import { createNewVacaction ,ListAllvacation  , UpdateVacation} from "../../../lib/Vacation/apiVac"
const VacationAdditionC = ({user}) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [admins , setAdmins] = useState([])
    const navigate = useNavigate()

    //MARK: making the formData listener
    // const [formData, setFormData] = useState({
    //     state: "",
    //     StartTime: new Date("2022-03-25"),
    //     EndTime: new Date("2022-03-25"),
    //     Paid: false,
    //     Country:"",
    //     Admin: user.id,
    //     Customer: "",

    // })

    const[Vacation , setVacation] = useState ([])



    //MARK: listening to whatever the user types in the form
    // const handleChange = (event) => {
    //     const currentFormData = { ...formData }
    //     const inputName = event.target.name
    //     const inputValue = event.target.value
    //     currentFormData[inputName] = inputValue
    //     console.log(inputValue)
    //     setFormData(currentFormData)
    // }


    const VacationFetch = async() => {

        const vacationData = await ListAllvacation()
       // console.log( "This is the vacation data that are fetched", vacationData)
        setVacation(vacationData)
       



    }

    //MARK: submiting the information to create ADMIN 
    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     try {
    //         const response = await createNewVacaction(formData)
    //         console.log(response)
    //         console.log("It has worked")
    //     }
    //     catch (err) {
    //         console.log("Their is an error submiting ", err)
    //     }

    // }


    async  function  updateVacationn (event, id  , data ) {

        try {
            event.preventDefault()
           await  UpdateVacation(id , {Customer:data})
           console.log("It has worked succesfully")

        } catch(err) {
            console.log("Their is an error updating info for vacation : " , err)
        }
    }

    // async function fetchAdmins() {
    //     try {
    //     const admins = await listAdminById(user.id)
    //     console.log( "This is  admins " , admins)
    //     console.log(admins.data._id)
    //     console.log(admins.data)
    //     setAdmins(admins.data)
    //     }
    //     catch(err) {
    //         console.log("Thier is an error fetchin : " , err)
    //     }
      

    // }

    useEffect(()=> {
        // fetchAdmins()
        VacationFetch()
         console.log("This is the vacation " , Vacation)
        console.log("This is the user " , user.id)
    } , [])




    return (
        <>



        {Vacation.map((obj) => {

            return(
                <> 
                <h2>{obj.Country}</h2>
                <h3>{obj.state}</h3>
                <form onSubmit={(e) => (updateVacationn(e,obj._id , user.id))}>
                    <button type="submit"> Choose package</button>
                </form>
                </>
            )
        })}

        </>
    )

}



export default VacationAdditionC