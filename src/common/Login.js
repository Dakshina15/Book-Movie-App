import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import './LoginRegister.css';
import React, {useState} from 'react'

function Login(props) {
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  
  function Login(){
       
      const authorization=window.btoa(email+":"+Password)
      const headers= {
          "Accept": "application/json;charset=UTF-8",
          "authorization":"Basic " + authorization
        }        
     
      fetch(props.baseUrl + "auth/login", {
          method: "POST",
          headers        
      })
            .then((response) =>  
            response.json())
            .then((data) => {
            const userDetails = {data, loginStatus:true}
              localStorage.setItem("userDetails", JSON.stringify(userDetails))
              props.setLoginStatus(true)
              props.setIsOpen(false)
          });      
  }
  
    return (
          <div className="center">
              <form >
                  <TextField label="Username" required 
                  onChange={(e)=>setEmail(e.target.value)}
                  type="text" 
                  value={email} />
                  <br />

                  <TextField label="Password" required 
                  onChange={(e)=>setPassword(e.target.value)}
                  value={Password} 
                  type="password" />
                  <br /><br /><br />                               
              </form>

              <Button onClick={Login} variant="contained" color="primary" >Login</Button> 
          </div> 
      )
  }
  export default Login
  