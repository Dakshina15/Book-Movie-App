import React,{ useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import './LoginRegister.css';

function Register(props) {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contactno, setContactno] = useState("")
    
    function Register(){
        console.warn(firstname,lastname,email,password,contactno)  
        const data= {
            "email_address": email,
            "first_name": firstname,
            "last_name": lastname,
            "mobile_number": contactno,
            "password": password
          }        
       
        fetch(props.baseUrl + "signup", {
            method: "POST",
            headers: {
                "Accept": "application/json;charset=UTF-8",
                "Content-Type" : "application/json;charset=UTF-8"
            },
            body: JSON.stringify(data),
        }).then((response) =>  
            response.json())
            .then((data) => {
              //setBookingId(data.reference_number);
              const userDetails = {data, loginStatus:true}
                localStorage.setItem("userDetails", JSON.stringify(userDetails))
                props.setLoginStatus(true)
                props.setIsOpen(false)
            });      
    }
    
    return (
        <div className="center">
            <form >
                <TextField label="First Name"
                onChange={(e)=>setFirstname(e.target.value)}
                type="text" 
                value={firstname}
                required /><br />
                <TextField label="Last Name"
                onChange={(e)=>setLastname(e.target.value)}
                type="text" 
                value={lastname}
                required /><br />
                <TextField label="Email"
                onChange={(e)=>setEmail(e.target.value)} 
                value={email}
                required /><br />
                <TextField label="Password" 
                onChange={(e)=>setPassword(e.target.value)} 
                type="password"
                value={password}
                required /><br />
                <TextField label="Contact No"
                onChange={(e)=>setContactno(e.target.value)} 
                type="tel"
                value={contactno}
                required /><br /><br /><br /><br /> 
            </form>
            <Button onClick={Register} variant="contained" color="primary" >
                Register
            </Button>
        </div>
    )
}

export default Register 
