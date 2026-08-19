import React, { useState } from 'react'
import "../../../Pages/Auth/Auth.css"
import { useRef } from 'react';
import {CirclesWithBar} from "react-loader-spinner"
import {toast} from "react-toastify"
import axios from "../../../utils/axios"

const Signup = ({toggleNow}) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const pwdRef = useRef();
    const userType = useRef();
  
    const [loading, setLoading] = useState(false)
  
    const Signup = async(e)=>{
      e.preventDefault();
      const userData = {
        name: nameRef.current.value,
        email : emailRef.current.value,
        password:pwdRef.current.value,
        userType:userType.current.value
      };
      try {
        setLoading(true);
        const response = await axios.post("/user/signup",userData);
        if(response.data.success){
          toast.success(response.data.msg)
        }else{
          toast.error(response.data.msg)
        }
        
        nameRef.current.value = ""
        emailRef.current.value= "";
        pwdRef.current.value = "";
        userType.current.value = "";
      } catch (error) {
          toast.error(error.message)
      }finally{
        setLoading(false)
      }
    }
   return (
    <div className='auth-container'>
            <form>
            <h1>SignUp</h1>
            <input ref={nameRef} type="name" placeholder='Enter your name' />
            <br />
            <input ref={emailRef} type="email" placeholder='Enter your email' />
            <br />
            <input ref={pwdRef} type="password" placeholder='Enter your password' />
            <br />
            <p>Select your UserType</p>
            <br />
            <select ref={userType} onChange={(e)=>e.target.value}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <br />
            <button onClick={Signup}>
                          {""}
                          {!loading ? (<span>Register</span>):(
                            (<CirclesWithBar
                              height="40"
                              width="40"
                              color="#4fa94d"
                              outerCircleColor="#4fa94d"
                              innerCircleColor="#4fa94d"
                              barColor="#4fa94d"
                              ariaLabel="circles-with-bar-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                              />)
                          )}
                        </button>
            <br />
            <p>Already have an account? <span onClick={toggleNow}>Login</span></p>
        </form>
    </div>
  )
}

export default Signup