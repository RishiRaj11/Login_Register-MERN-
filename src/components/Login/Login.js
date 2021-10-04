import React,{useState} from 'react'
import "./login.css"
const Login = () => {

 const [user,setUser]=useState({
 email:"",
 password:"",
 });

 const changeHandler=(e)=>{
 //console.log(e.target.value)
 const {name,value}=e.target;
 setUser({
 ...user,
 [name]:value
 
 });

 }

    return (
         <div className="login">
         {console.log(user)}
            <h1>Login</h1>
            <input type="text" name="email" onChange={changeHandler} placeholder="Enter your Email"></input>
            <input type="password" name="password" onChange={changeHandler} placeholder="Enter your Password" ></input>
            <div className="button" >Login</div>
            <div>or</div>
            <div className="button" >Register</div>
        </div>
    )
}

export default Login;
